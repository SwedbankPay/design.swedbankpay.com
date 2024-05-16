// @ts-check
const { test, expect } = require("@playwright/test");

test("toast page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Toast" })).toHaveCount(
		page.viewportSize().width < 991 ? 1 : 2,
	);
	await page
		.getByLabel("components overview")
		.getByRole("link", { name: "Toast" })
		.click();
	await expect(page).toHaveTitle(/Toast/);
	await expect(
		page.getByRole("heading", { name: "Toast", exact: true }),
	).toBeVisible();
});

test.describe("toast variants are styled and named accordingly", () => {
	const variants = [
		{
			name: "neutral",
			linkName: "Neutral",
			icon: "swepay-icon-info-circle-filled",
		},
		{
			name: "success",
			linkName: "Success",
			icon: "swepay-icon-check-circle-filled",
		},
		{
			name: "warning",
			linkName: "Warning",
			icon: "swepay-icon-warning-triangle-filled",
		},
		{
			name: "danger",
			linkName: "Danger",
			icon: "swepay-icon-error-triangle-filled",
		},
	];

	variants.map(async (variant) => {
		test(`toast ${variant.name} variant`, async ({ page }) => {
			await page.goto("http://localhost:3000/components/toast");
			await page.getByRole("link", { name: variant.linkName }).click();
			await page
				.getByRole("button", { name: `Show ${variant.linkName} toast` })
				.click();

			const componentPreviewContainer = page.locator("#overviewToast");
			const toast = componentPreviewContainer.locator("#toast-container");

			await expect(toast.locator(".toast > i")).toHaveClass(variant.icon);
			await expect(toast.getByText(`${variant.linkName}  title`)).toBeVisible();

			const brand = (await page.title()).includes("Swedbank")
				? "SwedbankPay"
				: "PayEx";

			await expect(toast).toHaveScreenshot(
				`${brand}-${variant.name}-toast.png`,
			);
			await page.locator("#toast-close-button").click();
			await expect(page.locator("#toast-close-button")).not.toBeVisible();
		});
	});
});

// TODO: if the Jest becomes obsolete, replace it by this one and delete it
