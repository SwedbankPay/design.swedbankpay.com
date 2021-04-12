import React from "react";
import { shallow } from "enzyme";

import Checkbox from "./Checkbox";

describe("Component: Checkbox -", () => {
    it("is defined", () => {
        expect(Checkbox).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Checkbox />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
    });

    it("renders with the specified id but without label", () => {
        const wrapper = shallow(<Checkbox id="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.html()).toContain("id=\"test\"");
        expect(wrapper.html()).not.toContain("label");
    });

    it("renders with the specified id and label", () => {
        const wrapper = shallow(<Checkbox id="test" label="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.html()).toContain("id=\"test\"");
        expect(wrapper.html()).toContain("label");
        expect(wrapper.html()).toContain("for=\"test\"");
    });

    it("renders with the disabled attribute", () => {
        const wrapper = shallow(<Checkbox disabled />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.html()).toContain("disabled");
    });

    it("renders with the checked attribute", () => {
        const wrapper = shallow(<Checkbox checked />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.html()).toContain("checked");
    });
});
