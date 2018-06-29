import React from "react";
import { shallow } from "enzyme";

import Display, { HowItWorks, Notation, Examples, HidingElements, DisplayText } from "./index";

describe("Utilities: Display", () => {
    it("is defined", () => {
        expect(Display).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Display />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("HowItWorks", () => {
        it("is defined", () => {
            expect(HowItWorks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <HowItWorks />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Notation", () => {
        it("is defined", () => {
            expect(Notation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Notation />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Examples", () => {
        it("is defined", () => {
            expect(Examples).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Examples />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("HidingElements", () => {
        it("is defined", () => {
            expect(HidingElements).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <HidingElements />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DisplayText", () => {
        it("is defined", () => {
            expect(DisplayText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <DisplayText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
