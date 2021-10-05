import React from "react";
import { shallow } from "enzyme";

import Forms, { Overview, ContentGuidelines, HowToDesignForms, DeveloperDocumentation } from "./index";

describe("Forms: index", () => {
    it("is defined", () => {
        expect(Forms).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Forms />);

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

    describe("HowToDesignForms", () => {
        it("is defined", () => {
            expect(HowToDesignForms).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HowToDesignForms />);

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
