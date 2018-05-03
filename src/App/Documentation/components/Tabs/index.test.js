import React from "react";
import { shallow } from "enzyme";

import Tabs, { Overview, Stacked, Collapsed, TabsText } from "./index";

describe("Components: Tabs", () => {
    it("is defined", () => {
        expect(Tabs).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Tabs />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Overview />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Stacked", () => {
        it("is defined", () => {
            expect(Stacked).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Stacked />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Collapsed", () => {
        it("is defined", () => {
            expect(Collapsed).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Collapsed />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TabsText", () => {
        it("is defined", () => {
            expect(TabsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <TabsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
