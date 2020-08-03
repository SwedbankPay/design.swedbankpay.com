import React from "react";
import { shallow } from "enzyme";

import Buttons, { Overview, UsageWithOtherTags, OutlineButtons, ButtonGroup, Sizes, UsageWithIcons, ButtonLoader } from "./index";

describe("Documentation: Buttons", () => {
    it("is defined", () => {
        expect(Buttons).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Buttons />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Usage With Other Tags", () => {
        it("is defined", () => {
            expect(UsageWithOtherTags).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<UsageWithOtherTags />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Outline Buttons", () => {
        it("is defined", () => {
            expect(OutlineButtons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<OutlineButtons />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Button group", () => {
        it("is defined", () => {
            expect(ButtonGroup).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ButtonGroup />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Sizes", () => {
        it("is defined", () => {
            expect(Sizes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Sizes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ButtonGroup", () => {
        it("is defined", () => {
            expect(ButtonGroup).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ButtonGroup />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Usage With Icons", () => {
        it("is defined", () => {
            expect(UsageWithIcons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<UsageWithIcons />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Button Loader", () => {
        it("is defined", () => {
            expect(ButtonLoader).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ButtonLoader />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
