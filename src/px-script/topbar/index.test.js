import React from "react";
import ReactDOM from "react-dom";

import topbar from "./index";

describe("px-script: topbar", () => {
    it("is defined", () => {
        expect(topbar).toBeDefined();
    });

    it("has an init method", () => {
        expect(topbar.init).toBeDefined();
        expect(topbar.init).toBeInstanceOf(Function);
    });

    // TODO: Continue here... [EH]
});
