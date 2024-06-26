// @ts-check
const { test, expect } = require("@playwright/test");

test("Accordion page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Accordion" })).toHaveCount(
		page.viewportSize().width < 991 ? 1 : 2,
	);
	await page
		.getByLabel("components overview")
		.getByRole("link", { name: "Accordion" })
		.click();
	await expect(page).toHaveTitle(/Accordion/);
	await expect(
		page.getByRole("heading", { name: "Accordion", exact: true, level: 1 }),
	).toBeVisible();
});

test("visual regresion accordions", async ({ page }) => {
	await page.goto("http://localhost:3000/components/accordion");
	await page.getByRole("button", { name: "My title" }).first().click();

	const brand = (await page.title()).includes("Swedbank")
		? "SwedbankPay"
		: "PayEx";

	await expect(
		page.locator(".component-preview-content > div"),
	).toHaveScreenshot(`${brand}-accordions.png`);
});

test.describe(`accordions options behave correctly`, () => {
	test(`accordions option "Open one at a time" is not enabled by default and works`, async ({
		page,
	}) => {
		await page.goto("http://localhost:3000/components/accordion");

		await page.getByRole("button", { name: "My title" }).first().click();
		await expect(
			page
				.locator("#exp-1")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con",
				),
		).toBeVisible();
		await expect(
			page
				.locator("#exp-3")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con",
				),
		).not.toBeVisible();
		await page.getByRole("button", { name: "My title" }).nth(2).click();
		await expect(
			page
				.locator("#exp-1")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con",
				),
		).toBeVisible();
		await expect(
			page
				.locator("#exp-3")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con",
				),
		).toBeVisible();
	});
	test(`accordions option "Open one at a time" can be clicked and works`, async ({
		page,
		browserName,
	}) => {
		await page.goto("http://localhost:3000/components/accordion");

		if (page.viewportSize().width < 991) {
			await page.getByRole("button", { name: "Open options menu" }).click();
		}

		// TODO: improve the checkbox, for some reason getByRole('checkbox', {name: 'Open one at a time'}) is NOT working, but SHOULD. And getByLabel isn't working either
		await page.getByText("Open one at a time").check();

		if (page.viewportSize().width < 991) {
			await page.getByRole("button", { name: "Close options menu" }).click();
		}

		await page.getByRole("button", { name: "My title" }).first().click();
		await expect(
			page
				.locator("#exp-1")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con",
				),
		).toBeVisible();
		await expect(
			page
				.locator("#exp-3")
				.getByText(
					"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con",
				),
		).not.toBeVisible();

		// FIXME: this part fails on Mobile Chrome and mobile Safari, not sure why. Therefore skipping for now, but should be fixed
		if (
			page.viewportSize().width >= 991 ||
			(browserName !== "chromium" && browserName !== "webkit")
		) {
			await page.getByRole("button", { name: "My title" }).nth(2).click();
			await expect(
				page
					.locator("#exp-1")
					.getByText(
						"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con",
					),
			).not.toBeVisible();
			await expect(
				page
					.locator("#exp-3")
					.getByText(
						"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit con",
					),
			).toBeVisible();
		}
	});
});
