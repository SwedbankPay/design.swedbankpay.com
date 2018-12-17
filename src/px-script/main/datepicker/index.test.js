import React from "react";
import ReactDOM from "react-dom";

import datepicker from "./index";
import Datepicker from "@/FormComponents/Datepicker";
import formats from "./formats";

describe("px-script: datepicker", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);
    jest.useFakeTimers();

    it("is defined", () => {
        expect(datepicker).toBeDefined();
    });

    // it("has an init method", () => {
    //     expect(datepicker.init).toBeDefined();
    //     expect(datepicker.init).toBeInstanceOf(Function);
    // });

    // it("exposes moment globally", () => {
    //     expect(window.moment).toBeDefined();
    // });

    // it("warns about non-existing formats", () => {
    //     console.error = jest.fn(); // To prevent error message from using non-enum for format
    //     console.warn = jest.fn();

    //     ReactDOM.render(<Datepicker format="test" />, div);

    //     datepicker.init();
    //     expect(console.warn).toHaveBeenCalled();
    // });

    // it("defaults to iso8601 when no format is specified", () => {
    //     console.error = jest.fn(); // To prevent error message from using non-enum for format

    //     ReactDOM.render(<Datepicker />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.iso8601.dateFormat
    //         })
    //     );
    // });

    // it("defaults to iso8601 when no format is specified and includes time when specified", () => {
    //     console.error = jest.fn(); // To prevent error message from using non-enum for format

    //     ReactDOM.render(<Datepicker time />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: `${formats.iso8601.hourFormat} ${formats.iso8601.dateFormat}`,
    //             time: true,
    //             monthsInCalendar: 1
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as nb", () => {
    //     ReactDOM.render(<Datepicker format="nb" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.nb.dateFormat
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as sv", () => {
    //     ReactDOM.render(<Datepicker format="sv" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.sv.dateFormat
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as da", () => {
    //     ReactDOM.render(<Datepicker format="da" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.da.dateFormat
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as fi", () => {
    //     ReactDOM.render(<Datepicker format="fi" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.fi.dateFormat
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as en", () => {
    //     ReactDOM.render(<Datepicker format="en" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.en.dateFormat
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as iso8601", () => {
    //     ReactDOM.render(<Datepicker format="iso8601" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.iso8601.dateFormat
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as nb with attribute min", () => {
    //     ReactDOM.render(<Datepicker format="nb" min="test" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.nb.dateFormat,
    //             min: "test"
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as nb with attribute max", () => {
    //     ReactDOM.render(<Datepicker format="nb" max="test" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.nb.dateFormat,
    //             max: "test"
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as nb with attribute datepicker-value", () => {
    //     ReactDOM.render(<Datepicker format="nb" value="test" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.nb.dateFormat,
    //             initialValue: "test"
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as nb with attribute required", () => {
    //     ReactDOM.render(<Datepicker format="nb" required />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.nb.dateFormat,
    //             required: true
    //         })
    //     );
    // });

    // it("sends rome correct options for dateformat when specified as nb with attribute months", () => {
    //     ReactDOM.render(<Datepicker format="nb" months="3" />, div);

    //     datepicker.init();
    //     expect(rome).toHaveBeenCalled();
    //     expect(rome).toHaveBeenCalledWith(
    //         expect.any(HTMLElement),
    //         expect.objectContaining({
    //             inputFormat: formats.nb.dateFormat,
    //             monthsInCalendar: 3
    //         })
    //     );
    // });

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
