import React from "react";
import { shallow } from "enzyme";

import Filters, { Overview, ContentGuidelines, HowToDesignFilters, DeveloperDocumentation } from "./index";

describe("Forms: index", () => {
    it("is defined", () => {
        expect(Filters).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Filters />);

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

    describe("HowToDesignFilters", () => {
        it("is defined", () => {
            expect(HowToDesignFilters).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HowToDesignFilters />);

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
