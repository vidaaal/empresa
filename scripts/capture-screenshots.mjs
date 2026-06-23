import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const OUT = "/opt/cursor/artifacts/screenshots";

const shots = [
  { name: "01-preloader", wait: 800, scroll: 0 },
  { name: "02-hero", wait: 3500, scroll: 0 },
  { name: "03-marquee", wait: 500, scroll: 900 },
  { name: "04-statement-showreel", wait: 500, scroll: 1800 },
  { name: "05-servicos", wait: 500, scroll: 3200 },
  { name: "06-trabalhos", wait: 500, scroll: 4500 },
  { name: "07-engajamentos", wait: 500, scroll: 5800 },
  { name: "08-estudio", wait: 500, scroll: 7000 },
  { name: "09-processo", wait: 500, scroll: 8200 },
  { name: "10-contato", wait: 500, scroll: 9500 },
  { name: "11-footer", wait: 500, scroll: 11000 },
];

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

await page.goto(BASE, { waitUntil: "networkidle" });

for (const shot of shots) {
  if (shot.wait) await page.waitForTimeout(shot.wait);
  await page.evaluate((y) => window.scrollTo(0, y), shot.scroll);
  await page.waitForTimeout(600);
  await page.screenshot({
    path: `${OUT}/${shot.name}.png`,
    fullPage: false,
  });
  console.log(`Captured ${shot.name}`);
}

await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(3500);
await page.screenshot({
  path: `${OUT}/00-fullpage.png`,
  fullPage: true,
});
console.log("Captured 00-fullpage");

await browser.close();
console.log("Done");
