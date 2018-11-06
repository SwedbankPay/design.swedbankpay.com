import React from "react";
import { shallow } from "enzyme";
import "prismjs";

import Attribute, { Property } from "./index";

describe("Utilities: Attribute", () => {
    it("is defined", () => {
        expect(Attribute).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Attribute name="test" value="testValue" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="token attr-name">test</span>)).toEqual(true);
    });

    it("renders data attribute", () => {
        const wrapper = shallow(<Attribute name="test" value="test" data />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("data");
    });

    it("renders name when only the name prop has been passed", () => {
        const wrapper = shallow(<Attribute name="test" />);
        const spans = wrapper.find("span");

        expect(wrapper).toMatchSnapshot();
        expect(spans).toHaveLength(1);
        expect(wrapper.html()).not.toContain("data");
    });

    it("renders name with data when the name and data prop has been passed", () => {
        const wrapper = shallow(<Attribute name="test" data />);
        const spans = wrapper.find("span");

        expect(wrapper).toMatchSnapshot();
        expect(spans).toHaveLength(2);
        expect(wrapper.html()).toContain("data");
    });

    it("renders value when only the value prop has been passed", () => {
        const wrapper = shallow(<Attribute value="test" />);
        const spans = wrapper.find("span");

        expect(wrapper).toMatchSnapshot();
        expect(spans).toHaveLength(1);
        expect(wrapper.contains(<span className="token attr-value">test</span>)).toEqual(true);
    });

    it("renders only value when value and data has been passed", () => {
        const wrapper = shallow(<Attribute value="test" data />);
        const spans = wrapper.find("span");

        expect(wrapper).toMatchSnapshot();
        expect(spans).toHaveLength(1);
        expect(wrapper.html()).not.toContain("data");
        expect(wrapper.contains(<span className="token attr-value">test</span>)).toEqual(true);
    });
});

describe("Utilities: property", () => {
    it("renders with value prop", () => {
        const wrapper = shallow(<Property value="test"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<code className="token property">test</code>)).toEqual(true);
    });
});

