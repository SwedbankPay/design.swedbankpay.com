import React from "react";
import ReactDOM from "react-dom";

import datepicker from "./index";
import Datepicker from "@/FormComponents/Datepicker";

describe("px-script: datepicker", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    it("is defined", () => {
        expect(datepicker).toBeDefined();
        expect(datepicker.init).toBeDefined();
    });

    it("exposes moment globally", () => {
        expect(window.moment).toBeDefined();
    });

    it("warns about non-existing formats, and defaults to iso8601", () => {
        console.error = jest.fn(); // to prevent error message from using non-enum for format
        console.warn = jest.fn();

        ReactDOM.render(<Datepicker format="test" />, div);

        datepicker.init();
        expect(console.warn).toHaveBeenCalled();
    });
});
