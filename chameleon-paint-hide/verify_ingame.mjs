import { chromium } from 'playwright';

const url = 'http://localhost:8093/';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
for (let i = 0; i < 180; i++) {
  const done = await page.evaluate(() => {
    const bar = document.getElementById('unity-progress-bar-full');
    const loading = document.getElementById('unity-loading-bar');
    const canvas = document.getElementById('unity-canvas');
    return !!(bar && bar.style.width === '100%' && loading && loading.style.display === 'none' && canvas && canvas.width > 100);
  }).catch(() => false);
  if (done) break;
  await page.waitForTimeout(1000);
}
console.log('game loaded, waiting for scene...');
await page.waitForTimeout(20000);
await page.screenshot({ path: 'chameleon_ingame_1.png' });
// wait more and take second
await page.waitForTimeout(15000);
await page.screenshot({ path: 'chameleon_ingame_2.png' });
console.log('screenshots taken');
await browser.close();
