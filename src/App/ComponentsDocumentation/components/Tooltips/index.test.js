import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Tooltip, { Overview } from "./index";

describe("Components: Tooltip", () => {
    it("is defined", () => {
        expect(Tooltip).toBeDefined();
    });

    it.skip("renders", () => {

        const componentForSnap = renderer.create(<BrowserRouter>
            <Tooltip />
        </BrowserRouter>
        );

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <Overview />
            </BrowserRouter>
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });
});
