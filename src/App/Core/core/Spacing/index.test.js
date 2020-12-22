import React from "react";
import { shallow } from "enzyme";

import Spacing, { EightPointSystem, VerticalSpacing, TouchTarget, BaseIncrementOfRem, DiveDeeper, HowItWorks, Notation, Examples } from "./index";

describe("Identity: Spacing", () => {
    it("is defined", () => {
        expect(Spacing).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Spacing />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("EightPointSystem", () => {
        it("is defined", () => {
            expect(EightPointSystem).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<EightPointSystem />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("VerticalSpacing", () => {
        it("is defined", () => {
            expect(VerticalSpacing).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<VerticalSpacing />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TouchTarget", () => {
        it("is defined", () => {
            expect(TouchTarget).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TouchTarget />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("BaseIncrementOfRem", () => {
        it("is defined", () => {
            expect(BaseIncrementOfRem).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BaseIncrementOfRem />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DiveDeeper", () => {
        it("is defined", () => {
            expect(DiveDeeper).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DiveDeeper />);

            expect(wrapper).toMatchSnapshot();
        });
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
