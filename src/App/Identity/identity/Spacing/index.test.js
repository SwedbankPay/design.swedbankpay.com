import React from "react";
import renderer from "react-test-renderer";
import Spacing, { EightPointSystem, VerticalSpacing, TouchTarget, BaseIncrementOfRem, DiveDeeper, HowItWorks, Notation, Examples } from "./index";

describe("Identity: Spacing", () => {
    it("is defined", () => {
        expect(Spacing).toBeDefined();
    });

    it("renders", () => {
        const wrapper = renderer.create(<Spacing />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("EightPointSystem", () => {
        it("is defined", () => {
            expect(EightPointSystem).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<EightPointSystem />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("VerticalSpacing", () => {
        it("is defined", () => {
            expect(VerticalSpacing).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<VerticalSpacing />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("TouchTarget", () => {
        it("is defined", () => {
            expect(TouchTarget).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<TouchTarget />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("BaseIncrementOfRem", () => {
        it("is defined", () => {
            expect(BaseIncrementOfRem).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<BaseIncrementOfRem />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("DiveDeeper", () => {
        it("is defined", () => {
            expect(DiveDeeper).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<DiveDeeper />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("HowItWorks", () => {
        it("is defined", () => {
            expect(HowItWorks).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<HowItWorks />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Notation", () => {
        it("is defined", () => {
            expect(Notation).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Notation />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Examples", () => {
        it("is defined", () => {
            expect(Examples).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Examples />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
