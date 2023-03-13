import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Accordion, { Overview, ContentGuidelines, DeveloperDocumentation } from "./index";

describe("Components: Accordion", () => {
    it("is defined", () => {
        expect(Accordion).toBeDefined();
    });

    it.skip("renders", () => {
        const componentForSnap = renderer.create(<BrowserRouter><Accordion /></BrowserRouter>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter><Overview /></BrowserRouter>);

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe("ContentGuidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter><ContentGuidelines /></BrowserRouter>);

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe("JavascriptMethods", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {

            const componentForSnap = renderer.create(<BrowserRouter><DeveloperDocumentation /></BrowserRouter>);

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });
});
