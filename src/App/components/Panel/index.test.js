import React from "react";
import { shallow } from "enzyme";

import Panel from "./index";

describe("Component: Panel -", () => {
    it("is defined", () => {
        expect(Panel).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Panel />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders without header when prop title is missing", () => {
        const wrapper = shallow(<Panel />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("header");
        expect(wrapper.html()).not.toContain("panel-title");
    });

    it("renders with a header without subtitle when prop title is provided and prop subTitle is missing", () => {
        const wrapper = shallow(<Panel title="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("header");
        expect(wrapper.contains(<h2 className="panel-title">test</h2>)).toEqual(true);
        expect(wrapper.contains(<p className="panel-sub-title">test</p>)).toEqual(false);
    });

    it("renders with a header and subtitle when prop title and subTitle is provided", () => {
        const wrapper = shallow(<Panel title="test" subTitle="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("header");
        expect(wrapper.contains(<h2 className="panel-title">test</h2>)).toEqual(true);
        expect(wrapper.contains(<p className="panel-sub-title">test</p>)).toEqual(true);
    });

    it("renders without panel-body when prop bodyContent is not provided", () => {
        const wrapper = shallow(<Panel />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("panel-body");
    });

    it("renders with panel-body when prop bodyContent is provided", () => {
        const bodyContent = [
            "Your main panel content is put here.",
            "Some more content over here.",
            "And one more line, just to be safe."
        ];
        const wrapper = shallow(<Panel bodyContent={bodyContent} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("panel-body");
        expect(wrapper.contains(<p>Your main panel content is put here.</p>)).toEqual(true);
    });

    it("renders without a footer when prop footerText is not provided", () => {
        const wrapper = shallow(<Panel />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("footer");
    });

    it("renders with a footer when prop footerText is provided", () => {
        const wrapper = shallow(<Panel footerText="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("footer");
        expect(wrapper.contains(<p>test</p>)).toEqual(true);
    });

    it("renders with class 'panel-bottomless when prop removeBottomPadding is true", () => {
        const wrapper = shallow(<Panel removeBottomPadding />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("panel-bottomless");
    });

    it("renders with class 'panel-no-padding' when prop removeAllPadding  is true", () => {
        const wrapper = shallow(<Panel removeAllPadding />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("panel-no-padding");
    });

    it("renders with class 'panel-half-padding' when prop halfPadding is true", () => {
        const wrapper = shallow(<Panel halfPadding />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("panel-half-padding");
    });

    it("prop type is an enum with set values", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Panel type="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });
});
