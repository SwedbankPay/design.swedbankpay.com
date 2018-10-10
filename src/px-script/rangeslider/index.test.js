import React from "react";
import ReactDOM from "react-dom";

import rangeslider from "./index";

describe("px-script: rangeslider", () => {
    it("is defined", () => {
        expect(rangeslider).toBeDefined();
    });

    it("has an init method", () => {
        expect(rangeslider.init).toBeDefined();
        expect(rangeslider.init).toBeInstanceOf(Function);
    });

    // TODO: Continue here... [EH]
});
