import React from "react";
import { shallow } from "enzyme";

import Sheet, { SheetExample, ContentGuidelines, DeveloperDocumentation } from "./index";

describe("Documentation: Sheet", () => {
    it("is defined", () => {
        expect(Sheet).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Sheet />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("SheetExample", () => {
        it("is defined", () => {
            expect(SheetExample).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SheetExample />);

            expect(wrapper).toMatchSnapshot();
        });

    });

    describe("ContentGuidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ContentGuidelines />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeveloperDocumentation />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
