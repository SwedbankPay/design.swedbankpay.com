// @ts-check
const { test, expect } = require("@playwright/test");

test("Topbar page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Components Find all currently available components here",
		})
		.click();
	await expect(page.getByRole("link", { name: "Topbar" })).toHaveCount(
		page.viewportSize().width < 991 ? 1 : 2,
	);
	await page.getByText("calendar_view_dayAccordionarrow_forward").click();
	await expect(page).toHaveTitle(/Topbar/);
	await expect(
		page.getByRole("heading", { name: "Topbar", exact: true, level: 1 }),
	).toBeVisible();
});

const topbarTabs = [
	{
		name: "desktop",
		btnText: "Desktop",
		desktopTopbar: true,
		isModalUnexpandedFullScreen: true,
		hasModal: true,
	},
	{
		name: "mobile",
		btnText: "Mobile/tablet",
		desktopTopbar: false,
		isModalUnexpandedFullScreen: true,
		hasModal: true,
	},
	{
		name: "legacy desktop",
		btnText: "⚠️ Legacy Desktop",
		desktopTopbar: true,
		isModalUnexpandedFullScreen: false,
		hasModal: false,
	},
	{
		name: "legacy mobile",
		btnText: "⚠️ Legacy Mobile/tablet",
		desktopTopbar: false,
		isModalUnexpandedFullScreen: false,
		hasModal: true,
	},
];
let brand;

test.describe("visual regressions topbar", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:3000/components/topbar");

		brand = (await page.title()).includes("Swedbank") ? "SwedbankPay" : "PayEx";
		// await page
		// 	.getByRole("link", { name: topbarTab.btnText, exact: true })
		// 	.click();
	});

	test(`general UI closed`, async ({ page }) => {
		for (const topbarTab of topbarTabs) {
			await page
				.getByRole("link", { name: topbarTab.btnText, exact: true })
				.click();

			await expect(
				page.locator(".component-preview-content > div"),
			).toHaveScreenshot(`${brand}-topbar-${topbarTab.name}-closed.png`);
		}
	});

	test(`hover & active & normal links`, async ({ page }) => {
		for (const topbarTab of topbarTabs.filter((tab) => tab.desktopTopbar)) {
			await page
				.getByRole("link", { name: topbarTab.btnText, exact: true })
				.click();

			await page.locator("#demo-topbar").getByRole("link").nth(2).hover();
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).toHaveScreenshot(
				`${brand}-topbar-${topbarTab.name}-links-ui-feedbacks.png`,
			);
		}
	});

	test(`general UI modal opened`, async ({ page }) => {
		for (const topbarTab of topbarTabs.filter((tab) => tab.hasModal)) {
			await page
				.getByRole("link", { name: topbarTab.btnText, exact: true })
				.click();

			await page.locator("#demo-topbar").getByLabel("Open menu").click();

			const modalContainer = topbarTab.isModalUnexpandedFullScreen
				? page.locator("#demo-topbar").getByRole("navigation")
				: page.locator(".component-preview-content > div");

			await expect(modalContainer).toHaveScreenshot(
				`${brand}-topbar-${topbarTab.name}-opened.png`,
			);

			await page.keyboard.press("Escape");
		}
	});

	test(`only pinned links are visible on non-expanded view`, async ({
		page,
	}) => {
		for (const topbarTab of topbarTabs.filter((tab) => tab.desktopTopbar)) {
			await page
				.getByRole("link", { name: topbarTab.btnText, exact: true })
				.click();

			// screenshot hover & active & normal links
			await expect(
				page
					.locator("#demo-topbar")
					.getByRole("navigation")
					.locator("a.pinned"),
			).toBeVisible();
			await expect(
				page
					.locator("#demo-topbar")
					.getByRole("navigation")
					.locator("a:not(.pinned)"),
			).not.toBeVisible();
		}
	});

	// TODO: test align right is only 1 link
	// TODO: create a utility function to refactor `await page.getByRole("link", { name: topbarTab.btnText, exact: true }).click();`
	// TODO: on new: test scroll inside modal works and last item is visible
});
