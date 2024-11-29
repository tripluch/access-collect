import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard/organisation");
});

test.describe("Organisation Page", () => {
  test("What page should contain", async ({ page }) => {
    await expect(page).toHaveTitle(/Access Collect/);
    await expect(page.getByText("ORGANISATION")).toBeVisible;
    await expect(page.getByText("Liste des organisations :")).toBeVisible;
    await expect(page.getByRole("button", { name: "Créer" })).toBeVisible;
    await expect(
      page.getByRole("link", {
        name: "Accéder à la page dashboard/utilisateur Utilisateurs",
      }),
    ).toBeVisible;
    await expect(
      page.getByRole("link", {
        name: "Accéder à la page dashboard/organisation Organisations",
      }),
    ).toBeVisible;
    await expect(
      page.getByRole("link", {
        name: "Accéder à la page dashboard/point de collecte Points de collecte",
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

  //have to correct this one 
  test("Button named 'Créer' should redirect to add-organisation page", async ({
    page,
  }) => {
    const button = await page.getByRole("link", {
      name: "pictogramme ajouter Créer",
    });
    button.click;
    await expect(page).toHaveURL(/.*\/add-organisation/);
  });
});
