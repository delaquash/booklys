import { test, expect } from '@playwright/test';

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
  

  test("should allow user to add hotel", async({ page })=> {
    await page.goto(`${UI_URL}/add_hotel`);

    await page.locator('[name="name"]').fill("Test Hotel");
    await page.locator("[name='city']").fill("Test City");
    await page.locator("[name='country']").fill("Test Country");
    await page.locator("[name='description']").fill("This is a description for the Test Hotel");

    await page.locator("[name='pricePerNight']").fill("100");
    await page.selectOption('select[name="starRating"]', '3');

    await page.getByText("Budget").click();
    await page.getByLabel("Free Wifi").check();

    await page.getByLabel("Parking").check()

    await page.locator("[name='adultCount']").fill("2");
    await page.locator("[name='childCount']").fill("4")

  })