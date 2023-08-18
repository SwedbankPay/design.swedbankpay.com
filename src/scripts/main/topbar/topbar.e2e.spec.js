// @ts-check
const { test, expect } = require("@playwright/test");

// TODO: do. Test both desktop && mobile
test.describe(`modern  topbar script behave correctly`, () => {
	test(`topbar opens`, async ({ page }) => {
		await page.goto("http://localhost:3000/components/topbar");
		await page.getByRole("link", { name: "Desktop", exact: true }).click();

		const isDesktopViewport = (await page.viewportSize().width) > 1200;

		if (isDesktopViewport) {
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).toBeVisible();
		} else {
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).not.toBeVisible();
		}

		if (isDesktopViewport) {
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).not.toHaveClass(/topbar-nav-open/);
		}

		for (const navLinkOrBtn of await page
			.locator("#demo-topbar")
			.getByRole("navigation")
			.locator(".topbar-link-container")
			.locator(".pinned")
			.all()) {
			if (isDesktopViewport) {
				expect(navLinkOrBtn).toBeVisible();
			} else {
				expect(navLinkOrBtn).not.toBeVisible();
			}
		}

		for (const navLinkOrBtn of await page
			.locator("#demo-topbar")
			.getByRole("navigation")
			.locator(".topbar-link-container")
			.locator(":is(a, btn):not(.pinned)")
			.all()) {
			expect(navLinkOrBtn).not.toBeVisible();
		}

		let modalBox = isDesktopViewport
			? await page.locator("#demo-topbar").getByRole("navigation").boundingBox()
			: null;

		if (isDesktopViewport) {
			await expect(modalBox.width).not.toBe(page.viewportSize().width);
			await expect(modalBox.height).not.toBe(page.viewportSize().height);
		}

		await page.locator("#demo-topbar").getByLabel("Open menu").click();
		await expect(
			page.locator("#demo-topbar").getByRole("navigation"),
		).toBeVisible();
		await expect(
			page.locator("#demo-topbar").getByRole("navigation"),
		).toHaveClass(/topbar-nav-open/);

		for (const navLinkOrBtn of await page
			.locator("#demo-topbar")
			.getByRole("navigation")
			.locator(".topbar-link-container")
			.locator("a, button")
			.all()) {
			expect(navLinkOrBtn).toBeVisible();
		}

		modalBox = await page
			.locator("#demo-topbar")
			.getByRole("navigation")
			.boundingBox();

		await expect(modalBox.width).toBe(page.viewportSize().width);
		await expect(modalBox.height).toBe(page.viewportSize().height);
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
	];

	closeModalActions.map((closingAction) => {
		test(`topbar closes on ${closingAction.actionType}`, async ({ page }) => {
			await page.goto("http://localhost:3000/components/topbar");
			await page.getByRole("link", { name: "Desktop", exact: true }).click();

			const isDesktopViewport = (await page.viewportSize().width) > 1200;

			// opens the modal
			await page.locator("#demo-topbar").getByLabel("Open menu").click();
			await expect(
				page.locator("#demo-topbar").getByRole("navigation"),
			).toHaveClass(/topbar-nav-open/);

			let modalBox = await page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.boundingBox();

			await expect(modalBox.width).toBe(page.viewportSize().width);
			await expect(modalBox.height).toBe(page.viewportSize().height);

			// closes the modal
			if (closingAction.actionType === "keyboardPress") {
				await page.keyboard.press(closingAction.key);
			} else if (closingAction.actionType === "click") {
				await page
					.locator(closingAction.locator)
					.click({ position: { x: 0, y: 0 } });
			}

			if (isDesktopViewport) {
				await expect(
					page.locator("#demo-topbar").getByRole("navigation"),
				).toBeVisible();
			} else {
				await expect(
					page.locator("#demo-topbar").getByRole("navigation"),
				).not.toBeVisible();
			}

			if (isDesktopViewport) {
				await expect(
					page.locator("#demo-topbar").getByRole("navigation"),
				).not.toHaveClass(/topbar-nav-open/);
			}

			for (const navLinkOrBtn of await page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.locator(".topbar-link-container")
				.locator(".pinned")
				.all()) {
				if (isDesktopViewport) {
					expect(navLinkOrBtn).toBeVisible();
				} else {
					expect(navLinkOrBtn).not.toBeVisible();
				}
			}

			for (const navLinkOrBtn of await page
				.locator("#demo-topbar")
				.getByRole("navigation")
				.locator(".topbar-link-container")
				.locator(":is(a, btn):not(.pinned)")
				.all()) {
				expect(navLinkOrBtn).not.toBeVisible();
			}

			modalBox = await page.locator("#demo-topbar nav").boundingBox();

			if (modalBox) {
				await expect(modalBox.width).not.toBe(page.viewportSize().width);
				await expect(modalBox.height).not.toBe(page.viewportSize().height);
			}
		});
	});

	// TODO: focus moves correctly on open and on close
	// TODO: closes on mouse click close button once close button implemented
});

// TODO: do
test.describe(`legacy-topbar script behave correctly`, () => {});
