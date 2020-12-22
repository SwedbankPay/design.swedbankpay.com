import React from "react";
import { shallow } from "enzyme";

import Color, { Lead, CommunicationColors, TextColors, BackgroundColors, ButtonColors, BrownScaleColors, ComplementaryColors, SystemColors, GrayScaleColors, MainColors } from "./index";

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

    describe("CommunicationColors", () => {
        it("is defined", () => {
            expect(CommunicationColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CommunicationColors />);

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

    describe("ButtonColors", () => {
        it("is defined", () => {
            expect(ButtonColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ButtonColors />);

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

    describe("ComplementaryColors", () => {
        it("is defined", () => {
            expect(ComplementaryColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ComplementaryColors />);

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

    describe("GrayScaleColors", () => {
        it("is defined", () => {
            expect(GrayScaleColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GrayScaleColors />);

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
