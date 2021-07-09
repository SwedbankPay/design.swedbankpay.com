import React from "react";
import { shallow } from "enzyme";

import Select, { Overview, WhenToUse, ContentGuidelines, DeveloperDocumentation } from "./index";

describe("Component: Select", () => {
    it("is defined", () => {
        expect(Select).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Select />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("When to use", () => {
        it("is defined", () => {
            expect(WhenToUse).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<WhenToUse />);

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
