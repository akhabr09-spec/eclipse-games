import { chromium } from 'playwright';

const url = 'http://localhost:8093/';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

const logs = [];
page.on('console', m => logs.push(`[${m.type()}] ${m.text().slice(0, 250)}`));
page.on('pageerror', e => logs.push('[PAGEERROR] ' + e.message));
page.on('requestfailed', r => logs.push('[REQFAIL] ' + r.url().slice(0, 150) + ' :: ' + (r.failure()?.errorText || '')));

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

// wait for unity canvas with actual rendered content (WebGL)
let progress = null;
for (let i = 0; i < 180; i++) {
  progress = await page.evaluate(() => {
    const bar = document.getElementById('unity-progress-bar-full');
    const canvas = document.getElementById('unity-canvas');
    return {
      barWidth: bar ? bar.style.width : null,
      canvasExists: !!canvas,
      canvasSize: canvas ? canvas.width + 'x' + canvas.height : null,
      loadingDisplay: document.getElementById('unity-loading-bar') ? document.getElementById('unity-loading-bar').style.display : null
    };
  }).catch(() => null);
  if (progress && progress.canvasExists && progress.canvasSize && progress.canvasSize !== '0x0' && (progress.loadingDisplay === 'none' || progress.barWidth === '100%')) break;
  await page.waitForTimeout(1000);
}
console.log('final progress:', JSON.stringify(progress));

// screenshot whatever state we're in
await page.waitForTimeout(5000);
await page.screenshot({ path: 'chameleon_1.png' });

console.log('=== KEY LOGS ===');
for (const l of logs) {
  if (/error|fail|wasm|unity|abort|exception/i.test(l)) console.log(l.slice(0, 400));
}
console.log('=== ALL LOGS (first 40) ===');
for (const l of logs.slice(0, 40)) console.log(l.slice(0, 200));
await browser.close();
