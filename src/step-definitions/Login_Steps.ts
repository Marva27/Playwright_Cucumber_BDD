import { When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

When("I click on the login portal button", async () => {
  pageFixture.page
    .getByRole("link", { name: "LOGIN PORTAL Login Portal" })
    .click();
});

When("I type a username webdriver", async () => {
  pageFixture.page.getByPlaceholder("Username").fill("test");
});

When("I pause the test", async () => {
  console.log("Inspector opened!!!");
  await pageFixture.page.pause();
});
