// @ts-check
const { test, expect } = require("@playwright/test");

test.describe(`legacy-topbar script behave correctly`, () => {
	test(`topbar opens`, async ({ page }) => {
		await page.goto("http://localhost:3000/components/topbar");
		await page.getByRole("link", { name: "Desktop", exact: true }).click();

		const isDesktopViewport = (await page.viewportSize().width) > 1200;

		// expect topbar links to be visible on Desktop but NOT on mobile
		if (isDesktopViewport) {
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).toBeVisible();
		} else {
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).not.toBeVisible();
		}

		// expect, on load, not to have the "topbar-nav-open" class present YET (until we click on open button)
		if (isDesktopViewport) {
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).not.toHaveClass(/topbar-nav-open/);
		}

		// on desktop, before clicking any btn, all links & buttons present in nav should always be visible
		if (isDesktopViewport) {
			for (const navLinkOrBtn of await page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.locator(".topbar-link-container")
				.locator("a, button")
				.all()) {
				expect(navLinkOrBtn).toBeVisible();
			}
		}

		// get dimensions of navigation element
		let modalBox = isDesktopViewport
			? await page.locator("#demo-topbar").getByRole("navigation").boundingBox()
			: null;

		// on desktop expect nav to be smaller than full screen (on mobile no nav yet, so we don't care)
		if (isDesktopViewport) {
			await expect(modalBox.width).not.toBe(page.viewportSize().width);
			await expect(modalBox.height).not.toBe(page.viewportSize().height);
		}

		if (isDesktopViewport) {
			// expect NO hamburger menu btn on desktop
			await expect(
				page.locator("#demo-topbar").getByLabel("Open menu"),
			).not.toBeVisible();
		} else {
			// open modal by clicking the open btn - only MOBILE
			await page.locator("#demo-topbar").getByLabel("Open menu").click();
			// expect nav to be visible for both desktop AND mobile
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).toBeVisible();
			// expect nav to now have CS class "topbar-nav-open" present
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).toHaveClass(/topbar-nav-open/);

			// expect all links and buttons present in nav to be visible
			for (const navLinkOrBtn of await page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.locator(".topbar-link-container")
				.locator("a, button")
				.all()) {
				expect(navLinkOrBtn).toBeVisible();
			}

			// re-calculate modal dimensions
			modalBox = await page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.boundingBox();

			const topbarDimensions = await page.locator("#demo-topbar").boundingBox();

			// modal should have the same width as the header
			await expect(modalBox.width).toBe(topbarDimensions.width);
			// modal should be greater than 90% of the viewport height
			await expect(modalBox.height).toBeGreaterThan(
				(await page.viewportSize().height) * 0.8,
			);
		}
	});

	const closeModalActions = [
		{
			actionType: "keyboardPress",
			key: "Escape",
		},
		{
			actionType: "click",
			locator: ".topbar-nav.topbar-nav-open",
			position: "topLeft",
		},
		{
			actionType: "click",
			locator: "#demo-topbar",
			position: "closeButton",
		},
	];

	// on legacy topbar only MOBILE have a modal to open and close, so we're only testing on mobile viewport
	closeModalActions.map((closingAction) => {
		test(`topbar closes on ${closingAction.actionType}-${closingAction.position}`, async ({
			page,
		}) => {
			test.skip((await page.viewportSize().width) > 1200);
			await page.goto("http://localhost:3000/components/topbar");
			await page.getByRole("link", { name: "Desktop", exact: true }).click();

			await page.locator("#demo-topbar").getByLabel("Open menu").click();
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).toHaveClass(/topbar-nav-open/);

			const modalBox = await page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.boundingBox();

			const topbarDimensions = await page.locator("#demo-topbar").boundingBox();

			// modal should have the same width as the header
			await expect(modalBox.width).toBe(topbarDimensions.width);
			// modal should be greater than 90% of the viewport height
			await expect(modalBox.height).toBeGreaterThan(
				(await page.viewportSize().height) * 0.8,
			);

			// closes the modal
			if (closingAction.actionType === "keyboardPress") {
				await page.keyboard.press(closingAction.key);
			} else if (
				closingAction.actionType === "click" &&
				closingAction.position === "topLeft"
			) {
				await page
					.locator(closingAction.locator)
					.click({ position: { x: 0, y: 0 } });
			} else if (
				closingAction.actionType === "click" &&
				closingAction.position === "closeButton"
			) {
				await page
					.locator(closingAction.locator)
					.getByRole("button", { name: "Close menu" })
					.click();
			}

			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).not.toHaveClass(/topbar-nav-open/);
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).not.toBeVisible();
		});
	});
});
