import React from "react";
import { render } from "@testing-library/react";

import sheet from "./index";
import toast from "../toast/index";

describe("scripts: sheet", () => {
	jest.useFakeTimers();

	const Sheet = ({ id }) => (
		<>
			<div className="sheet" id={id}>
				<section>
					<a id="sheetClose" href="#"></a>
				</section>
			</div>
			<button
				className="btn btn-primary"
				type="button"
				data-sheet-open="demo-sheet"
			>
				Open sheet
			</button>
		</>
	);

	const OpenSheet = () => (
		<>
			<div className="sheet sheet-open" id="demo-sheet">
				<section>
					<a href="#" className="sheet-close" id="sheetClose">
						<i className="swepay-icon-close" aria-hidden="true"></i>
					</a>
				</section>
			</div>
			<button
				className="btn btn-primary"
				type="button"
				data-sheet-close="demo-sheet"
			>
				Close sheet
			</button>
		</>
	);

	beforeEach(() => {
		jest.runAllTimers();
		document.body.classList.remove("sheet-open");
	});

	it("is defined", () => {
		expect(sheet).toBeDefined();
	});

	describe("sheet.init", () => {
		it("has an init method", () => {
			expect(sheet.init).toBeDefined();
			expect(sheet.init).toBeInstanceOf(Function);
		});

		it("returns one object when an ID is passed", () => {
			render(<Sheet id="demo-sheet-1" />);

			const renderedSheet = document.querySelector(".sheet");

			expect(renderedSheet).toBeTruthy();

			const returnVal = sheet.init("demo-sheet-1");

			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("returns an array of objects when more than one sheet is initialized", () => {
			render(
				<>
					<Sheet />
					<Sheet />
				</>,
			);

			const renderedSheets = document.querySelectorAll(".sheet");

			expect(renderedSheets).toBeTruthy();
			expect(renderedSheets.length).toEqual(2);

			const returnVal = sheet.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
		});

		it("returns null if no sheet is found and prints a warning", () => {
			console.warn = jest.fn();

			expect(sheet.init()).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});

		it("returns null if the passed id is not found and prints a warning", () => {
			console.warn = jest.fn();

			expect(sheet.init("invalid-id")).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});
	});

	it("button with attribute 'data-sheet-open' pointing to the correct id opens corresponding sheet", () => {
		render(<Sheet id="demo-sheet" />);

		const renderedSheet = document.querySelector(".sheet");
		const openBtn = document.querySelector("[data-sheet-open]");

		sheet.init();
		expect(document.body.classList).not.toContain("sheet-open");

		openBtn.click();
		jest.runAllTimers();
		expect(document.body.classList).toContain("sheet-open");
		expect(renderedSheet.classList).toContain("sheet-open");
	});

	it("button with attribute 'data-sheet-close' pointing to the correct id closes corresponding sheet", () => {
		render(<OpenSheet />);

		const renderedSheet = document.querySelector(".sheet");
		const closeBtn = document.querySelector("[data-sheet-close]");

		expect(renderedSheet.classList).toContain("sheet-open");

		sheet.init();

		closeBtn.click();
		jest.runAllTimers();
		expect(renderedSheet.classList).not.toContain("sheet-open");
		expect(document.body.classList).not.toContain("sheet-open");
	});

	it("closes sheet when clicking the close icon", () => {
		render(<OpenSheet />);

		const renderedSheet = document.querySelector(".sheet");
		const closeIcon = renderedSheet.querySelector(".sheet-close");

		expect(renderedSheet.classList).toContain("sheet-open");

		sheet.init();

		closeIcon.click();
		jest.runAllTimers();
		expect(renderedSheet.classList).not.toContain("sheet-open");
	});

	it("closes sheet when clicking outside the sheet section", () => {
		render(<OpenSheet />);

		const renderedSheet = document.querySelector(".sheet");

		expect(renderedSheet.classList).toContain("sheet-open");

		sheet.init();

		renderedSheet.click();
		jest.runAllTimers();
		expect(renderedSheet.classList).not.toContain("sheet-open");
	});

	it("does not close sheet when pressing keys other than esc", () => {
		render(<OpenSheet />);

		const renderedSheet = document.querySelector(".sheet");

		expect(renderedSheet.classList).toContain("sheet-open");

		sheet.init();

		// Simulate keypress
		const e = new Event("keydown");

		e.keyCode = 13; // Enter
		document.dispatchEvent(e);

		jest.runAllTimers();
		expect(renderedSheet.classList).toContain("sheet-open");
	});

	it("closes sheet when pressing esc", () => {
		render(<OpenSheet />);

		const renderedSheet = document.querySelector(".sheet");

		expect(renderedSheet.classList).toContain("sheet-open");

		sheet.init();

		// Simulate keypress
		const e = new Event("keydown");

		e.keyCode = 27; // Esc
		document.dispatchEvent(e);

		jest.runAllTimers();
		expect(document.body.classList).not.toContain("sheet-open");
	});

	describe("sheet.open", () => {
		it("opens sheet when calling sheet.open", () => {
			render(<Sheet id="demo-sheet" />);

			const renderedSheet = document.querySelector(".sheet");

			expect(renderedSheet.classList).not.toContain("sheet-open");
			expect(document.body.classList).not.toContain("sheet-open");

			sheet.init();
			expect(document.body.classList).not.toContain("sheet-open");

			sheet.open("demo-sheet");
			jest.runAllTimers();

			expect(renderedSheet.classList).toContain("sheet-open");
			expect(document.body.classList).toContain("sheet-open");
		});

		it("does not open sheet when calling sheet.open with wrong id and prints warn to console", () => {
			console.warn = jest.fn();
			render(<Sheet id="demo-sheet" />);

			const renderedSheet = document.querySelector(".sheet");

			expect(renderedSheet.classList).not.toContain("sheet-open");
			expect(document.body.classList).not.toContain("sheet-open");

			sheet.init();
			expect(renderedSheet.classList).not.toContain("sheet-open");
			expect(document.body.classList).not.toContain("sheet-open");

			sheet.open("qwerty");

			expect(renderedSheet.classList).not.toContain("sheet-open");
			expect(document.body.classList).not.toContain("sheet-open");
		});

		it("does not open sheet when the passed sheet is already open and prints a warning to the console", () => {
			console.warn = jest.fn();
			render(<OpenSheet id="demo-sheet" />);

			const renderedSheet = document.querySelector(".sheet");

			sheet.init();
			expect(renderedSheet.classList).toContain("sheet-open");

			sheet.open("demo-sheet");

			expect(renderedSheet.classList).toContain("sheet-open");
		});
	});

	describe("sheet.close", () => {
		it("closes sheet when calling sheet.close", () => {
			render(<OpenSheet />);

			expect(document.body.classList).not.toContain("sheet-open");

			sheet.init();

			sheet.close("demo-sheet");
			jest.runAllTimers();

			expect(document.body.classList).not.toContain("sheet-open");
		});

		it("does not close sheet when calling sheet.close with wrong id and prints warn to console", () => {
			console.warn = jest.fn();
			render(<OpenSheet />);

			const renderedSheet = document.querySelector(".sheet");

			expect(document.body.classList).not.toContain("sheet-open");

			sheet.init();

			sheet.close("qwerty");
			jest.runAllTimers();

			expect(renderedSheet.classList).toContain("sheet-open");
		});

		it("does not close sheet when the passed sheet is close and prints a warning to the console", () => {
			console.warn = jest.fn();
			render(<Sheet id="demo-sheet" />);

			const renderedSheet = document.querySelector(".sheet");

			sheet.init();
			expect(renderedSheet.classList).not.toContain("sheet-open");
			expect(document.body.classList).not.toContain("sheet-open");

			sheet.close("demo-sheet");

			expect(renderedSheet.classList).not.toContain("sheet-open");
			expect(document.body.classList).not.toContain("sheet-open");
		});
	});
});
