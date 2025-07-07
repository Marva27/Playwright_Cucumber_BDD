import { Given, When } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";
import { pageFixture } from "./hooks/browserContextFixture";

let browser: Browser; //Represents the browser instance (e.g., Chrome, Firefox, etc.) opened by Playwright.
let context: any; //Represents a browser context, which is an isolated environment within the browser where you can open pages and perform actions without affecting other contexts.
let page: Page;

Given("I navigate to the webdriveruniversity homepage", async () => {
  await pageFixture.page.goto("https://www.webdriveruniversity.com/");
});

When("I click on the CONTACT US link", async () => {
  await pageFixture.page
    .getByRole("link", { name: "CONTACT US Contact Us Form" })
    .click();
});

When("I switch to the new browser tab", async () => {
  await pageFixture.context.waitForEvent("page");
  const allPages = pageFixture.context.pages();
  pageFixture.page = allPages[allPages.length - 1];

  await pageFixture.page.bringToFront();
  await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });
});
