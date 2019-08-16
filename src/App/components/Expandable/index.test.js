import React from "react";
import { shallow, mount } from "enzyme";

import Expandable, { ExpandablePlaceholder } from "./index";

const items = [
    {
        title: "Foo",
        content: "My accordion content"
    },
    {
        title: "Bar",
        content: "My accordion content"
    },
    {
        title: "Baz",
        content: "My accordion content"
    }
];

describe("Component: Expandable", () => {
    it("is defined", () => {
        expect(Expandable).toBeDefined();
    });

    it("returns an expandable component when no items are provided", () => {
        const wrapper = mount(<Expandable />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<ExpandablePlaceholder />)).toEqual(true);
    });

    it("returns a number of expandables matching the length of items", () => {
        const wrapper = mount(<Expandable items={items}/>);
        const expandables = wrapper.find(".expandable");

        expect(wrapper).toMatchSnapshot();
        expect(expandables.length).toEqual(items.length);
    });

    it("prints an expandable component when items is provided but is invalid", () => {
        const wrapper = mount(<Expandable items="wrong" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<ExpandablePlaceholder />)).toEqual(true);
    });

    describe("ExpandablePlaceholder", () => {
        it("renders", () => {
            const wrapper = shallow(<ExpandablePlaceholder />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
