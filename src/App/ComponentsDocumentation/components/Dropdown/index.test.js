import React from "react";
import { shallow } from "enzyme";

import Dropdown, { Overview, ContentGuidelines, DeveloperDocumentation } from "./index";

describe("Documentation: Dropdown", () => {
    it("is defined", () => {
        expect(Dropdown).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Dropdown />);

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
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ContentGuidelines />);

            expect(wrapper).toMatchSnapshot();
        });

    });

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeveloperDocumentation />);

            expect(wrapper).toMatchSnapshot();
        });

    });
});
