import React from "react";
import renderer from "react-test-renderer";
import Copywriting, { Terminology, Tonality, GlossaryLinks } from "./index";

describe("Core: Accessibility", () => {
    it("is defined", () => {
        expect(Copywriting).toBeDefined();
    });

    describe("Intro", () => {
        it("is defined", () => {
            expect(Terminology).toBeDefined();
        });
    });

    describe("AccessibleService", () => {
        it("is defined", () => {
            expect(Tonality).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Tonality />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("WcagStandard", () => {
        it("is defined", () => {
            expect(GlossaryLinks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<GlossaryLinks />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
