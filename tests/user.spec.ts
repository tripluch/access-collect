import { test, expect } from "@playwright/test";

test("the page user should contains", async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard/user");
  await expect(page).toHaveTitle(/Access Collect/);
  expect(page.getByText("UTILISATEURS")).toBeVisible;
  expect(page.getByText("Liste des utilisateurs : ")).toBeVisible;
  expect(
    page.getByRole("link", {
      name: "pictogramme ajouter Créer",
    }),
  ).toBeVisible;
});

test('the link named "Créer" should redirect to add-user page', async ({
  page,
}) => {
  await page.goto("http://localhost:3000/dashboard/user");
  await page.getByRole("link", { name: "pictogramme ajouter Créer" }).click();
  await expect(page).toHaveURL(/.*\/add-user/);
});
