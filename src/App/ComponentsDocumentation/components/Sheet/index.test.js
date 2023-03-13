import React from "react";
import renderer from "react-test-renderer";

import Sheet, { SheetExample, ContentGuidelines, DeveloperDocumentation } from "./index";

describe("Documentation: Sheet", () => {
    it("is defined", () => {
        expect(Sheet).toBeDefined();
    });

    it.skip("renders", () => {
        console.warn = jest.fn();

        const wrapper = renderer.create(<Sheet />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("SheetExample", () => {
        it("is defined", () => {
            expect(SheetExample).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<SheetExample />);

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

        it.skip("renders", () => {
            const wrapper = renderer.create(<DeveloperDocumentation />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
