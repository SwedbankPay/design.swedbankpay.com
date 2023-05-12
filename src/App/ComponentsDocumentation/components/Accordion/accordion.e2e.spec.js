// @ts-check
const { test, expect } = require("@playwright/test");

test("Accordion page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Accordion" })).toHaveCount(2);
	await page.getByText("calendar_view_dayAccordionarrow_forward").click();
});

// TODO: try to scope snreenshot to the accordion group, not the whole component-preview
test("visual regresion accordions", async ({ page }) => {
	await page.goto("http://localhost:3000/components/accordion");
	await page
		.getByRole("button", { name: "keyboard_arrow_down My title" })
		.first()
		.click();
	await expect(page.locator(".component-preview-content")).toHaveScreenshot(
		`accordions.png`
	);
});

test.describe(`accordions options behave correctly`, () => {
	test(`accordions option "Open one at a time" is not enabled by default and works`, async ({
		page,
	}) => {
		await page.goto("http://localhost:3000/components/accordion");

		await page
			.getByRole("button", { name: "keyboard_arrow_down My title" })
			.first()
			.click();
		await expect(
			page
				.locator("#exp-1")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con"
				)
		).toBeVisible();
		await expect(
			page
				.locator("#exp-3")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con"
				)
		).not.toBeVisible();
		await page
			.getByRole("button", { name: "keyboard_arrow_down My title" })
			.nth(2)
			.click();
		await expect(
			page
				.locator("#exp-1")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con"
				)
		).toBeVisible();
		await expect(
			page
				.locator("#exp-3")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con"
				)
		).toBeVisible();
	});
	test(`accordions option "Open one at a time" can be clicked and works`, async ({
		page,
	}) => {
		await page.goto("http://localhost:3000/components/accordion");
		// TODO: improve the checkbox, for some reason getByRole('checkbox', {name: 'Open one at a time'}) is NOT working, but SHOULD. And getByLabel isn't working either
		await page.getByText("Open one at a time").check();
		await page
			.getByRole("button", { name: "keyboard_arrow_down My title" })
			.first()
			.click();
		await expect(
			page
				.locator("#exp-1")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con"
				)
		).toBeVisible();
		await expect(
			page
				.locator("#exp-3")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con"
				)
		).not.toBeVisible();
		await page
			.getByRole("button", { name: "keyboard_arrow_down My title" })
			.nth(2)
			.click();
		await expect(
			page
				.locator("#exp-1")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con"
				)
		).toBeVisible();
		await expect(
			page
				.locator("#exp-3")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con"
				)
		).toBeVisible();
	});
});
