import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Badge, { Overview } from "./index";

describe("Components: Badge", () => {
    it("is defined", () => {
        expect(Badge).toBeDefined();
    });

    it.skip("renders", () => {
        const componentForSnap = renderer.create(<BrowserRouter>
            <Badge />
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
