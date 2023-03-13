import React from "react";
import renderer from "react-test-renderer";
import Login, { Overview, ContentGuidelines, DeveloperDocumentation } from "./index";

describe("Forms: index", () => {
    it("is defined", () => {
        expect(Login).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<Login />);

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

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<DeveloperDocumentation />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
