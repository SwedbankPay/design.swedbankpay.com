import React from "react";
import { shallow } from "enzyme";

import Text, { TextAlignment, TextWrappingAndOverflow, TextTransform, FontWeightAndItalics, TextText } from "./index";

describe("Utilities: Text", () => {
    it("is defined", () => {
        expect(Text).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Text />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("TextAlignment", () => {
        it("is defined", () => {
            expect(TextAlignment).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TextAlignment />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TextWrappingAndOverflow", () => {
        it("is defined", () => {
            expect(TextWrappingAndOverflow).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TextWrappingAndOverflow />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TextTransform", () => {
        it("is defined", () => {
            expect(TextTransform).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TextTransform />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FontWeightAndItalics", () => {
        it("is defined", () => {
            expect(FontWeightAndItalics).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FontWeightAndItalics />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TextText", () => {
        it("is defined", () => {
            expect(TextText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TextText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
