import React from "react";
import ReactDOM from "react-dom";

import datepicker from "./index";
import Datepicker from "@components/FormComponents/Datepicker";
import formats from "./formats";

// TODO: rewrite tests to mock flatpickr [AW]

/*
    NB: datepicker.init() resets the _datepickers array and destroys flatpickr instances only when at least one valid datepicker is found [AW]
*/

describe("scripts: datepicker", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    it("is defined", () => {
        expect(datepicker).toBeDefined();
    });

    describe("datepicker.init", () => {
        it("has an init method", () => {
            expect(datepicker.init).toBeDefined();
            expect(datepicker.init).toBeInstanceOf(Function);
        });

        it("does not init if no datepickers exist", () => {
            ReactDOM.render(<p>No datepickers here!</p>, div);

            const datePickerSpy = jest.spyOn(datepicker, "init");

            expect(datePickerSpy).not.toHaveBeenCalled();
        });

        it("inits the datepicker matching the passed ID", () => {
            ReactDOM.render(<Datepicker id="test-datepicker" />, div);

            const returnVal = datepicker.init("test-datepicker");

            expect(returnVal.input.id).toEqual("test-datepicker");
        });

        it("returns an array of objects if more than one datepicker is initialized", () => {
            ReactDOM.render(
                <>
                    <Datepicker />
                    <Datepicker />
                </>, div
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
            ReactDOM.render(<Datepicker />, div);

            datepicker.init();

            expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(1);

            datepicker.init();

            expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(1);
        });

        it("destroys existing flatpickr instances on init(ID) if the given ID is already initialized", () => {
            ReactDOM.render(
                <>
                    <Datepicker id="test-1" />
                    <Datepicker id="test-2" />
                </>, div
            );

            datepicker.init();

            expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(2);

            datepicker.init("test-2");

            expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(2);
        });

        it("doesn't destroy existing flatpickr instances on init(ID) if the given ID is invalid", () => {
            ReactDOM.render(<Datepicker id="test-1" />, div);

            datepicker.init();

            expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(1);

            datepicker.init("invalid-id");

            expect(document.querySelectorAll(".flatpickr-calendar").length).toEqual(1);
        });
    });

    it("warns about non-existing formats", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format
        console.warn = jest.fn();

        ReactDOM.render(<Datepicker format="test" />, div);

        datepicker.init();
        expect(console.warn).toHaveBeenCalled();
    });

    it("defaults to iso8601 when no format is specified", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format

        ReactDOM.render(<Datepicker id="test-datepicker" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.dateFormat).toEqual(formats.iso8601.dateFormat);
    });

    it("sets an alternate format if datepicker-fulldate is true", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format

        ReactDOM.render(<Datepicker id="test-datepicker" fulldate="true" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.locale.fulldate).toEqual(formats.iso8601.fulldate);
    });

    it("includes time when specified", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format

        ReactDOM.render(<Datepicker id="test-datepicker" time />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.enableTime).toBeTruthy();
    });

    it("sends flatpickr correct options for dateformat when specified as nb", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="nb" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.locale.dateFormat).toEqual(formats.nb.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as sv", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="sv" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.locale.dateFormat).toEqual(formats.sv.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as da", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="da" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.locale.dateFormat).toEqual(formats.da.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as fi", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="fi" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.locale.dateFormat).toEqual(formats.fi.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as en", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="en" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.locale.dateFormat).toEqual(formats.en.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as iso8601", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="iso8601" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.locale.dateFormat).toEqual(formats.iso8601.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute min", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="nb" min="test" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.datepickerMin).toEqual("test");
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute max", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="nb" max="test" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.datepickerMax).toEqual("test");
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute datepicker-value", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="nb" value="test" />, div);

        const returnVal = datepicker.init("test-datepicker");

        expect(returnVal.config.datepickerValue).toEqual("test");
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute months", () => {
        ReactDOM.render(<Datepicker id="test-datepicker" format="nb" months="3" />, div);

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
            ReactDOM.render(<Datepicker id="demo-datepicker" />, div);
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
            ReactDOM.render(<Datepicker id="demo-datepicker" />, div);
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
