import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard/organisation");
});

test.describe("Organisation Page", () => {
  test("What page should contain", async ({ page }) => {
    await expect(page).toHaveTitle(/Access Collect/);
    expect(page.getByText("ORGANISATION")).toBeVisible;
    expect(page.getByText("Liste des organisations :")).toBeVisible;
    expect(page.getByRole("button", { name: "Créer" })).toBeVisible;
    expect(
      page.getByRole("link", {
        name: "Accéder à la page dashboard/utilisateur Utilisateurs",
      }),
    ).toBeVisible;
    expect(
      page.getByRole("link", {
        name: "Accéder à la page dashboard/organisation Organisations",
      }),
    ).toBeVisible;
    expect(
      page.getByRole("link", {
        name: "Accéder à la page dashboard/point de collecte Points de collecte",
      }),
    ).toBeVisible;
    expect(
      page.getByRole("link", {
        name: "pictogramme ajouter Créer",
      }),
    ).toBeVisible;
  });

  test("Layout link named 'utilisateurs' should redirect to user page", async ({
    page,
  }) => {
    await page
      .getByRole("link", {
        name: "Accéder à la page dashboard/utilisateur Utilisateurs",
      })
      .click();
    await expect(page).toHaveURL(/.*\/user/);
  });

  test("Layout link named 'organisations' should redirect to organisations page", async ({
    page,
  }) => {
    await page
      .getByRole("link", {
        name: "Accéder à la page dashboard/organisation Organisations",
      })
      .click();
    await expect(page).toHaveURL(/.*\/organisation/);
  });

  test("Layout link named 'Points de collecte' should redirect to collectPoint page", async ({
    page,
  }) => {
    await page
      .getByRole("link", {
        name: "Accéder à la page dashboard/point de collecte Points de collecte",
      })
      .click();
    await expect(page).toHaveURL(/.*\/collected-point-list/);
  });

  test("Button named 'Créer' should redirect to add-organisation page", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "pictogramme ajouter Créer" }).click();
    await page.goto("http://localhost:3000/dashboard/add-organisation");
  });
});
