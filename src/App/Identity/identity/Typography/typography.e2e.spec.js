// @ts-check
const { test, expect } = require("@playwright/test");

test("Typography page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Identity Learn about our fundamental principles",
		})
		.click();
	await expect(
		page.getByRole("link", {
			name: "Typography",
		})
	).toHaveCount(2);
	await page
		.getByRole("link", {
			name: "Typography See our fronts and sizing arrow_forward",
		})
		.click();
});

test("visual regresion Typography", async ({ page }) => {
	await page.goto("http://localhost:3000/identity/typography");
	const brand = (await page.title()).includes("Swedbank")
		? "SwedbankPay"
		: "PayEx";
	await expect(
		page
			.getByRole("table")
			.filter({
				hasText:
					"HeroSwedbank Headline Bold56 px72 pxTitle 1Swedbank Headline Bold40 px48 pxTitle",
			})
	).toHaveScreenshot(`${brand}-typography-desktop-headers.png`);
});

// TODO: add mobile desktop VS mobile visual regression to ensure headers for each width

// TODO: check CSS typography comparing computedValue VS text describing the font-family && font-size && line-height for each type of text (e.g. each header, mobile && desktop, body, and code snippets)
