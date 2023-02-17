import React from "react";
import { shallow } from "enzyme";

import Lists, {
    BasicList,
    InlineList,
    BulletList,
    DescriptionList,
    SettingsList,
    ItemList,
    ItemListBordered,
    ItemListLarge,
    HoverItemList,
    StripedItemList
} from "./index";

describe("Documentation: Lists", () => {
    it("is defined", () => {
        expect(Lists).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Lists />);

        expect(wrapper).toMatchSnapshot();
        // expect(console.warn).toHaveBeenCalled();
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

    describe("BulletList", () => {
        it("is defined", () => {
            expect(BulletList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BulletList />);

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

    describe("ItemListBordered", () => {
        it("is defined", () => {
            expect(ItemListBordered).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ItemListBordered />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ItemListLarge", () => {
        it("is defined", () => {
            expect(ItemListLarge).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ItemListLarge />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("HoverItemList", () => {
        it("is defined", () => {
            expect(HoverItemList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HoverItemList />);

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
});
