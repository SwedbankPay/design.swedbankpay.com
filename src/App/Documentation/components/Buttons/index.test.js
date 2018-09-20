import React from "react";
import { shallow } from "enzyme";

import Buttons, { Examples, UsageWithOtherTags, OutlineButtons, Sizes, ActiveState, DisabledState, UsageWithIcons, ButtonLoader, UsageWithJavascript, ButtonsText } from "./index";

describe("Documentation: Buttons", () => {
    it("is defined", () => {
        expect(Buttons).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Buttons />
        );

        expect(wrapper).toMatchSnapshot();
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

    describe("Usage With Other Tags", () => {
        it("is defined", () => {
            expect(UsageWithOtherTags).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <UsageWithOtherTags />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Outline Buttons", () => {
        it("is defined", () => {
            expect(OutlineButtons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <OutlineButtons />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Sizes", () => {
        it("is defined", () => {
            expect(Sizes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Sizes />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Active State", () => {
        it("is defined", () => {
            expect(ActiveState).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <ActiveState />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Disabled State", () => {
        it("is defined", () => {
            expect(DisabledState).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <DisabledState />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Usage With Icons", () => {
        it("is defined", () => {
            expect(UsageWithIcons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <UsageWithIcons />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Button Loader", () => {
        it("is defined", () => {
            expect(ButtonLoader).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <ButtonLoader />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Usage With Javascript", () => {
        it("is defined", () => {
            expect(UsageWithJavascript).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <UsageWithJavascript />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Buttons Text", () => {
        it("is defined", () => {
            expect(ButtonsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <ButtonsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
