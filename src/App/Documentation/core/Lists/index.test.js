import React from "react";
import { shallow } from "enzyme";

import Lists, { BasicList, InlineList, DescriptionList, SettingsList, ItemList, StatusItemList, StripedItemList, ListsText } from "./index";

describe("Documentation: Lists", () => {
    it("is defined", () => {
        expect(Lists).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Lists />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("BasicList", () => {
        it("is defined", () => {
            expect(BasicList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicList />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("InlineList", () => {
        it("is defined", () => {
            expect(InlineList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<InlineList />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DescriptionList", () => {
        it("is defined", () => {
            expect(DescriptionList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DescriptionList />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SettingsList", () => {
        it("is defined", () => {
            expect(SettingsList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SettingsList />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ItemList", () => {
        it("is defined", () => {
            expect(ItemList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ItemList />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("StatusItemList", () => {
        it("is defined", () => {
            expect(StatusItemList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<StatusItemList />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("StripedItemList", () => {
        it("is defined", () => {
            expect(StripedItemList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<StripedItemList />);

            expect(wrapper).toMatchSnapshot();
        });

        it("prevents default on anchors", () => {
            const wrapper = shallow(<StripedItemList />);
            const menuAnchors = wrapper.find(".action-menu").find("a");
            const eventHandler = { preventDefault: jest.fn() };

            menuAnchors.forEach(anchor => anchor.simulate("click", eventHandler));
            expect(eventHandler.preventDefault).toHaveBeenCalledTimes(menuAnchors.length);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ListsText", () => {
        it("is defined", () => {
            expect(ListsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ListsText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
