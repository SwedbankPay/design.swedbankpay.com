import React from "react";
import { shallow } from "enzyme";

import Checkbox, { Overview, ContentGuidelines, HowTo } from "./index";

describe("Component: Checkbox", () => {
    it("is defined", () => {
        expect(Checkbox).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Checkbox />);

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
