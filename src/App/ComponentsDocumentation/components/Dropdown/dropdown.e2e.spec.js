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

test("Dropdown page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Dropdown" })).toHaveCount(
		page.viewportSize().width < 991 ? 1 : 2
	);
	await page.getByText("expand_moreDropdownarrow_forward").click();
	await expect(page).toHaveTitle(/Dropdown/);
	await expect(
		page.getByRole("heading", { name: "Dropdown", exact: true, level: 1 })
	).toBeVisible();
});
test.describe(`dropdown visual regressions`, () => {
	/**
	 * @type string
	 */
	let brand;
	/**
	 * @type {import("@playwright/test").Locator}
	 */
	let previewContainer;

	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:3000/components/dropdown");

		brand = (await page.title()).includes("Swedbank") ? "SwedbankPay" : "PayEx";
		previewContainer = await page.locator(".component-preview-content > div");
	});

	test(`visual regresion dropdown - toggle normal`, async ({ page }) => {
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-dropdown-toggle-normal.png`
		);
	});
	test(`visual regresion dropdown - toggle hovered`, async ({ page }) => {
		await previewContainer.getByRole("button").hover();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-dropdown-toggle-hovered.png`
		);
	});
	test(`visual regresion dropdown - toggle active`, async ({ page }) => {
		await previewContainer.getByRole("button").click();
		await expect(previewContainer).toHaveScreenshot(
			`${brand}-dropdown-toggle-active.png`
		);
	});
	test(`visual regresion dropdown - select dropdown opened`, async ({
		page,
	}) => {
		await previewContainer.getByRole("button").click();
		await expect(page.locator(".component-preview-content")).toHaveScreenshot(
			`${brand}-dropdown-select-opened-previewContainer.png`
		);
		await expect(
			previewContainer.getByText(
				"VISA Mastercard AMEX Maestro card Stripe Vipps Swish"
			)
		).toHaveScreenshot(`${brand}-dropdown-select-opened-dropdownContainer.png`);
	});
});

test.describe(`dropdown options behave correctly`, () => {
	/**
	 * @type string
	 */
	let brand;
	/**
	 * @type {import("@playwright/test").Locator}
	 */
	let previewContainer;

	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:3000/components/dropdown");

		brand = (await page.title()).includes("Swedbank") ? "SwedbankPay" : "PayEx";
		previewContainer = await page.locator(".component-preview-content > div");
	});

	test("dropdown options - disable rotation", async ({ page }) => {
		await expect(previewContainer.getByRole("button")).not.toHaveClass(
			"no-rotation"
		);
		await expect(previewContainer.getByRole("button").locator("i")).toHaveCSS(
			"transform",
			"none"
		);
		await previewContainer.getByRole("button").click();
		await expect(previewContainer.getByRole("button").locator("i")).toHaveCSS(
			"transform",
			"matrix(-1, 0, 0, -1, 0, 0)"
		);
		await previewContainer.getByRole("button").first().click();
		await expect(previewContainer.getByRole("button").locator("i")).toHaveCSS(
			"transform",
			"none"
		);
		await openOptions(page);
		await page
			.getByLabel("Disable toggle icon rotation")
			.click({ force: true });
		await closeOptions(page);
		await expect(previewContainer.getByRole("button").first()).toHaveClass(
			/no-rotation/
		);
		await previewContainer.getByRole("button").click();
		await expect(
			previewContainer.getByRole("button").first().locator("i")
		).toHaveCSS("transform", "none");
	});
	// TODO: test toggle type
	test("dropdown options - menu width", async ({ page }) => {
		const buttonWidth = (
			await previewContainer.getByRole("button").first().boundingBox()
		).width;

		await previewContainer.getByRole("button").first().click();
		await expect(
			(
				await previewContainer.locator(".dropdown-menu").boundingBox()
			).width
		).not.toBe(buttonWidth);
		await previewContainer.getByRole("button").first().click();
		await openOptions(page);
		await page.getByLabel("Full width").click({ force: true });
		await closeOptions(page);
		await previewContainer.getByRole("button").first().click();
		await expect(
			(
				await previewContainer.locator(".dropdown-menu").boundingBox()
			).width
		).toBe(buttonWidth);
	});
	// TODO: test menu position
	// TODO: test states (error, etc)
	// TODO: test keyboard navigation
	// TODO: test accessibility
	// TODO: test custom content
	// TODO: test navigation inside modal
});
