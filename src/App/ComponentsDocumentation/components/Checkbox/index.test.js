import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Checkbox, { Overview, ContentGuidelines, DeveloperDocumentation, HowTo } from "./index";

describe("Component: Checkbox", () => {
    it("is defined", () => {
        expect(Checkbox).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<BrowserRouter><Checkbox /></BrowserRouter>);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Overview />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("ContentGuidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<ContentGuidelines />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<DeveloperDocumentation />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("HowTo", () => {
        it("is defined", () => {
            expect(HowTo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<HowTo />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
