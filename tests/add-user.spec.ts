import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/dashboard/add-user");
});

test.describe("Add User Page", () => {
  test("What add-user page should contains", async ({ page }) => {
    await expect(page).toHaveTitle(/Access Collect/);
    expect(page.getByText("UTILISATEUR")).toBeVisible;
    expect(page.getByText("AJOUTER UN UTILISATEUR :")).toBeVisible;
    expect(page.locator('input[name:"name"]')).toBeVisible;
    expect(page.locator('input[name:"email"]')).toBeVisible;
    expect(page.locator('input[name:"password"]')).toBeVisible;
    expect(page.locator('input[name:"phone"]')).toBeVisible;
    expect(page.locator('input[name:"agrement"]')).toBeVisible;
    expect(page.locator('select[name:"role"]')).toBeVisible;
    expect(page.locator('select[name:"organisationId"]')).toBeVisible;
    expect(page.getByRole("button", { name: "ANNULER" })).toBeVisible;
    expect(page.getByRole("button", { name: "Confirmer" })).toBeVisible;
  });

  test("Button named 'ANNULER' should redirect to user page", async ({
    page,
  }) => {
    await page
      .getByRole("button", {
        name: "ANNULER",
      })
      .click();
    await page.goto("/dashboard/user");
  });

  test("UserForm should add a user to db", async ({ page }) => {
    await page.getByPlaceholder("Jean Exemple").click();
    await page.getByPlaceholder("Jean Exemple").fill("Jean");
    await page.getByPlaceholder("mail@exemple.fr").click();
    await page.getByPlaceholder("mail@exemple.fr").fill("jeanValou@mail.fr");
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill("JeanValJean");
    await page.getByPlaceholder("0612345678").click();
    await page.getByPlaceholder("0612345678").fill("0606060606");
    await page.locator('select[name="role"]').selectOption("admin");
    await page
      .locator('select[name="organisationId"]')
      .selectOption("78b8df08-7159-485a-b455-f3235b813ff0");
    const requestPromise = page.waitForRequest("dashboard/add-user");
    await page.getByRole("button", { name: "Confirmer" }).click();
    await requestPromise;
  });
});
