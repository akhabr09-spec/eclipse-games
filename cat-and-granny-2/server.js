const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = 9191;
const DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.wasm': 'application/wasm',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  // Strip .br extension to get the real content type
  if (ext === '.br') {
    const baseExt = path.basename(filePath, '.br').match(/\.([^.]+)$/);
    return baseExt ? (mimeTypes[baseExt[1]] || 'application/octet-stream') : 'application/octet-stream';
  }
  return mimeTypes[ext] || 'application/octet-stream';
}

function tryBrotliDecompress(data) {
  try {
    return zlib.brotliDecompressSync(data);
  } catch (e) {
    return null;
  }
}

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0]; // strip query params
  let filePath = path.join(DIR, urlPath === '/' ? 'index.html' : urlPath);
  
  // Security: prevent path traversal
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + urlPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = getContentType(filePath);

    const headers = {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    };

    // Handle .br files: decompress and serve
    if (ext === '.br') {
      const decompressed = tryBrotliDecompress(data);
      if (decompressed) {
        headers['Content-Length'] = decompressed.length;
        res.writeHead(200, headers);
        res.end(decompressed);
      } else {
        // Fallback: serve raw with Content-Encoding: br
        headers['Content-Encoding'] = 'br';
        headers['Content-Length'] = data.length;
        res.writeHead(200, headers);
        res.end(data);
      }
      return;
    }

    // For non-.br files, check if content is actually Brotli compressed
    // (Unity sometimes compresses loader.js and style.css without .br extension)
    const decompressed = tryBrotliDecompress(data);
    if (decompressed && decompressed.length > 0) {
      console.log(`Auto-decompressed Brotli file: ${urlPath}`);
      headers['Content-Length'] = decompressed.length;
      res.writeHead(200, headers);
      res.end(decompressed);
      return;
    }

    // Serve as-is
    headers['Content-Length'] = data.length;
    res.writeHead(200, headers);
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Game server running at http://localhost:${PORT}`);
});
