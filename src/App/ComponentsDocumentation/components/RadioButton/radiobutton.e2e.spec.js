// @ts-check
const { test, expect } = require("@playwright/test");

/**
 *
 * @param {import("@playwright/test").Page} page
 * @returns boolean
 */
const checkIfOptionsDisplayed = async (page) =>
	await (
		await page.locator(".showcase-panel-advanced").getAttribute("class")
	).includes("options-active");

const openOptions = async (page) => {
	const areOptionsDisplayed = await checkIfOptionsDisplayed(page);

	if (!areOptionsDisplayed) {
		await page.getByRole("button", { name: "Open options menu" }).click();
	}
};

const closeOptions = async (page) => {
	const areOptionsDisplayed = await checkIfOptionsDisplayed(page);

	if (areOptionsDisplayed) {
		await page.getByRole("button", { name: "Close options menu" }).click();
	}
};

test("Radio buttons page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Radio button" })).toHaveCount(
		page.viewportSize().width < 991 ? 1 : 2,
	);
	await page
		.getByLabel("components overview")
		.getByRole("link", { name: "Radio button" })
		.click();
	await expect(page).toHaveTitle(/Radio button/);
	await expect(
		page.getByRole("heading", { name: "Radio button", exact: true, level: 1 }),
	).toBeVisible();
});
test.describe(`radio button visual regressions`, () => {
	/**
	 * @type string
	 */
	let brand;
	/**
	 * @type {import("@playwright/test").Locator}
	 */
	let previewContainer;

	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:3000/components/radio-button");

		brand = (await page.title()).includes("Swedbank") ? "SwedbankPay" : "PayEx";
		previewContainer = await page.locator(".component-preview-content > form");
	});

	// radio input default
	test(`visual regresion radio input default`, async ({ page }) => {
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-default.png`,
		);
		await previewContainer.getByText("Longer label", { exact: true }).hover();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-default-hovered.png`,
		);
		await previewContainer.getByText("Longer label", { exact: true }).click();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-default-checked-changed.png`,
		);
	});
	// radio input - checkmark - small
	test(`visual regresion radio input checkmark small`, async ({ page }) => {
		page.getByRole("link", { name: "Checkmark" }).click();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-small.png`,
		);
		await previewContainer.getByText("Longer label", { exact: true }).hover();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-small-hovered.png`,
		);
		await previewContainer.getByText("Longer label", { exact: true }).click();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-small-checked-changed.png`,
		);
	});
	// radio input - checkmark - large
	test(`visual regresion radio input checkmark large`, async ({ page }) => {
		page.getByRole("link", { name: "Checkmark" }).click();

		await openOptions(page);
		await page.getByLabel("Large").click({ force: true });
		await closeOptions(page);

		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-large.png`,
		);
		await previewContainer.getByText("Longer label", { exact: true }).hover();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-large-hovered.png`,
		);
		await previewContainer.getByText("Longer label", { exact: true }).click();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-large-checked-changed.png`,
		);
	});
	// radio input - checkmark - subtext
	test(`visual regresion radio input checkmark with subtext`, async ({
		page,
	}) => {
		page.getByRole("link", { name: "Checkmark" }).click();

		await openOptions(page);
		await page.getByLabel("Label subtext").click({ force: true });
		await closeOptions(page);

		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-subtext.png`,
		);
		await previewContainer.getByText("Longer label", { exact: true }).hover();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-subtext-hovered.png`,
		);
		await previewContainer.getByText("Longer label", { exact: true }).click();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-radio-input-checkmark-subtext-checked-changed.png`,
		);
	});
});

test.describe(`radio input options behave correctly`, () => {
	// TODO:
});
