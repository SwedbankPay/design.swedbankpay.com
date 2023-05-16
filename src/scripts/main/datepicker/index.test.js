import React from "react";
import { render } from "@testing-library/react";

import datepicker from "./index";
import Datepicker from "@components/FormComponents/Datepicker";
import formats from "./formats";

/*
    NB: datepicker.init() resets the _datepickers array and destroys flatpickr instances only when at least one valid datepicker is found [AW]
*/

describe("scripts: datepicker", () => {
	it("is defined", () => {
		expect(datepicker).toBeDefined();
	});

	describe("datepicker.init", () => {
		it("has an init method", () => {
			expect(datepicker.init).toBeDefined();
			expect(datepicker.init).toBeInstanceOf(Function);
		});

		it("does not init if no datepickers exist", () => {
			render(<p>No datepickers here!</p>);

			const datePickerSpy = jest.spyOn(datepicker, "init");

			expect(datePickerSpy).not.toHaveBeenCalled();
		});

		it("inits the datepicker matching the passed ID", () => {
			render(<Datepicker id="foo" />);

			const returnVal = datepicker.init("foo");

			expect(returnVal.input.id).toEqual("foo");
		});

		it("returns an array of objects if more than one datepicker is initialized", () => {
			render(
				<>
					<Datepicker />
					<Datepicker />
				</>
			);

			expect(datepicker.init().length).toEqual(2);
		});

		it("returns null if no datepickers exist and prints a warning message", () => {
			console.warn = jest.fn();

			expect(datepicker.init()).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});

		it("returns null if an invalid ID is passed and prints a warning message", () => {
			console.warn = jest.fn();

			expect(datepicker.init("test")).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});

		it("destroys existing flatpickr instances on init()", () => {
			render(<Datepicker />);

			datepicker.init();

			expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(
				1
			);

			datepicker.init();

			expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(
				1
			);
		});

		it("destroys existing flatpickr instances on init(ID) if the given ID is already initialized", () => {
			render(
				<>
					<Datepicker id="foo" />
					<Datepicker id="bar" />
				</>
			);

			datepicker.init();

			expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(
				2
			);

			datepicker.init("bar");

			expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(
				2
			);
		});

		it("doesn't destroy existing flatpickr instances on init(ID) if the given ID is invalid", () => {
			render(<Datepicker id="test-1" />);

			datepicker.init();

			expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(
				1
			);

			datepicker.init("invalid-id");

			expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(
				1
			);
		});
	});

	it("warns about non-existing formats", () => {
		console.error = jest.fn(); // To prevent error message from using non-enum for format
		console.warn = jest.fn();

		render(<Datepicker format="test" />);

		datepicker.init();
		expect(console.warn).toHaveBeenCalled();
	});

	it("defaults to iso8601 when no format is specified", () => {
		console.error = jest.fn(); // To prevent error message from using non-enum for format

		render(<Datepicker id="test-datepicker" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.dateFormat).toEqual(formats.iso8601.dateFormat);
	});

	it("sets an alternate format if datepicker-fulldate is true", () => {
		console.error = jest.fn(); // To prevent error message from using non-enum for format

		render(<Datepicker id="test-datepicker" fulldate="true" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.locale.fulldate).toEqual(formats.iso8601.fulldate);
	});

	it("includes time when specified", () => {
		console.error = jest.fn(); // To prevent error message from using non-enum for format

		render(<Datepicker id="test-datepicker" time />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.enableTime).toBeTruthy();
	});

	it("sends flatpickr correct options for dateformat when specified as nb", () => {
		render(<Datepicker id="test-datepicker" format="nb" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.locale.dateFormat).toEqual(formats.nb.dateFormat);
	});

	it("sends flatpickr correct options for dateformat when specified as sv", () => {
		render(<Datepicker id="test-datepicker" format="sv" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.locale.dateFormat).toEqual(formats.sv.dateFormat);
	});

	it("sends flatpickr correct options for dateformat when specified as da", () => {
		render(<Datepicker id="test-datepicker" format="da" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.locale.dateFormat).toEqual(formats.da.dateFormat);
	});

	it("sends flatpickr correct options for dateformat when specified as fi", () => {
		render(<Datepicker id="test-datepicker" format="fi" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.locale.dateFormat).toEqual(formats.fi.dateFormat);
	});

	it("sends flatpickr correct options for dateformat when specified as en", () => {
		render(<Datepicker id="test-datepicker" format="en" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.locale.dateFormat).toEqual(formats.en.dateFormat);
	});

	it("sends flatpickr correct options for dateformat when specified as iso8601", () => {
		render(<Datepicker id="test-datepicker" format="iso8601" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.locale.dateFormat).toEqual(
			formats.iso8601.dateFormat
		);
	});

	it("sends flatpickr correct options for dateformat when specified as nb with attribute min", () => {
		render(<Datepicker id="test-datepicker" format="nb" min="test" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.datepickerMin).toEqual("test");
	});

	it("sends flatpickr correct options for dateformat when specified as nb with attribute max", () => {
		render(<Datepicker id="test-datepicker" format="nb" max="test" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.datepickerMax).toEqual("test");
	});

	it("sends flatpickr correct options for dateformat when specified as nb with attribute datepicker-value", () => {
		render(<Datepicker id="test-datepicker" format="nb" value="test" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.datepickerValue).toEqual("test");
	});

	it("sends flatpickr correct options for dateformat when specified as nb with attribute months", () => {
		render(<Datepicker id="test-datepicker" format="nb" months="3" />);

		const returnVal = datepicker.init("test-datepicker");

		expect(returnVal.config.datepickerMonths).toEqual("3");
	});

	describe("datepicker.open", () => {
		it("prints an error message if a datepicker with the given ID is not found", () => {
			console.error = jest.fn();

			datepicker.open("invalid-id");

			expect(console.error).toHaveBeenCalled();
		});

		it("opens the datepicker matching the passed ID", () => {
			render(<Datepicker id="demo-datepicker" />);
			datepicker.init();

			const renderedDatepicker = document.querySelector(".flatpickr-input");

			expect(renderedDatepicker).toBeTruthy();
			expect(renderedDatepicker.classList).not.toContain("active");

			datepicker.open("demo-datepicker");

			expect(renderedDatepicker.classList).toContain("active");
		});
	});

	describe("datepicker.close", () => {
		it("prints an error message if a datepicker with the given ID is not found", () => {
			console.error = jest.fn();

			datepicker.close("invalid-id");

			expect(console.error).toHaveBeenCalled();
		});

		it("closes the datepicker matching the passed ID", () => {
			render(<Datepicker id="demo-datepicker" />);
			datepicker.init();

			const renderedDatepicker = document.querySelector(".flatpickr-input");

			expect(renderedDatepicker).toBeTruthy();
			datepicker.open("demo-datepicker");
			expect(renderedDatepicker.classList).toContain("active");

			datepicker.close("demo-datepicker");
			expect(renderedDatepicker.classList).not.toContain("active");
		});
	});
});
