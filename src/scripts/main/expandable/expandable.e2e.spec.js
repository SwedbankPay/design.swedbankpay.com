// @ts-check
const { test, expect } = require("@playwright/test");

test.describe(`expandable script behave correctly`, () => {
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
