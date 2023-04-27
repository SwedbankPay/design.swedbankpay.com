import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import accordion from "./index";

jest.useFakeTimers();

describe("scripts: accordion", () => {
	const AccGrpComponent = ({ id, open, accId }) => (
		<div className="accordion-group" id={id}>
			<AccordionComponent id={accId} />
			<AccordionComponent open={open} />
		</div>
	);

	const AccordionComponent = ({ id, open }) => (
		<div className={`accordion${open ? " show accordion-open" : ""}`} id={id}>
			<div className="accordion-header">Foo</div>
			<div className="accordion-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</div>
	);

	it("is defined", () => {
		expect(accordion).toBeDefined();
	});

	describe("init()", () => {
		it("is defined", () => {
			expect(accordion.init).toBeDefined();
		});

		it("returns a single object when an accordion ID is passed", () => {
			render(<AccordionComponent id="accordion-test" />);

			const returnVal = accordion.init("accordion-test");

			expect(returnVal).not.toBeNull();
			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("returns a single object when a accordion-group ID is passed", () => {
			render(<AccGrpComponent id="accordion-group-test" />);

			const returnVal = accordion.init("accordion-group-test");

			expect(returnVal).not.toBeNull();
			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("returns an array of accordion objects when more than one accordion is initialized", () => {
			render(
				<>
					<AccordionComponent />
					<AccordionComponent />
				</>
			);

			const returnVal = accordion.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
			expect(
				returnVal.every((instance) =>
					instance.elem.classList.contains("accordion")
				)
			).toBeTruthy();
		});

		it("returns an array of accordion-group objects when more than one accordion-group is initialized", () => {
			render(
				<>
					<AccGrpComponent />
					<AccGrpComponent />
				</>
			);

			const returnVal = accordion.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
			expect(
				returnVal.every((instance) =>
					instance.elem.classList.contains("accordion-group")
				)
			).toBeTruthy();
		});

		it("returns an array of both accordion-group objects and accordion objects when more than one element is initialized", () => {
			render(
				<>
					<AccGrpComponent />
					<AccordionComponent />
				</>
			);

			const returnVal = accordion.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
			expect(returnVal[0].elem).toHaveClass("accordion-group");
			expect(returnVal[1].elem).toHaveClass("accordion");
		});

		describe("warning messages", () => {
			beforeEach(() => (console.warn = jest.fn()));

			it("prints a warning message if no accordion-group or accordion exist", () => {
				console.warn = jest.fn();

				accordion.init();

				expect(console.warn).toHaveBeenCalled();
			});

			it("prints a warning message if no  matching the passed ID exist", () => {
				console.warn = jest.fn();

				accordion.init("invalid-id");

				expect(console.warn).toHaveBeenCalled();
			});

			it("prints a warning if an accordion-group without accordions is initialized", () => {
				console.warn = jest.fn();

				render(<div id="empty-accordion-group" className="accordion-group" />);

				accordion.init("empty-accordion-group");

				expect(console.warn).toHaveBeenCalledWith(
					"accordion-group: No accordion children found"
				);
			});

			it("prints a warning when an accordion without .accordion-header is initialized", () => {
				console.warn = jest.fn();

				render(<div id="acc-no-header" className="accordion" />);

				accordion.init("acc-no-header");

				expect(console.warn).toHaveBeenCalledWith(
					"accordion: No .accordion-header found"
				);
			});

			it("prints a warning if an accordion-group contains accordions without accordion-header", () => {
				render(
					<div id="accGrpNoHead" className="accordion-group">
						<div className="accordion" />
					</div>
				);

				accordion.init("accGrpNoHead");

				expect(console.warn).toHaveBeenCalledWith(
					"accordion-group: An accordion is missing a header"
				);
			});
		});
	});

	describe("class Accordion", () => {
		it("click opens the accordion", () => {
			render(<AccordionComponent />);

			const accElem = document.querySelector(".accordion");
			const accHeaderElem = accElem.querySelector(".accordion-header");

			accordion.init();

			expect(accElem).not.toHaveClass("accordion-open");

			accHeaderElem.dispatchEvent(new Event("click"));

			expect(accElem).toHaveClass("accordion-open");
		});

		it("click closes the accordion", () => {
			render(<AccordionComponent open />);

			const accElem = document.querySelector(".accordion");
			const accHeaderElem = accElem.querySelector(".accordion-header");

			accordion.init();

			expect(accElem).toHaveClass("accordion-open");

			accHeaderElem.dispatchEvent(new Event("click"));

			jest.runAllTimers();

			expect(accElem).not.toHaveClass("accordion-open");
		});

		it("clicking in quick succession to open an accordion will print a warning", () => {
			console.warn = jest.fn();

			render(<AccordionComponent />);

			const accObj = accordion.init()[0];

			accObj.header.dispatchEvent(new Event("click"));
			accObj.header.dispatchEvent(new Event("click"));

			expect(console.warn).toHaveBeenCalledWith(
				"accordion: The given accordion is expanding"
			);
		});

		it("clicking in quick succession to close an accordion will print a warning", () => {
			console.warn = jest.fn();

			render(<AccordionComponent open />);

			const accObj = accordion.init()[0];

			accObj.header.dispatchEvent(new Event("click"));
			accObj.header.dispatchEvent(new Event("click"));

			expect(console.warn).toHaveBeenCalledWith(
				"accordion: The given accordion is collapsing"
			);
		});
	});

	describe("class Accordion-Group", () => {
		it("click opens an accordion", () => {
			render(<AccGrpComponent />);

			const accGrpObj = accordion.init()[0];

			expect(accGrpObj.openAcc).toBeFalsy();

			accGrpObj.accordions[0].header.dispatchEvent(new Event("click"));

			jest.runAllTimers();

			expect(accGrpObj.openAcc).toBeTruthy();
		});

		it("clicking an open accordion closes it", () => {
			render(<AccGrpComponent open />);

			const accGrpObj = accordion.init()[0];
			const openAcc = accGrpObj.openAcc;

			expect(openAcc.elem).toHaveClass("accordion-open");

			openAcc.header.dispatchEvent(new Event("click"));

			jest.runAllTimers();

			expect(openAcc.elem).not.toHaveClass("accordion-open");
		});

		it("only one accordion can be open at the same time", () => {
			render(<AccGrpComponent open />);

			const accGrpObj = accordion.init()[0];
			const openAcc = accGrpObj.openAcc.elem;
			const closedAcc = document.querySelector(
				".accordion:not(.accordion-open)"
			);

			expect(openAcc).toHaveClass("accordion-open");
			expect(closedAcc).not.toHaveClass("accordion-open");

			closedAcc
				.querySelector(".accordion-header")
				.dispatchEvent(new Event("click"));

			jest.runAllTimers();

			expect(openAcc).not.toHaveClass("accordion-open");
			expect(closedAcc).toHaveClass("accordion-open");
		});

		it("clicking in quick succession to open an accordion wrapped by accordion-group will print a warning", () => {
			console.warn = jest.fn();

			render(<AccGrpComponent />);

			const accGrp = accordion.init()[0];

			accGrp.accordions[0].header.dispatchEvent(new Event("click"));
			accGrp.accordions[0].header.dispatchEvent(new Event("click"));

			expect(console.warn).toHaveBeenCalledWith(
				"accordion-group: The accordion-group contains an expanding element"
			);
		});
	});

	describe("open", () => {
		it("opens the accordion matching the passed ID and returns the accordion object", () => {
			render(<AccordionComponent id="test-open" />);

			const accObj = accordion.init()[0];

			expect(accObj.elem.classList).not.toContain("accordion-open");

			const returnVal = accordion.open("test-open");

			expect(accObj.elem.classList).toContain("accordion-open");
			expect(returnVal).toEqual(accObj);
		});

		it("opens the accordion matching the given ID in a accordion-group", () => {
			render(<AccGrpComponent accId="acc-test" />);

			const accGrpObj = accordion.init()[0];
			const acc = document.getElementById("acc-test");

			expect(accGrpObj.openAcc).toBeFalsy();
			expect(acc.classList).not.toContain("accordion-open");

			const returnVal = accordion.open("acc-test");

			jest.runAllTimers();

			expect(accGrpObj.openAcc).toBeTruthy();
			expect(acc.classList).toContain("accordion-open");
			expect(returnVal).toEqual(accGrpObj.openAcc);
		});

		it("closes the open accordion in a accordion-group if open is called on another accordion", () => {
			render(<AccGrpComponent open accId="acc-id" />);

			const accGrpObj = accordion.init()[0];
			const closedAcc = document.getElementById("acc-id");

			expect(accGrpObj.openAcc).toBeTruthy();

			accordion.open("acc-id");

			jest.runAllTimers();

			expect(accGrpObj.openAcc.elem).toEqual(closedAcc);
			expect(document.querySelectorAll(".accordion-open").length).toEqual(1);
		});

		describe("warning messages", () => {
			beforeEach(() => (console.warn = jest.fn()));

			it("returns false and prints a warning if no accordion matching the ID was found", () => {
				accordion.init();

				const returnVal = accordion.open("test");

				expect(console.warn).toHaveBeenCalledWith(
					"accordion.open: accordion with id test was not found"
				);
				expect(returnVal).toBeFalsy();
			});

			it("returns false and prints a warning if the accordion is open", () => {
				render(<AccordionComponent open id="is-open" />);
				accordion.init();

				const returnVal = accordion.open("is-open");

				expect(console.warn).toHaveBeenCalledWith(
					"accordion.open: accordion with id is-open is open"
				);
				expect(returnVal).toBeFalsy();
			});
		});
	});

	describe("close", () => {
		it("closes the open accordion matching the passed ID and returns the accordion object", () => {
			render(<AccordionComponent id="acc-close" open />);

			const accObj = accordion.init()[0];

			expect(accObj.isOpen).toBeTruthy();

			const returnVal = accordion.close("acc-close");

			expect(accObj.isOpen).toBeFalsy();
			expect(returnVal).toBeTruthy();
			expect(returnVal).toEqual(accObj);
		});

		it("closes the open accordion matching the passed ID in an accordion-group and returns the accordion object", () => {
			render(
				<div className="accordion-group">
					<AccordionComponent id="test-close" open />
					<AccordionComponent />
				</div>
			);

			const accGrpObj = accordion.init()[0];

			expect(accGrpObj.openAcc).toBeTruthy();

			const returnVal = accordion.close("test-close");

			expect(accGrpObj.openAcc).toBeFalsy();
			expect(returnVal.elem).toEqual(document.getElementById("test-close"));
		});

		describe("warninge messages", () => {
			beforeEach(() => (console.warn = jest.fn()));

			it("prints a warning message and returns false if the passed ID doesn't match an existing accordion", () => {
				const returnVal = accordion.close("testing");

				expect(console.warn).toHaveBeenCalledWith(
					"accordion.close: accordion with id testing was not found"
				);
				expect(returnVal).toBeFalsy();
			});

			it("prints a warning message and returns false if the accordion is closed", () => {
				render(<AccGrpComponent accId="closed-acc" />);
				accordion.init();

				const returnVal = accordion.close("closed-acc");

				expect(console.warn).toHaveBeenCalledWith(
					"accordion.close: accordion with id closed-acc is closed"
				);
				expect(returnVal).toBeFalsy();
			});
		});
	});
});
