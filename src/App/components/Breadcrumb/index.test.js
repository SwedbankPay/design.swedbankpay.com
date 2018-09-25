import React from "react";
import { shallow } from "enzyme";

import Breadcrumb, { DefaultItems } from "./index";

describe("Component: Breadcrumb", () => {
    it("is defined", () => {
        expect(Breadcrumb).toBeDefined();
    });

    it("renders with default items when no items is provided through items prop", () => {
        const wrapper = shallow(
            <Breadcrumb />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("breadcrumb");
        expect(wrapper.contains(<DefaultItems />)).toEqual(true);
    });

    it("renders breadcrumb with the provided items in the items prop", () => {
        const items = [{ title: "test" }];

        const wrapper = shallow(
            <Breadcrumb items={items} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<ol className="breadcrumb"><li><span>test</span></li></ol>)).toEqual(true);
    });

    it("renders breadcrumb with the provided items wrapped in anchor tags when href is provided in the items prop", () => {
        const items = [
            {
                title: "test",
                href: "www.example.com"
            }
        ];

        const wrapper = shallow(
            <Breadcrumb items={items} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<ol className="breadcrumb"><li><a href="www.example.com">test</a></li></ol>)).toEqual(true);
    });

    it("renders multiple breadcrumbs when provided in the items prop", () => {
        const items = [
            { title: "test #1" },
            { title: "test #2" },
            { title: "test #3" },
            { title: "test #4" }
        ];

        const wrapper = shallow(
            <Breadcrumb items={items} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>test #1</span>)).toEqual(true);
        expect(wrapper.contains(<span>test #2</span>)).toEqual(true);
        expect(wrapper.contains(<span>test #3</span>)).toEqual(true);
        expect(wrapper.contains(<span>test #4</span>)).toEqual(true);
    });
});
