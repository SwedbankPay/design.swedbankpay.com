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
	await page.getByText("call_to_actionTopbararrow_forward").click();
	await expect(page).toHaveTitle(/Topbar/);
	await expect(
		page.getByRole("heading", { name: "Topbar", exact: true, level: 1 }),
	).toBeVisible();
});

const topbarTabs = [
	{
		name: "legacy desktop",
		btnText: "Desktop",
		desktopTopbar: true,
		isModalUnexpandedFullScreen: false,
		hasModal: false,
		isLegacy: true,
	},
	{
		name: "legacy mobile",
		btnText: "Mobile/tablet",
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
		await page
			.getByRole("heading", { name: "Topbar", exact: true })
			.isVisible();

		for (const topbarTab of topbarTabs) {
			clickDocPreviewTab(page, topbarTab.btnText);

			await expect(
				page.locator(".component-preview-content > div"),
			).toHaveScreenshot(`${brand}-topbar-${topbarTab.name}-closed.png`);
		}
	});

	// for legacy topbar, on mobile we skip since no links are displayed, no nav displayed in topbar, only in modal
	test(`hover & active & normal links`, async ({ page }) => {
		test.skip((await page.viewportSize().width) < 1200);

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
});
