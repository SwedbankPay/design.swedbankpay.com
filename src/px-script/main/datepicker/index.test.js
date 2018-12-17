import React from "react";
import ReactDOM from "react-dom";
import flatpickr from "flatpickr";

import datepicker from "./index";
import Datepicker from "@/FormComponents/Datepicker";
import formats from "./formats";

jest.mock("flatpickr");

describe("px-script: datepicker", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    it("is defined", () => {
        expect(datepicker).toBeDefined();
    });

    it("has an init method", () => {
        expect(datepicker.init).toBeDefined();
        expect(datepicker.init).toBeInstanceOf(Function);
    });

    it("does not init if no datepickers exist", () => {
        ReactDOM.render(<p>No datepickers here!</p>, div);

        const datePickerSpy = jest.spyOn(datepicker, "init");

        expect(datePickerSpy).not.toHaveBeenCalled();
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

        ReactDOM.render(<Datepicker />, div);
        datepicker.init();

        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.iso8601
            })
        );
    });

    it("sets an alternate format if it is specified", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format

        ReactDOM.render(<Datepicker altInput="F j, Y" />, div);
        datepicker.init();

        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.iso8601,
                altFormat: "F j, Y",
                altInput: true
            })
        );
    });

    it("defaults to iso8601 when no format is specified and includes time when specified", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format

        ReactDOM.render(<Datepicker time />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                dateFormat: `${formats.iso8601.dateFormat} ${formats.iso8601.hourFormat}`,
                enableTime: true,
                locale: formats.iso8601
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as nb", () => {
        ReactDOM.render(<Datepicker format="nb" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.nb,
                dateFormat: formats.nb.dateFormat
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as sv", () => {
        ReactDOM.render(<Datepicker format="sv" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.sv,
                dateFormat: formats.sv.dateFormat
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as da", () => {
        ReactDOM.render(<Datepicker format="da" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.da,
                dateFormat: formats.da.dateFormat
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as fi", () => {
        ReactDOM.render(<Datepicker format="fi" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.fi,
                dateFormat: formats.fi.dateFormat
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as en", () => {
        ReactDOM.render(<Datepicker format="en" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.en,
                dateFormat: formats.en.dateFormat
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as iso8601", () => {
        ReactDOM.render(<Datepicker format="iso8601" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.iso8601,
                dateFormat: formats.iso8601.dateFormat
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute min", () => {
        ReactDOM.render(<Datepicker format="nb" min="test" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.nb,
                minDate: "test"
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute max", () => {
        ReactDOM.render(<Datepicker format="nb" max="test" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.nb,
                maxDate: "test"
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute datepicker-value", () => {
        ReactDOM.render(<Datepicker format="nb" value="test" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                locale: formats.nb,
                defaultDate: "test"
            })
        );
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute months", () => {
        ReactDOM.render(<Datepicker format="nb" months="3" />, div);

        datepicker.init();
        expect(flatpickr).toHaveBeenCalled();
        expect(flatpickr).toHaveBeenCalledWith(
            expect.any(HTMLElement),
            expect.objectContaining({
                dateFormat: formats.nb.dateFormat,
                numMonths: 3
            })
        );
    });

    // it("Adds click event on label that triggers the calendar", () => {
    //     ReactDOM.render(<Datepicker format="nb" id="test" label="test" />, div);

    //     const renderedDatepicker = document.getElementById("test");
    //     const label = document.querySelector("label[for=test]");

    //     renderedDatepicker.focus = jest.fn();

    //     datepicker.init();
    //     label.click();
    //     jest.runAllTimers();
    //     expect(renderedDatepicker.focus).toHaveBeenCalled();
    // });
});
