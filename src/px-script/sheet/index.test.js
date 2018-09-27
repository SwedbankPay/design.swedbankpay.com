import React from "react";
import ReactDOM from "react-dom";

import sheet from "./index";

describe("px-script: sheet", () => {
    it("is defined", () => {
        expect(sheet).toBeDefined();
    });

    it("has an init method", () => {
        expect(sheet.init).toBeDefined();
        expect(sheet.init).toBeInstanceOf(Function);
    });

    // TODO: Continue here... [EH]
});
