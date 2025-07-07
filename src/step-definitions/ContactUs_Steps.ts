import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "./hooks/browserContextFixture";

Then("I should be on the Contact Us page", async () => {
  await expect(pageFixture.page.getByPlaceholder("First Name")).toBeVisible();
});

When("I enter a valid first name", async () => {
  await pageFixture.page.getByPlaceholder("First Name").fill("Joe");
});

When("I enter a specific first name {string}", async (firstName: string) => {
  await pageFixture.page.getByPlaceholder("First Name").fill(firstName);
});

When("I enter a valid last name", async () => {
  await pageFixture.page.getByPlaceholder("Last Name").fill("Bowman");
});

When("I enter a specific last name {string}", async (lastName: string) => {
  await pageFixture.page.getByPlaceholder("Last Name").fill(lastName);
});

When("I enter a valid email address", async () => {
  await pageFixture.page
    .getByPlaceholder("Email Address")
    .fill("joe.bowman@gmail.com");
});

When("I enter a specific email address {string}", async (emailAddress) => {
  await pageFixture.page.getByPlaceholder("Email Address").fill(emailAddress);
});

When("I enter a valid comment", async () => {
  await pageFixture.page
    .getByPlaceholder("Comments")
    .fill("My first Playwright script");
});

When(
  "I enter specific text {string} and a number {int} within the comment input field",
  async (comment: string, randomValue: number) => {
    await pageFixture.page
      .getByPlaceholder("Comments")
      .fill(comment + " " + randomValue);
  }
);

Then("I should be able to submit the form successfully", async () => {
  await pageFixture.page.locator("input[value='SUBMIT']").click();
  await pageFixture.page
    .locator("#contact_reply h1")
    .waitFor({ state: "visible", timeout: 5000 });
  const actualText = await pageFixture.page
    .locator("#contact_reply h1")
    .innerText();
  expect(actualText).toBe("Thank You for your Message!");
});
