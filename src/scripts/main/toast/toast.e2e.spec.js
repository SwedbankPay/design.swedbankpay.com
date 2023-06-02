// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
	await page.goto("http://localhost:3000/components/toast");
});

// TODO: improve test by locating close button by something else than id attribute
test("toast displays & closes by mouse", async ({ page }) => {
	await page.getByRole("button", { name: "Show Neutral toast" }).click();
	await expect(
		page.getByText(
			"infoclose Neutral title: Input informative alert information here, provide link "
		)
	).toBeVisible();
	await page.locator("#toast-close-button").click();
	await expect(
		page.getByText(
			"infoclose Neutral title: Input informative alert information here, provide link "
		)
	).not.toBeVisible();
});

// TODO: improve test by locating close button by something else than id attribute
test("toast displays & closes by keyboard navigation", async ({ page }) => {
	await page.getByRole("button", { name: "Show Neutral toast" }).press("Enter");
	await expect(
		page.getByText(
			"infoclose Neutral title: Input informative alert information here, provide link "
		)
	).toBeVisible();
	await page.locator("#toast-close-button").press("Enter");
	await expect(
		page.getByText(
			"infoclose Neutral title: Input informative alert information here, provide link "
		)
	).not.toBeVisible();
});

// TODO: improve test by using locator more meaningful than text to localize toast
test("toast does not closes when mouse click outside its zone nor when hit escape", async ({
	page,
}) => {
	await page.getByRole("button", { name: "Show Neutral toast" }).press("Enter");
	await page.keyboard.press("Escape");
	await expect(
		page.getByText(
			"infoclose Neutral title: Input informative alert information here, provide link "
		)
	).toBeVisible();
	await page.getByRole("heading", { name: "Toast", exact: true }).click();
	await expect(
		page.getByText(
			"infoclose Neutral title: Input informative alert information here, provide link "
		)
	).toBeVisible();
});

test("toast closes by itself if wait the appropriate time", async ({
	page,
}) => {
	await page.getByRole("button", { name: "Show Neutral toast" }).press("Enter");
	await expect(
		page.getByText(
			"infoclose Neutral title: Input informative alert information here, provide link "
		)
	).toBeVisible({
		timeout: 2000,
	});
	await expect(
		page.getByText(
			"infoclose Neutral title: Input informative alert information here, provide link "
		)
	).not.toBeVisible({
		timeout: 10000,
	});
});
