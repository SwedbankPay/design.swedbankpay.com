import React from "react";
import ReactDOM from "react-dom";

import dialog from "./index";

describe("px-script: dialog", () => {
    it("is defined", () => {
        expect(dialog).toBeDefined();
    });

    it("has an init method", () => {
        expect(dialog.init).toBeDefined();
        expect(dialog.init).toBeInstanceOf(Function);
    });

    // TODO: Continue here... [EH]
});
