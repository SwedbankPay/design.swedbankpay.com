import React from "react";

import tooltips from "./index";

describe("scripts: tooltips", () => {

    it("is defined", () => {
        expect(tooltips).toBeDefined();
    });

    describe("tooltips.init", () => {
        it("is defined", () => {
            expect(tooltips.init).toBeDefined();
        });
    });
});
