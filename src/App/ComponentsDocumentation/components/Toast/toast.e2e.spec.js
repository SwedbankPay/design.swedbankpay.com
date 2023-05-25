// @ts-check
const { test, expect } = require("@playwright/test");

test("toast page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Toast" })).toHaveCount(2);
	await page.getByText("picture_in_pictureToastarrow_forward").click();
	await expect(page).toHaveTitle(/Toast/);
	await expect(
		page.getByRole("heading", { name: "Toast", exact: true })
	).toBeVisible();
});

test.describe("toast variants are styled and named accordingly", () => {
	const variants = [
		{
			name: "neutral",
			linkName: "Neutral",
			icon: "info",
		},
		{
			name: "success",
			linkName: "Success",
			icon: "check_circle",
		},
		{
			name: "warning",
			linkName: "Warning",
			icon: "warning",
		},
		{
			name: "danger",
			linkName: "Danger",
			icon: "error",
		},
	];

	variants.map(async (variant) => {
		test(`toast ${variant.name} variant`, async ({ page }) => {
			await page.goto("http://localhost:3000/components/toast");
			await page.getByRole("link", { name: variant.linkName }).click();
			await page
				.getByRole("button", { name: `Show ${variant.linkName} toast` })
				.click();
			const toast = page.locator("#overviewToast");
			await expect(
				toast.getByText(variant.icon, { exact: true })
			).toBeVisible();
			await expect(toast.getByText(`${variant.linkName}  title`)).toBeVisible();
			const brand = (await page.title()).includes("Swedbank")
				? "SwedbankPay"
				: "PayEx";
			await expect(toast.locator("css=.toast")).toHaveScreenshot(
				`${brand}-${variant.name}-toast.png`,
				{
					maxDiffPixelRatio: 0.001,
				}
			);
			await page.locator("#toast-close-button").click();
			await expect(page.locator("#toast-close-button")).not.toBeVisible();
		});
	});
});

// TODO: if the Jest becomes obsolete, replace it by this one and delete it
