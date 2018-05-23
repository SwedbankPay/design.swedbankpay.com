import React from "react";
import { shallow } from "enzyme";

import Introduction, { QuickStart, Css, JavaScript, StarterTemplate, IntroductionText } from "./index";

describe("GettingStarted: Introduction", () => {
    it("is defined", () => {
        expect(Introduction).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Introduction />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("QuickStart", () => {
        it("is defined", () => {
            expect(QuickStart).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <QuickStart />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Css", () => {
        it("is defined", () => {
            expect(Css).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Css />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("JavaScript", () => {
        it("is defined", () => {
            expect(JavaScript).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <JavaScript />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("StarterTemplate", () => {
        it("is defined", () => {
            expect(StarterTemplate).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <StarterTemplate />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("IntroductionText", () => {
        it("is defined", () => {
            expect(IntroductionText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <IntroductionText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
