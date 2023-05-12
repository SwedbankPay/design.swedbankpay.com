// @ts-check
const { test, expect } = require("@playwright/test");

test.describe(`accordion script behave correctly`, () => {
	test(`accordions can be opened several at the same time`, async ({
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
	test(`accordion script to keep only 1 accordion opened at a time`, async ({
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
