import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";

let browser: Browser;

BeforeAll(async function () {
  console.log("\n In BeforeAll hook");
});

AfterAll(async function () {
  console.log("\n In AfterAll hook");
});

Before(async function () {
  browser = await chromium.launch({
    headless: false, // Set to true if you want to run tests in headless mode
  });
  pageFixture.context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  pageFixture.page = await pageFixture.context.newPage();
});

After(async function () {
  await pageFixture.page.close();
  await browser.close();
});
