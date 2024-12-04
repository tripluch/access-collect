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
    // await page
    //   .getByPlaceholder("OrganisationExemple")
    //   .fill("Organisation Playwright");
    // await page
    //   .getByPlaceholder("1 rue de l'exemple 01234 ExempleVille")
    //   .fill("2 rue du test 01111 TestVille");
    // await page.getByPlaceholder("0123456789").fill("0101020203");
    // await page.getByPlaceholder("Luc Exemple").fill("Jean-Paul Playwrîght");
    // await page.getByPlaceholder("AGR-2023-0567").fill("AGR-2345-0567");
    // await expect(page.getByPlaceholder("OrganisationExemple")).toHaveValue(
    //   /[a-zA-Z0-9À-ÖØ-öø-ÿ -]/,
    // );
    // await expect(
    //   page.getByPlaceholder("1 rue de l'exemple 01234 ExempleVille"),
    // ).toHaveValue(/[a-zA-Z0-9À-ÖØ-öø-ÿ -]/);
    // await expect(page.getByPlaceholder("0123456789")).toHaveValue(/[0-9]/);
    // await expect(page.getByPlaceholder("Luc Exemple")).toHaveValue(
    //   /[a-zA-Z-À-ÖØ-öø-ÿ -]/,
    // );
    // await expect(page.getByPlaceholder("AGR-2023-0567")).toHaveValue(
    //   /^[a-zA-Z0-9\-]+$/,
    // );
    const requestPromise = page.waitForRequest('dashboard/add-organisation');
    await page.getByRole("button", { name: "Confirmer" }).click();
    await requestPromise;


  });
});
