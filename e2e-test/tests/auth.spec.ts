import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/"

test('should allow the user to sign in', async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click()

  // testing the sign in page that has email, password, signin button

  // testing the Sign In header is visible in the page
  await expect(page.getByRole("heading", {name: "Sign In"})).toBeVisible()
  
  // auto fill the input fields with this and 
  await page.locator("[name=email]").fill("piis2@test.com")
  await page.locator("[name=password]").fill("Equarshie857")
  // testing the login button
  await page.getByRole("button", {name: "Login"}).click();

  // Testing the response after login
  await expect(page.getByText("Sign in Successful")).toBeVisible();
  // testing the link and sign out button
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
  await expect(page.getByRole("button", {name: "Sign Out"})).toBeVisible();
});


test("should allow the user to register", async ({ page }) => {
  await page.goto(UI_URL)

  
})