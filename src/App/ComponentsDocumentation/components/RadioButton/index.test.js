import React from "react";
import { shallow } from "enzyme";

import RadioButton, { Overview, ContentGuidelines, DeveloperDocumentation, HowTo } from "./index";

describe("Component: RadioButton", () => {
    it("is defined", () => {
        expect(RadioButton).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<RadioButton />);

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

    describe("HowTo", () => {
        it("is defined", () => {
            expect(HowTo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HowTo />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
