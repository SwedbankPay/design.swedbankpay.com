// @ts-check
const { test, expect } = require("@playwright/test");

test("Color page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Identity Learn about our fundamental principles",
		})
		.click();

	if (page.viewportSize().width > 991) {
		await expect(
			page.getByRole("link", {
				name: "Color",
			})
		).toHaveCount(1);
		await page.getByRole("link", { name: "Color" }).click();
	} else {
		await expect(
			page.getByRole("link", {
				name: "Color",
			})
		).toHaveCount(0);
		await page.getByLabel("Open menu").click();
		await page.getByRole("button", { name: "Identity" }).click();

		await expect(
			page.getByRole("link", {
				name: "Color",
			})
		).toHaveCount(1);
		await page.getByRole("link", { name: "Color" }).click();
	}
});

const getAllColorGroupsSections = async (page) =>
	await page.locator("section", { has: page.locator(".color-group") }).all();

const hexToRgb = (hex) => {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

	hex = hex.replace(shorthandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b;
	});

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
};

// TODO: remove topbar before screenshots (probably need to use vanilla JS, no Playwright methods seem to be existing in order to achieve thiat)
// TODO: once done. make this a function, and make it a utility function that can be used in other E2E tests

test(`visual regresion Color Identity page`, async ({ page }) => {
	await page.goto("http://localhost:3000/identity/color");

	// force to wait for page to be actually rendered. Else locators will return empty array since locator() methods does not auto-wait
	await expect(
		page.getByRole("heading", { level: 2, name: "Primary colors" })
	).toBeVisible();

	const colorGroupsSections = await getAllColorGroupsSections(page);

	const brand = (await page.title()).includes("Swedbank")
		? "SwedbankPay"
		: "PayEx";

	await expect(await colorGroupsSections).toHaveLength(6);

	for (const colorGroupSection of await colorGroupsSections) {
		const sectionName = await colorGroupSection
			.getByRole("heading", { level: 2 })
			.textContent();

		if ((await colorGroupSection.locator(".color-group").all().length) > 1) {
			const colorGroupSubSections = await colorGroupSection
				.locator(".row", { has: page.locator(".color-group") })
				.all();

			for (const colorGroupSubSection of await colorGroupSubSections) {
				const subSectionName = await colorGroupSubSection
					.getByRole("heading", {
						level: 3,
					})
					.textContent();

				await expect(colorGroupSubSection).toHaveScreenshot(
					`${brand}-color-${sectionName}-${subSectionName}.png`,
					{ mask: [await page.locator("#dg-topbar")] }
				);
			}
		} else {
			await expect(
				colorGroupSection.locator(".color-group").first()
			).toHaveScreenshot(`${brand}-color-${sectionName}.png`, {
				mask: [await page.locator("#dg-topbar")],
			});
		}
	}
});

test(`Compare Color CSS computed values Desktop to their spec written in their swatch (computed value VS hex specified AND of the CSS custom-property (CSS variable) exists - `, async ({
	page,
}) => {
	await page.goto("http://localhost:3000/identity/color");

	// force to wait for page to be actually rendered. Else locators will return empty array since locator() methods does not auto-wait
	await expect(
		page.getByRole("heading", { level: 2, name: "Primary colors" })
	).toBeVisible();

	// iterate over each colorGroup

	// TODO: fix it also for the SVG ones, not only for the divs (color-box VS color-swatch)
	// in each color-group, iterate over each color watch to check 2 things. 1st if its computed color corresponds to the hex value set as subTitle. 2nd to check if the color computed comes from the css custom-property"

	await page
		.locator("li", { has: page.locator("small", { hasText: "#" }) })
		.all()
		.then(async (colorSwatchContainers) => {
			for (const colorSwatchContainer of await colorSwatchContainers) {
				const expectedColorHexValue = await colorSwatchContainer
					.locator("small")
					.filter({ hasText: "#" })
					.first()
					.textContent();

				const expectedColorRGBValue = await `rgb(${
					hexToRgb(expectedColorHexValue)?.r
				}, ${hexToRgb(expectedColorHexValue)?.g}, ${
					hexToRgb(expectedColorHexValue)?.b
				})`;

				const colorSwatch = await colorSwatchContainer
					.locator(".color-swatch")
					.first();

				// compare HEX value to CSS computed value

				await expect(colorSwatch).toHaveCSS(
					"background-color",
					expectedColorRGBValue
				);

				// TODO: check each color gets its value from the CSS custom-property (CSS variable) and they match the computed CSS value
				console.log(
					"🤓checking custom properties presence, that they're valid (defined), that they have the name of the subtitle, and that they correspond to the expected HEX value"
				);
				// TODO: check on the color-swatch the presence of custom properties presence

				// TODO: check that they're valid (defined)
				// TODO: check that they have the name of the subtitle
				// TODO: and check that they correspond to the expected HEX value
			}
		});
});
