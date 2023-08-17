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
		isLegacy: false,
	},
	{
		name: "mobile",
		btnText: "Mobile/tablet",
		desktopTopbar: false,
		isModalUnexpandedFullScreen: true,
		hasModal: true,
		isLegacy: false,
	},
	{
		name: "legacy desktop",
		btnText: "⚠️ Legacy Desktop",
		desktopTopbar: true,
		isModalUnexpandedFullScreen: false,
		hasModal: false,
		isLegacy: true,
	},
	{
		name: "legacy mobile",
		btnText: "⚠️ Legacy Mobile/tablet",
		desktopTopbar: false,
		isModalUnexpandedFullScreen: false,
		hasModal: true,
		isLegacy: true,
	},
];
let brand;

/**
 *
 * @param {import("@playwright/test").Page} page Playwright page object
 * @param {string} tabBtnText text of the doc preview container tab
 */
const clickDocPreviewTab = async (page, tabBtnText) => {
	await page.getByRole("link", { name: tabBtnText, exact: true }).click();
};

test.describe("visual regressions topbar", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:3000/components/topbar");

		brand = (await page.title()).includes("Swedbank") ? "SwedbankPay" : "PayEx";
	});

	test(`general UI closed`, async ({ page }) => {
		for (const topbarTab of topbarTabs) {
			clickDocPreviewTab(page, topbarTab.btnText);

			await expect(
				page.locator(".component-preview-content > div"),
			).toHaveScreenshot(`${brand}-topbar-${topbarTab.name}-closed.png`);
		}
	});

	test(`hover & active & normal links`, async ({ page }) => {
		for (const topbarTab of topbarTabs.filter((tab) => tab.desktopTopbar)) {
			clickDocPreviewTab(page, topbarTab.btnText);

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
			await page.reload();
			clickDocPreviewTab(page, topbarTab.btnText);

			await page.locator("#demo-topbar").getByLabel("Open menu").click();

			const modalContainer = topbarTab.isModalUnexpandedFullScreen
				? page.locator("#demo-topbar").getByRole("navigation")
				: page.locator(".component-preview-content > div");

			await expect(modalContainer).toHaveScreenshot(
				`${brand}-topbar-${topbarTab.name}-opened.png`,
			);
		}
	});

	test(`only pinned links are visible on non-expanded view`, async ({
		page,
	}) => {
		for (const topbarTab of topbarTabs.filter(
			(tab) => tab.desktopTopbar && !tab.isLegacy,
		)) {
			clickDocPreviewTab(page, topbarTab.btnText);

			// screenshot hover & active & normal links
			const pinnedLinks = page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.locator("a.pinned");
			const pinnedLinksAmount = await pinnedLinks.count();

			for (let linkIndex = 0; linkIndex < pinnedLinksAmount; linkIndex++) {
				const loopedLink = pinnedLinks.nth(linkIndex);

				await expect(loopedLink).toBeVisible();
			}

			const nonPinnedLinks = page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.locator("a:not(.pinned)");
			const nonPinnedLinksAmount = await nonPinnedLinks.count();

			for (let linkIndex = 0; linkIndex < nonPinnedLinksAmount; linkIndex++) {
				const loopedLink = nonPinnedLinks.nth(linkIndex);

				await expect(loopedLink).not.toBeVisible();
			}
		}
	});

	// TODO: test align right is only 1 link
	// TODO: on new: test scroll inside modal works and last item is visible
});
