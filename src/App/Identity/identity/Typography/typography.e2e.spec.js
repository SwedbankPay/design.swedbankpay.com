// @ts-check
const { test, expect } = require("@playwright/test");

test("Typography page exist", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page
		.getByRole("link", {
			name: "Identity Learn about our fundamental principles",
		})
		.click();

	if (page.viewportSize().width > 991) {
		await expect(
			page.getByRole("link", {
				name: "Typography",
			})
		).toHaveCount(1);
		await page.getByRole("link", { name: "Typography" }).click();
	} else {
		await expect(
			page.getByRole("link", {
				name: "Typography",
			})
		).toHaveCount(0);
		await page.getByLabel("Open menu").click();
		await page.getByRole("button", { name: "Identity" }).click();

		await expect(
			page.getByRole("link", {
				name: "Typography",
			})
		).toHaveCount(1);
		await page.getByRole("link", { name: "Typography" }).click();
	}
});

const viewportsVariants = [
	{
		viewport: "Mobile",
		width: 500,
	},
	{
		viewport: "Desktop",
		width: 1600,
	},
];

viewportsVariants.forEach((viewportVariant) => {
	test.describe
		.parallel(`Visual Regression - Typography - ${viewportVariant.viewport} viewport`, () => {
		test.beforeEach(async ({ page }) => {
			await page.goto("http://localhost:3000/identity/typography");

			if ((await page.title()).includes("PayEx")) {
				test.skip();
			}
		});
		test.use({ viewport: { width: viewportVariant.width, height: 1200 } });
		test(`visual regresion Typography ${viewportVariant.viewport}`, async ({
			page,
		}) => {
			await page.goto("http://localhost:3000/identity/typography");

			const brand = (await page.title()).includes("Swedbank")
				? "SwedbankPay"
				: "PayEx";

			await expect(
				page.getByRole("table").filter({
					hasText: `${viewportVariant.viewport} text preview`,
				})
			).toHaveScreenshot(
				`${brand}-typography-${viewportVariant.viewport}-headers.png`
			);
		});

		// TODO: add test in for loop for typography checking font-family
		test(`Compare Typography CSS computed values Desktop to their spec written in their table row - ${viewportVariant.viewport}`, async ({
			page,
			browserName,
		}) => {
			const typographyTable = page.getByRole("table").filter({
				hasText: `${viewportVariant.viewport} text preview`,
			});

			await page.goto("http://localhost:3000/identity/typography");
			// iterate over each row of the table
			// in each row, use the text value of the 3rd column to assert font-size of the first
			// in each row, use the text value of the 4th column to assert line-height of the first
			await expect(typographyTable.getByRole("row")).toHaveCount(11);

			const typographyTableRows = await typographyTable
				.getByRole("row")
				.filter({ hasNotText: "text preview" })
				.all();

			for (const row of typographyTableRows) {
				await expect(row.getByRole("cell")).toHaveCount(4);

				const cells = await row.getByRole("cell").all();
				const fontSize = (await cells[2].textContent()).replace(/\s/g, "");

				await expect(cells[0].locator("> *")).toHaveCSS("font-size", fontSize);

				const lineHeight = (await cells[3].textContent()).replace(/\s/g, "");

				if (!lineHeight.includes(".") || browserName !== "webkit") {
					await expect(cells[0].locator("> *")).toHaveCSS(
						"line-height",
						lineHeight
					);
				}
			}
		});
	});
});
