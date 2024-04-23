import { test, expect } from '@playwright/test';
import path from 'path';

const UI_URL = "http://localhost:5173/"


test.beforeEach('should allow the user to sign in', async ({ page }) => {
    await page.goto(UI_URL);
  
    // get the sign in button
    await page.getByRole("link", { name: "Sign In" }).click();
  
    // testing the Sign In header is visible in the page
    await expect(page.getByRole("heading", {name: "Sign In"})).toBeVisible();
  
    // testing the sign in page that has email, password, signin button
    // auto fill the input fields with this and 
    await page.locator("[name=email]").fill("piis2@test.com")
    await page.locator("[name=password]").fill("Equarshie857")
    // testing the login button
    await page.getByRole("button", {name: "Login"}).click();
  
    // Testing the response after login
    await expect(page.getByText("Sign in Successful")).toBeVisible();
  });

  test("should allow user to search for hotel", async ({ page })=> {
    await page.goto(UI_URL);

    await page.getByPlaceholder("Where are you going").fill("Olaide")
    await page.getByRole("button", {name: "Search"}).click();

    await expect(page.getByText("Hotels found in Olaide")).toBeVisible()
    await expect(page.getByText("Olaide Emmanuel")).toBeVisible()
  })