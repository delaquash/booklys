import { test, expect } from '@playwright/test';
import path from 'path';

const UI_URL = "http://localhost:5173/"


test('should allow the user to sign in', async ({ page }) => {
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
    // testing the link and sign out button
    await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
    await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
    await expect(page.getByRole("button", {name: "Sign Out"})).toBeVisible();
  });

  
  test("should allow user to add a hotel", async ({ page }) => {
    await page.goto(`${UI_URL}add-hotel`);
    await page.waitForLoadState('domcontentloaded');
  
    await page.waitForSelector('[name="name"]', { timeout: 60000 });
    await page.locator('[name="name"]').fill("Test Hotel");
    await page.locator('[name="city"]').fill("Test City");
    await page.locator('[name="country"]').fill("Test Country");
    await page
      .locator('[name="description"]')
      .fill("This is a description for the Test Hotel");
    await page.locator('[name="pricePerNight"]').fill("100");
    await page.selectOption('select[name="starRating"]', "3");

    await page.getByText("Budget").click();
  
    await page.getByLabel("Free Wifi").check();
    await page.getByLabel("Parking").check();
  
    await page.locator('[name="adultCount"]').fill("2");
    await page.locator('[name="childCount"]').fill("4");
  
    await page.setInputFiles('[name="imageFiles"]', [
      path.join(__dirname, "files", "1.png"),
      path.join(__dirname, "files", "2.png"),
    ]);
  
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByText("Hotel Saved!")).toBeVisible();
  });



  test("should display list of hotel", async ({ page }) => {
    await page.goto(`${UI_URL}my-hotels`);
    await expect(page.getByText("Olaide Emmanuel")).toBeVisible();
    await expect(page.getByText("Lorem Ipsum is simply dummy text of the printing and typesetting industry")).toBeVisible();
    await expect(page.getByText("Lagos, Nigeria")).toBeVisible();
    await expect(page.getByText("Boutique")).toBeVisible();
    await expect(page.getByText("£1000 per night")).toBeVisible();
    await expect(page.getByText("2 adults, 3 children")).toBeVisible();
    await expect(page.getByText("2 Star Rating")).toBeVisible();
    await page.getByRole("link", { name: "Add Hotel" }).click();
    await page.getByRole("link", {name: "View Details"}).click();
  });