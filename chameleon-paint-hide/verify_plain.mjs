import { chromium } from 'playwright';

const url = process.env.VURL || 'http://localhost:8094/';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

const logs = [];
page.on('console', m => logs.push(`[${m.type()}] ${m.text().slice(0, 300)}`));
page.on('pageerror', e => logs.push('[PAGEERROR] ' + e.message));
page.on('requestfailed', r => logs.push('[REQFAIL] ' + r.url().slice(0, 150) + ' :: ' + (r.failure()?.errorText || '')));

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

let progress = null;
for (let i = 0; i < 120; i++) {
  progress = await page.evaluate(() => {
    const bar = document.getElementById('unity-progress-bar-full');
    const canvas = document.getElementById('unity-canvas');
    return {
      barWidth: bar ? bar.style.width : null,
      canvasExists: !!canvas,
      canvasSize: canvas ? canvas.width + 'x' + canvas.height : null,
      loadingDisplay: document.getElementById('unity-loading-bar') ? document.getElementById('unity-loading-bar').style.display : null,
      termText: document.getElementById('terminal-overlay') ? document.getElementById('terminal-overlay').textContent.slice(0, 400) : null
    };
  }).catch(() => null);
  if (progress && progress.canvasExists && progress.canvasSize && progress.canvasSize !== '0x0' && (progress.loadingDisplay === 'none' || progress.barWidth === '100%')) break;
  await page.waitForTimeout(1000);
}
console.log('final progress:', JSON.stringify(progress));

await page.waitForTimeout(3000);
console.log('=== KEY LOGS ===');
for (const l of logs) {
  if (/error|fail|wasm|unity|abort|exception|parse|encoding/i.test(l)) console.log(l.slice(0, 500));
}
await browser.close();
