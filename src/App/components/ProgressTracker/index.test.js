import React from "react";
import { shallow } from "enzyme";

import ProgressTracker, { DefaultItems } from "./index";

describe("Component: ProgressTracker", () => {
    it("is defined", () => {
        expect(ProgressTracker).toBeDefined();
    });

    it("renders with default items when no items is provided through items prop", () => {
        const wrapper = shallow(<ProgressTracker />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("progress-tracker");
        expect(wrapper.contains(<DefaultItems />)).toEqual(true);
    });

    it("renders with class progress-tracker-sm when provided the prop small", () => {
        const wrapper = shallow(<ProgressTracker small />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("progress-tracker-sm");
    });

    it("renders progress-tracker with the provided items in the items prop", () => {
        const items = [{ title: "test" }];

        const wrapper = shallow(<ProgressTracker items={items} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toEqual("<ol class=\"progress-tracker\"><li><span>test</span></li></ol>");
    });

    it("renders progress-tracker with the provided items in the items prop and an active step", () => {
        const items = [
            { title: "test #1" },
            {
                title: "test #2",
                active: true
            }
        ];

        const wrapper = shallow(<ProgressTracker items={items} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<li><span>test #1</span></li>");
        expect(wrapper.html()).toContain("<li class=\"active\"><span>test #2</span></li>");
    });

    it("renders progress-tracker with the provided items wrapped in anchor tags when href is provided in the items prop", () => {
        const items = [
            {
                title: "test",
                href: "www.example.com"
            }
        ];

        const wrapper = shallow(<ProgressTracker items={items} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toEqual("<ol class=\"progress-tracker\"><li><a href=\"www.example.com\">test</a></li></ol>");
    });

    it("renders multiple progress-steps when provided in the items prop", () => {
        const items = [
            { title: "test #1" },
            { title: "test #2" },
            {
                title: "test #3",
                active: true
            },
            { title: "test #4" }
        ];

        const wrapper = shallow(<ProgressTracker items={items} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>test #1</span>)).toEqual(true);
        expect(wrapper.contains(<span>test #2</span>)).toEqual(true);
        expect(wrapper.contains(<li className="active"><span>test #3</span></li>)).toEqual(true);
        expect(wrapper.contains(<span>test #4</span>)).toEqual(true);
    });
});
