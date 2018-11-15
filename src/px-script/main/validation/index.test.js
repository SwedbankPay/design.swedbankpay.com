import React from "react";
import ReactDOM from "react-dom";

import validation from "./index";

describe("px-script: validation", () => {
    it("is defined", () => {
        expect(validation).toBeDefined();
    });

    it("has an init method", () => {
        expect(validation.init).toBeDefined();
        expect(validation.init).toBeInstanceOf(Function);
    });

    // TODO: Continue here... [EH]
});
