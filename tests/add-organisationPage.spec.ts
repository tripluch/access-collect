import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/dashboard/add-organisation");
});

test.describe("Add Organisation Page", () => {
  test("What page should contain", async ({ page }) => {
    await expect(page).toHaveTitle(/Access Collect/);
    expect(page.getByText("ORGANISATION")).toBeVisible;
    expect(page.getByText("AJOUTER UNE ORGANISATION :")).toBeVisible;
    expect(page.locator('input[name:"name"]')).toBeVisible;
    expect(page.locator('input[name:"address"]')).toBeVisible;
    expect(page.locator('input[name:"phone"]')).toBeVisible;
    expect(page.locator('input[name:"contact"]')).toBeVisible;
    expect(page.locator('input[name:"agrement"]')).toBeVisible;
    expect(page.getByRole("button", { name: "ANNULER" })).toBeVisible;
    expect(page.getByRole("button", { name: "Confirmer" })).toBeVisible;
  });

  test("Button named 'ANNULER' should redirect to organisation page", async ({
    page,
  }) => {
    await page
      .getByRole("button", {
        name: "ANNULER",
      }) 
      .click();
    await page.goto("/dashboard/organisation");
  });

  test("OrgaForm should add a new organisation to db", async ({ page }) => {
    await page
      .getByPlaceholder("Nom")
      .fill("Organisation Playwright");
    await page
      .getByPlaceholder("Adresse")
      .fill("2 rue du test 01111 TestVille");
    await page.getByPlaceholder("Téléphone").fill("0101020203");
    await page.getByPlaceholder("Contact").fill("Jean-Paul Playwrîght");
    await page.getByPlaceholder("N° d'agrément").fill("AGR-2345-0567");
    await expect(page.getByPlaceholder("Nom")).toHaveValue(
      /[a-zA-Z0-9À-ÖØ-öø-ÿ -]/,
    );
    await expect(
    page.getByPlaceholder("Adresse"),
    ).toHaveValue(/[a-zA-Z0-9À-ÖØ-öø-ÿ -]/);
    await expect(page.getByPlaceholder("Téléphone")).toHaveValue(/[0-9]/);
    await expect(page.getByPlaceholder("Contact")).toHaveValue(
      /[a-zA-Z-À-ÖØ-öø-ÿ -]/,
    );
    await expect(page.getByPlaceholder("N° d'agrément")).toHaveValue(
      /^[a-zA-Z0-9\-]+$/,
    );
    const requestPromise = page.waitForRequest("dashboard/add-organisation");
    await page.getByRole("button", { name: "Confirmer" }).click();
    await requestPromise;
  });
});
