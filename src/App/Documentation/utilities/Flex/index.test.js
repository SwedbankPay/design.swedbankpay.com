import React from "react";
import { shallow } from "enzyme";

import Flex, { EnableFlexBehaviors, Direction, JustifyContent, AlignItems, AlignSelf, Fill, GrowAndShrink, AutoMargins, Wrap, Order, AlignContent, FlexText } from "./index";

describe("Utilities: Flex", () => {
    it("is defined", () => {
        expect(Flex).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Flex />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("EnableFlexBehaviors", () => {
        it("is defined", () => {
            expect(EnableFlexBehaviors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<EnableFlexBehaviors />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Direction", () => {
        it("is defined", () => {
            expect(Direction).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Direction />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("JustifyContent", () => {
        it("is defined", () => {
            expect(JustifyContent).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<JustifyContent />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AlignItems", () => {
        it("is defined", () => {
            expect(AlignItems).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AlignItems />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AlignSelf", () => {
        it("is defined", () => {
            expect(AlignSelf).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AlignSelf />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Fill", () => {
        it("is defined", () => {
            expect(Fill).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Fill />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("GrowAndShrink", () => {
        it("is defined", () => {
            expect(GrowAndShrink).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GrowAndShrink />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AutoMargins", () => {
        it("is defined", () => {
            expect(AutoMargins).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AutoMargins />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Wrap", () => {
        it("is defined", () => {
            expect(Wrap).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Wrap />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Order", () => {
        it("is defined", () => {
            expect(Order).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Order />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AlignContent", () => {
        it("is defined", () => {
            expect(AlignContent).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AlignContent />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FlexText", () => {
        it("is defined", () => {
            expect(FlexText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FlexText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
