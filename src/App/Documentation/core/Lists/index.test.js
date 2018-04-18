import React from "react";
import { shallow } from "enzyme";

import Lists, { BasicList, InlineList, DescriptionList, SettingsList, ListsText } from "./index";

describe("Documentation: Lists", () => {
    it("is defined", () => {
        expect(Lists).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Lists />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("BasicList", () => {
        it("is defined", () => {
            expect(BasicList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <BasicList />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("InlineList", () => {
        it("is defined", () => {
            expect(InlineList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <InlineList />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DescriptionList", () => {
        it("is defined", () => {
            expect(DescriptionList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <DescriptionList />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SettingsList", () => {
        it("is defined", () => {
            expect(SettingsList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <SettingsList />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ListsText", () => {
        it("is defined", () => {
            expect(ListsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <ListsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
