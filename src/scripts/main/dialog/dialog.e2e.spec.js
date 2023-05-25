// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
	await page.goto("http://localhost:3000/components/dialog");
});

test("dialog displays & closes by mouse on close (cross) button ", async ({
	page,
}) => {
	const dialogOpenButton = page.getByRole("button", { name: "Open dialog" });
	await dialogOpenButton.click();
	await expect(page.getByRole("dialog")).toBeVisible();
	await page
		.getByRole("dialog")
		.getByRole("button", { name: "Close dialog" })
		.click();
	await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("dialog closes by mouse on Cancel button ", async ({ page }) => {
	const dialogOpenButton = page.getByRole("button", { name: "Open dialog" });
	await dialogOpenButton.click();
	await expect(page.getByRole("dialog")).toBeVisible();
	await page
		.getByRole("dialog")
		.getByRole("button", { name: "Cancel" })
		.click();
	await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("dialog does NOT close when click outside the modal or on another buttons than the cancel OR close buttons ", async ({
	page,
}) => {
	const dialogOpenButton = page.getByRole("button", { name: "Open dialog" });
	await dialogOpenButton.click();
	await expect(page.getByRole("dialog")).toBeVisible();
	await page.getByRole("dialog").click();
	await expect(page.getByRole("dialog")).toBeVisible();
	await page.getByRole("button", { name: "Delete" }).click();
	await expect(page.getByRole("dialog")).toBeVisible();
});

test("dialog displays & closes by keyboard navigation", async ({ page }) => {
	const dialogOpenButton = page.getByRole("button", { name: "Open dialog" });
	await dialogOpenButton.press("Enter");
	await expect(page.getByRole("dialog")).toBeVisible();
	await page.getByRole("button", { name: "Delete" }).press("Enter");
	await expect(page.getByRole("dialog")).toBeVisible();
	await page
		.getByRole("dialog")
		.getByRole("button", { name: "Close dialog" })
		.press("Enter");
	await expect(page.getByRole("dialog")).not.toBeVisible();
	await dialogOpenButton.press("Enter");
	await page
		.getByRole("dialog")
		.getByRole("button", { name: "Cancel" })
		.press("Enter");
	await expect(page.getByRole("dialog")).not.toBeVisible();
});
