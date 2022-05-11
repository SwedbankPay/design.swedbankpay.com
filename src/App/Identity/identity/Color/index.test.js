import React from "react";
import { shallow } from "enzyme";

import Color, { Lead, ColorContrast, TextColors, BackgroundColors, BrownScaleColors, SystemColors, MainColors } from "./index";

describe("Core: Color", () => {
    it("is defined", () => {
        expect(Color).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Color />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Lead", () => {
        it("is defined", () => {
            expect(Lead).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Lead />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ColorContrast", () => {
        it("is defined", () => {
            expect(ColorContrast).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ColorContrast />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TextColors", () => {
        it("is defined", () => {
            expect(TextColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TextColors />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("BackgroundColors", () => {
        it("is defined", () => {
            expect(BackgroundColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BackgroundColors />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("BrownScaleColors", () => {
        it("is defined", () => {
            expect(BrownScaleColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BrownScaleColors />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SystemColors", () => {
        it("is defined", () => {
            expect(SystemColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SystemColors />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("MainColors", () => {
        it("is defined", () => {
            expect(MainColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MainColors />);

            expect(wrapper).toMatchSnapshot();
        });
    });

});
