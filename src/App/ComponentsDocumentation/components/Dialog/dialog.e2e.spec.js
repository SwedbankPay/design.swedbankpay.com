// @ts-check
const { test, expect } = require("@playwright/test");

test("Dialog page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Dialog" })).toHaveCount(
		page.viewportSize().width < 991 ? 1 : 2
	);
	await page.getByText("picture_in_pictureDialogarrow_forward").click();
	await expect(page).toHaveTitle(/Dialog/);
	await expect(
		page.getByRole("heading", { name: "Dialog", exact: true })
	).toBeVisible();
});

test("visual regresion accordions", async ({ page, browserName }) => {
	await page.goto("http://localhost:3000/components/dialog");

	const brand = (await page.title()).includes("Swedbank")
		? "SwedbankPay"
		: "PayEx";
	const dialogButton = page.getByRole("button", { name: "Open dialog" });

	await expect(dialogButton).toHaveScreenshot(`${brand}-dialog-button.png`);
	await dialogButton.click();
	await expect(page.getByRole("dialog").locator("section")).toHaveScreenshot(
		`${brand}-dialog-modal.png`
	);
	await expect(page.getByRole("dialog")).toHaveScreenshot(
		`${brand}-dialog-modal-screen.png`
	);
});
