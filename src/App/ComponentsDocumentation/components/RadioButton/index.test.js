import React from "react";
import { shallow } from "enzyme";

import RadioButton, { Overview, ContentGuidelines, DoAndDonts } from "./index";

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
    describe("DoAndDonts", () => {
        it("is defined", () => {
            expect(DoAndDonts).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DoAndDonts />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
