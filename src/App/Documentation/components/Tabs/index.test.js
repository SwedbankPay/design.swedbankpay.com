import React from "react";
import { shallow } from "enzyme";

import Tabs, { BasicUsage, WideTabs, TabsScroll, JavascriptMethods } from "./index";

describe("Components: Tabs", () => {
    it("is defined", () => {
        expect(Tabs).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Tabs />);

        expect(wrapper).toMatchSnapshot();
        expect(console.warn).toHaveBeenCalled();
    });

    describe("BasicUsage", () => {
        it("is defined", () => {
            expect(BasicUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicUsage />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WideTabs", () => {
        it("is defined", () => {
            expect(WideTabs).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<WideTabs />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TabsScroll", () => {
        it("is defined", () => {
            expect(TabsScroll).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TabsScroll />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("JavascriptMethods", () => {
        it("is defined", () => {
            expect(JavascriptMethods).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<JavascriptMethods />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
