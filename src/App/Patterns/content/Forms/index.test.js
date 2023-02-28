import React from "react";
import renderer from "react-test-renderer";

import Forms, { Overview, ContentGuidelines, HowToDesignForms, DeveloperDocumentation } from "./index";

describe("Forms: index", () => {
    it("is defined", () => {
        expect(Forms).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<Forms />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Overview />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("ContentGuidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<ContentGuidelines />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("HowToDesignForms", () => {
        it("is defined", () => {
            expect(HowToDesignForms).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<HowToDesignForms />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<DeveloperDocumentation />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
