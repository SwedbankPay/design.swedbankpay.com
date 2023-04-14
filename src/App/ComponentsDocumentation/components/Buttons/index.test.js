import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Buttons, { Overview, CombiningButtons, DeveloperDocumentation, UtilityClasses } from "./index";

describe("Documentation: Buttons", () => {
    it("is defined", () => {
        expect(Buttons).toBeDefined();
    });

    it.skip("renders", () => {
        const componentForSnap = renderer.create(<BrowserRouter>
            <Buttons />
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

    describe("Combining buttons", () => {
        it("is defined", () => {
            expect(CombiningButtons).toBeDefined();
        });

        it("renders", () => {
            const componentForSnap = renderer.create(
                <CombiningButtons />
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe("Developer documentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <DeveloperDocumentation />
            </BrowserRouter>
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe.skip("Utility classes", () => {
        it("is defined", () => {
            expect(UtilityClasses).toBeDefined();
        });

        it("renders", () => {
            const componentForSnap = renderer.create(
                <UtilityClasses />
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });
});
