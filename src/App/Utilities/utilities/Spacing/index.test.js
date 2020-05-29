import React from "react";
import { shallow } from "enzyme";

import Spacing, { HowItWorks, Notation, Examples } from "./index";

describe("Utilities: Spacing", () => {
    it("is defined", () => {
        expect(Spacing).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Spacing />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("HowItWorks", () => {
        it("is defined", () => {
            expect(HowItWorks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HowItWorks />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Notation", () => {
        it("is defined", () => {
            expect(Notation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Notation />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Examples", () => {
        it("is defined", () => {
            expect(Examples).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Examples />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
