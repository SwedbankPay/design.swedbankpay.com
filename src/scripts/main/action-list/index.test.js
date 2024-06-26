import React from "react";
import { render } from "@testing-library/react";

import actionList from "./index";

describe("scripts: action-list", () => {
	const ActionList = ({ active, id, noToggle }) => (
		<div className={`action-list${active ? " active" : ""}`} id={id}>
			{noToggle ? null : (
				<button
					id="actionListToggle"
					aria-label="Action list button"
					type="button"
					class="action-toggle"
					aria-haspopup="true"
				>
					<i
						className="at-dots-vertical snall action-toggle"
						aria-hidden="true"
					></i>
				</button>
			)}
			<div className="action-menu" aria-labelledby="actionListToggle">
				<a href="#">
					<i className="at-bookmark-star small" aria-hidden="true"></i>
					Add bookmark
				</a>
				<a href="#">
					<i className="at-business-suitcase small" aria-hidden="true"></i>
					Add client
				</a>
			</div>
		</div>
	);

	it("is defined", () => {
		expect(actionList).toBeDefined();
	});

	describe("actionList.init", () => {
		it("has an init method", () => {
			expect(actionList.init).toBeDefined();
			expect(actionList.init).toBeInstanceOf(Function);
		});

		it("returns a single object when one element is initialized", () => {
			render(<ActionList id="demo-action" />);

			const renderedActionList = document.querySelector(".action-list");

			expect(renderedActionList).toBeTruthy();

			const returnVal = actionList.init("demo-action");

			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("returns an array of objects when more than one element is initialized", () => {
			render(
				<>
					<ActionList />
					<ActionList />
				</>,
			);

			const renderedActionLists = document.querySelectorAll(".action-list");

			expect(renderedActionLists).toBeTruthy();
			expect(renderedActionLists.length).toEqual(2);

			const returnVal = actionList.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
		});

		it("returns null if no action-list is found and prints a warning message", () => {
			console.warn = jest.fn();

			expect(actionList.init()).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});

		it("returns null if an invalid ID is passed and prints a warning message", () => {
			console.warn = jest.fn();

			expect(actionList.init("test")).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});
	});

	it("throws an error if no .toggle-btn is found", () => {
		console.warn = jest.fn();

		render(<ActionList noToggle />);

		actionList.init();

		expect(console.warn).toHaveBeenCalled();
		expect(console.warn).toHaveBeenCalledWith(
			"No toggle element exist, add an element with the class .action-toggle",
		);
	});

	it("opens when clicking the icon", () => {
		render(<ActionList />);

		const renderedActionList = document.querySelector(".action-list");
		const toggleBtn = renderedActionList.querySelector(
			"button#actionListToggle",
		);

		expect(renderedActionList).toBeDefined();
		expect(toggleBtn).toBeDefined();
		expect(renderedActionList.classList).not.toContain("active");

		actionList.init();
		toggleBtn.dispatchEvent(new Event("click"));

		expect(renderedActionList.classList).toContain("active");
	});

	it("closes when clicking on icon while open", () => {
		render(<ActionList active />);

		const renderedActionList = document.querySelector(".action-list");
		const toggleBtn = renderedActionList.querySelector(
			"button#actionListToggle",
		);

		expect(renderedActionList).toBeDefined();
		expect(toggleBtn).toBeDefined();
		expect(renderedActionList.classList).toContain("active");

		actionList.init();
		toggleBtn.dispatchEvent(new Event("click"));

		expect(renderedActionList.classList).not.toContain("active");
	});

	it("closes open action menu when clicking on a link", () => {
		render(<ActionList active />);

		const renderedActionList = document.querySelector(".action-list");

		expect(renderedActionList).toBeDefined();
		expect(renderedActionList.classList).toContain("active");

		actionList.init();
		renderedActionList.querySelector("a").click();

		expect(renderedActionList.classList).not.toContain("active");
	});

	it("closes when clicking outside menu while open", () => {
		render(<ActionList active />);

		const renderedActionList = document.querySelector(".action-list");

		expect(renderedActionList).toBeDefined();
		expect(renderedActionList.classList).toContain("active");

		actionList.init();
		document.querySelector("html").click(); // for clicking outside action list

		expect(renderedActionList.classList).not.toContain("active");
	});

	describe("actionList.open", () => {
		it("opens actionlist when calling actionList.open", () => {
			render(<ActionList id="demo-actionlist" />);

			const renderedActionList = document.querySelector(".action-list");

			expect(renderedActionList).toBeTruthy();

			actionList.init();
			expect(renderedActionList.classList).not.toContain("active");

			actionList.open("demo-actionlist");
			expect(renderedActionList.classList).toContain("active");
		});

		it("does not open actionlist when calling actionlist.open with wrong id and prints warn to console", () => {
			console.warn = jest.fn();

			render(<ActionList id="demo-actionlist" />);

			const renderedActionList = document.querySelector(".action-list");

			expect(renderedActionList).toBeTruthy();
			expect(renderedActionList.classList).not.toContain("active");

			actionList.open("invalid-id");

			expect(renderedActionList.classList).not.toContain("active");
			expect(console.warn).toHaveBeenCalled();
		});
	});

	describe("actionList.close", () => {
		it("closes an open actionlist when calling actionList.close", () => {
			render(<ActionList active id="demo-actionlist" />);

			const renderedActionList = document.querySelector(".action-list");

			expect(renderedActionList).toBeTruthy();
			expect(renderedActionList.classList).toContain("active");

			actionList.init();
			actionList.close("demo-actionlist");

			expect(renderedActionList.classList).not.toContain("active");
		});

		it("does not close actionlist when calling actionlist.close with wrong id and prints warn to console", () => {
			console.warn = jest.fn();

			render(<ActionList id="demo-actionlist" active />);

			const renderedActionList = document.querySelector(".action-list");

			expect(renderedActionList).toBeTruthy();
			expect(renderedActionList.classList).toContain("active");

			actionList.close("invalid-id");

			expect(renderedActionList.classList).toContain("active");
			expect(console.warn).toHaveBeenCalled();
		});
	});
});
