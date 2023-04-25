import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import expandable from "./index";

jest.useFakeTimers();

describe("scripts: expandable", () => {
	const ExpGrpComponent = ({ id, open, expId }) => (
		<div className="expandable-group" id={id}>
			<ExpandableComponent id={expId} />
			<ExpandableComponent open={open} />
		</div>
	);

	const ExpandableComponent = ({ id, open }) => (
		<div className={`expandable${open ? " show expandable-open" : ""}`} id={id}>
			<div className="expandable-header">
				<h5>Foo</h5>
			</div>
			<div className="expandable-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</div>
	);

	it("is defined", () => {
		expect(expandable).toBeDefined();
	});

	describe("init()", () => {
		it("is defined", () => {
			expect(expandable.init).toBeDefined();
		});

		it("returns a single object when an expandable ID is passed", () => {
			render(<ExpandableComponent id="expandable-test" />);

			const returnVal = expandable.init("expandable-test");

			expect(returnVal).not.toBeNull();
			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("returns a single object when a expandable-group ID is passed", () => {
			render(<ExpGrpComponent id="expandable-group-test" />);

			const returnVal = expandable.init("expandable-group-test");

			expect(returnVal).not.toBeNull();
			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("returns an array of expandable objects when more than one expandable is initialized", () => {
			render(
				<>
					<ExpandableComponent />
					<ExpandableComponent />
				</>
			);

			const returnVal = expandable.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
			expect(
				returnVal.every((instance) =>
					instance.elem.classList.contains("expandable")
				)
			).toBeTruthy();
		});

		it("returns an array of expandable-group objects when more than one expandable-group is initialized", () => {
			render(
				<>
					<ExpGrpComponent />
					<ExpGrpComponent />
				</>
			);

			const returnVal = expandable.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
			expect(
				returnVal.every((instance) =>
					instance.elem.classList.contains("expandable-group")
				)
			).toBeTruthy();
		});

		it("returns an array of both expandable-group objects and expandable objects when more than one element is initialized", () => {
			render(
				<>
					<ExpGrpComponent />
					<ExpandableComponent />
				</>
			);

			const returnVal = expandable.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
			expect(returnVal[0].elem).toHaveClass("expandable-group");
			expect(returnVal[1].elem).toHaveClass("expandable");
		});

		describe("warning messages", () => {
			beforeEach(() => (console.warn = jest.fn()));

			it("prints a warning message if no expandable-group or expandable exist", () => {
				console.warn = jest.fn();

				expandable.init();

				expect(console.warn).toHaveBeenCalled();
			});

			it("prints a warning message if no  matching the passed ID exist", () => {
				console.warn = jest.fn();

				expandable.init("invalid-id");

				expect(console.warn).toHaveBeenCalled();
			});

			it("prints a warning if an expandable-group without expandables is initialized", () => {
				console.warn = jest.fn();
				render(
					<div id="empty-expandable-group" className="expandable-group" />
				);

				expandable.init("empty-expandable-group");

				expect(console.warn).toHaveBeenCalledWith(
					"expandable-group: No expandable children found"
				);
			});

			it("prints a warning when an expandable without .expandable-header is initialized", () => {
				console.warn = jest.fn();
				render(<div id="exp-no-header" className="expandable" />);

				expandable.init("exp-no-header");

				expect(console.warn).toHaveBeenCalledWith(
					"expandable: No .expandable-header found"
				);
			});

			it("prints a warning if an expandable-group contains expandables without expandable-header", () => {
				render(
					<div id="expGrpNoHead" className="expandable-group">
						<div className="expandable" />
					</div>
				);

				expandable.init("expGrpNoHead");

				expect(console.warn).toHaveBeenCalledWith(
					"expandable-group: An expandable is missing a header"
				);
			});
		});
	});

	describe("class Expandable", () => {
		it("click opens the expandable", () => {
			render(<ExpandableComponent />);

			const expElem = document.querySelector(".expandable");
			const expHeaderElem = expElem.querySelector(".expandable-header");

			expandable.init();

			expect(expElem).not.toHaveClass("expandable-open");

			expHeaderElem.dispatchEvent(new Event("click"));

			expect(expElem).toHaveClass("expandable-open");
		});

		it("click closes the expandable", () => {
			render(<ExpandableComponent open />);

			const expElem = document.querySelector(".expandable");
			const expHeaderElem = expElem.querySelector(".expandable-header");

			expandable.init();

			expect(expElem).toHaveClass("expandable-open");

			expHeaderElem.dispatchEvent(new Event("click"));

			jest.runAllTimers();

			expect(expElem).not.toHaveClass("expandable-open");
		});

		it("clicking in quick succession to open an expandable will print a warning", () => {
			console.warn = jest.fn();

			render(<ExpandableComponent />);

			const expObj = expandable.init()[0];

			expObj.header.dispatchEvent(new Event("click"));
			expObj.header.dispatchEvent(new Event("click"));

			expect(console.warn).toHaveBeenCalledWith(
				"expandable: The given expandable is expanding"
			);
		});

		it("clicking in quick succession to close an expandable will print a warning", () => {
			console.warn = jest.fn();

			render(<ExpandableComponent open />);

			const expObj = expandable.init()[0];

			expObj.header.dispatchEvent(new Event("click"));
			expObj.header.dispatchEvent(new Event("click"));

			expect(console.warn).toHaveBeenCalledWith(
				"expandable: The given expandable is collapsing"
			);
		});
	});

	describe("class Expandable-Group", () => {
		it("click opens an expandable", () => {
			render(<ExpGrpComponent />);

			const expGrpObj = expandable.init()[0];

			expect(expGrpObj.openExp).toBeFalsy();

			expGrpObj.expandables[0].header.dispatchEvent(new Event("click"));

			jest.runAllTimers();

			expect(expGrpObj.openExp).toBeTruthy();
		});

		it("clicking an open expandable closes it", () => {
			render(<ExpGrpComponent open />);

			const expGrpObj = expandable.init()[0];
			const openExp = expGrpObj.openExp;

			expect(openExp.elem).toHaveClass("expandable-open");

			openExp.header.dispatchEvent(new Event("click"));

			jest.runAllTimers();

			expect(openExp.elem).not.toHaveClass("expandable-open");
		});

		it("only one expandable can be open at the same time", () => {
			render(<ExpGrpComponent open />);

			const expGrpObj = expandable.init()[0];
			const openExp = expGrpObj.openExp.elem;
			const closedExp = document.querySelector(
				".expandable:not(.expandable-open)"
			);

			expect(openExp).toHaveClass("expandable-open");
			expect(closedExp).not.toHaveClass("expandable-open");

			closedExp
				.querySelector(".expandable-header")
				.dispatchEvent(new Event("click"));

			jest.runAllTimers();

			expect(openExp).not.toHaveClass("expandable-open");
			expect(closedExp).toHaveClass("expandable-open");
		});

		it("clicking in quick succession to open an expandable wrapped by expandable-group will print a warning", () => {
			console.warn = jest.fn();

			render(<ExpGrpComponent />);

			const expGrp = expandable.init()[0];

			expGrp.expandables[0].header.dispatchEvent(new Event("click"));
			expGrp.expandables[0].header.dispatchEvent(new Event("click"));

			expect(console.warn).toHaveBeenCalledWith(
				"expandable-group: The expandable-group contains an expanding element"
			);
		});
	});

	describe("open", () => {
		it("opens the expandable matching the passed ID and returns the expandable object", () => {
			render(<ExpandableComponent id="test-open" />);

			const expObj = expandable.init()[0];

			expect(expObj.elem.classList).not.toContain("expandable-open");

			const returnVal = expandable.open("test-open");

			expect(expObj.elem.classList).toContain("expandable-open");
			expect(returnVal).toEqual(expObj);
		});

		it("opens the expandable matching the given ID in a expandable-group", () => {
			render(<ExpGrpComponent expId="exp-test" />);

			const expGrpObj = expandable.init()[0];
			const exp = document.getElementById("exp-test");

			expect(expGrpObj.openExp).toBeFalsy();
			expect(exp.classList).not.toContain("expandable-open");

			const returnVal = expandable.open("exp-test");

			jest.runAllTimers();

			expect(expGrpObj.openExp).toBeTruthy();
			expect(exp.classList).toContain("expandable-open");
			expect(returnVal).toEqual(expGrpObj.openExp);
		});

		it("closes the open expandable in a expandable-group if open is called on another expandable", () => {
			render(<ExpGrpComponent open expId="exp-id" />);

			const expGrpObj = expandable.init()[0];
			const closedExp = document.getElementById("exp-id");

			expect(expGrpObj.openExp).toBeTruthy();

			expandable.open("exp-id");

			jest.runAllTimers();

			expect(expGrpObj.openExp.elem).toEqual(closedExp);
			expect(document.querySelectorAll(".expandable-open").length).toEqual(1);
		});

		describe("warning messages", () => {
			beforeEach(() => (console.warn = jest.fn()));

			it("returns false and prints a warning if no expandable matching the ID was found", () => {
				expandable.init();

				const returnVal = expandable.open("test");

				expect(console.warn).toHaveBeenCalledWith(
					"expandable.open: expandable with id test was not found"
				);
				expect(returnVal).toBeFalsy();
			});

			it("returns false and prints a warning if the expandable is open", () => {
				render(<ExpandableComponent open id="is-open" />);
				expandable.init();

				const returnVal = expandable.open("is-open");

				expect(console.warn).toHaveBeenCalledWith(
					"expandable.open: expandable with id is-open is open"
				);
				expect(returnVal).toBeFalsy();
			});
		});
	});

	describe("close", () => {
		it("closes the open expandable matching the passed ID and returns the expandable object", () => {
			render(<ExpandableComponent id="exp-close" open />);

			const expObj = expandable.init()[0];

			expect(expObj.isOpen).toBeTruthy();

			const returnVal = expandable.close("exp-close");

			expect(expObj.isOpen).toBeFalsy();
			expect(returnVal).toBeTruthy();
			expect(returnVal).toEqual(expObj);
		});

		it("closes the open expandable matching the passed ID in an expandable-group and returns the expandable object", () => {
			render(
				<div className="expandable-group">
					<ExpandableComponent id="test-close" open />
					<ExpandableComponent />
				</div>
			);

			const expGrpObj = expandable.init()[0];

			expect(expGrpObj.openExp).toBeTruthy();

			const returnVal = expandable.close("test-close");

			expect(expGrpObj.openExp).toBeFalsy();
			expect(returnVal.elem).toEqual(document.getElementById("test-close"));
		});

		describe("warninge messages", () => {
			beforeEach(() => (console.warn = jest.fn()));

			it("prints a warning message and returns false if the passed ID doesn't match an existing expandable", () => {
				const returnVal = expandable.close("testing");

				expect(console.warn).toHaveBeenCalledWith(
					"expandable.close: expandable with id testing was not found"
				);
				expect(returnVal).toBeFalsy();
			});

			it("prints a warning message and returns false if the expandable is closed", () => {
				render(<ExpGrpComponent expId="closed-exp" />);
				expandable.init();

				const returnVal = expandable.close("closed-exp");

				expect(console.warn).toHaveBeenCalledWith(
					"expandable.close: expandable with id closed-exp is closed"
				);
				expect(returnVal).toBeFalsy();
			});
		});
	});
});
