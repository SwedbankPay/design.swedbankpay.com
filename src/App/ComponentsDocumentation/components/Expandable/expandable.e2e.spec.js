// @ts-check
const { test, expect } = require("@playwright/test");

test("Expandable page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Expandable" })).toHaveCount(
		page.viewportSize().width < 991 ? 1 : 2
	);
	await page.getByText("expandExpandablearrow_forward").click();
	await expect(page).toHaveTitle(/Expandable/);
	await expect(
		page.getByRole("heading", { name: "Expandable", exact: true, level: 1 })
	).toBeVisible();
});

test("visual regresion expandables without icon", async ({ page }) => {
	await page.goto("http://localhost:3000/components/expandable");
	await page
		.getByRole("button", { name: "keyboard_arrow_down My title" })
		.first()
		.click();

	const brand = (await page.title()).includes("Swedbank")
		? "SwedbankPay"
		: "PayEx";

	await expect(
		page.locator(".component-preview-content > div")
	).toHaveScreenshot(`${brand}-expandable.png`);
});

test("visual regresion expandables with icon", async ({ page }) => {
	await page.goto("http://localhost:3000/components/expandable");

	if (page.viewportSize().width < 991) {
		await page.getByRole("button", { name: "Open options menu" }).click();
	}

	// TODO: improve the checkbox, for some reason getByRole('checkbox', {name: 'Open one at a time'}) is NOT working, but SHOULD. And getByLabel isn't working either
	await page.locator("label").check();

	if (page.viewportSize().width < 991) {
		await page.getByRole("button", { name: "Close options menu" }).click();
	}

	await page
		.getByRole("button", { name: "keyboard_arrow_down My title" })
		.first()
		.click();

	const brand = (await page.title()).includes("Swedbank")
		? "SwedbankPay"
		: "PayEx";

	await expect(
		page.locator(".component-preview-content > div")
	).toHaveScreenshot(`${brand}-expandable-icons.png`);
});

test.describe(`expandables options behave correctly`, () => {
	test(`expandables NOT nested inside an ".expandable-group" can open multiple at the same time`, async ({
		page,
	}) => {
		await page.goto("http://localhost:3000/components/expandable");

		await expect(
			page
				.locator("div:not(.expandable-group) > .expandable > .expandable-body")
				.first()
		).not.toBeVisible();
		await expect(
			page
				.locator("div:not(.expandable-group) > .expandable > .expandable-body")
				.nth(2)
		).not.toBeVisible();
		await page
			.locator("div:not(.expandable-group) > .expandable")
			.first()
			.getByRole("button", { name: "My title" })
			.click();
		await expect(
			page
				.locator("div:not(.expandable-group) > .expandable > .expandable-body")
				.first()
		).toBeVisible();
		await expect(
			page
				.locator("div:not(.expandable-group) > .expandable > .expandable-body")
				.nth(2)
		).not.toBeVisible();
		await page
			.locator("div:not(.expandable-group) > .expandable")
			.nth(2)
			.getByRole("button", { name: "My title" })
			.click();
		await expect(
			page
				.locator("div:not(.expandable-group) > .expandable > .expandable-body")
				.first()
		).toBeVisible();
		await expect(
			page
				.locator("div:not(.expandable-group) > .expandable > .expandable-body")
				.nth(2)
		).toBeVisible();
	});

	test(`expandables NESTED inside an ".expandable-group" can open ONLY ONE at the same time`, async ({
		page,
	}) => {
		await page.goto("http://localhost:3000/components/expandable");

		await expect(
			page.locator(".expandable-group > .expandable > .expandable-body").first()
		).not.toBeVisible();
		await expect(
			page.locator(".expandable-group > .expandable > .expandable-body").nth(2)
		).not.toBeVisible();
		await page
			.locator(".expandable-group > .expandable")
			.first()
			.getByRole("button", { name: "My title" })
			.click();
		await expect(
			page.locator(".expandable-group > .expandable > .expandable-body").first()
		).toBeVisible();
		await expect(
			page.locator(".expandable-group > .expandable > .expandable-body").nth(2)
		).not.toBeVisible();
		await page
			.locator(".expandable-group > .expandable")
			.nth(2)
			.getByRole("button", { name: "My title" })
			.click();
		await expect(
			page.locator(".expandable-group > .expandable > .expandable-body").first()
		).not.toBeVisible();
		await expect(
			page.locator(".expandable-group > .expandable > .expandable-body").nth(2)
		).toBeVisible();
	});
});
