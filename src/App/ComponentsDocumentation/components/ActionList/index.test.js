import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import ActionList, { Overview, Anchorpoints, JavascriptMethods } from "./index";

describe("Components: ActionList", () => {
    it("is defined", () => {
        expect(ActionList).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const componentForSnap = renderer.create(<BrowserRouter>
            <ActionList />
        </BrowserRouter>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
        // expect(console.warn).toHaveBeenCalled();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <Overview />
            </BrowserRouter>);

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe("JavascriptMethods", () => {
        it("is defined", () => {
            expect(JavascriptMethods).toBeDefined();
        });

        it.skip("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <JavascriptMethods />
            </BrowserRouter>);

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe("Anchorpoints", () => {
        it("is defined", () => {
            expect(Anchorpoints).toBeDefined();
        });

        it.skip("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <Anchorpoints />
            </BrowserRouter>);

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });
});
