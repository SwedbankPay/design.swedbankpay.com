import RemoveVscroll from "./index";

describe("App utils: Remove Vertical scroll", () => {
	it("is defined", () => {
		expect(RemoveVscroll).toBeDefined();
	});

	it("adds class to body", () => {
		RemoveVscroll();
		expect(document.body.classList.contains("no-vscroll")).toBe(true);
	});
});
