import React from "react";
import { shallow } from "enzyme";

import Checkbox from "./Checkbox";

describe("Component: Checkbox - ", () => {
    it("is defined", () => {
        expect(Checkbox).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Checkbox />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.contains(<input type="checkbox" />)).toEqual(true);
    });

    it("renders with the specified id but without label", () => {
        const wrapper = shallow(
            <Checkbox id="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="checkbox" id="test" />)).toEqual(true);
        expect(wrapper.contains(<label htmlFor="test"></label>)).toEqual(false);
    });

    it("renders with the specified id and label", () => {
        const wrapper = shallow(
            <Checkbox id="test" label="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="checkbox" id="test" />)).toEqual(true);
        expect(wrapper.contains(<label htmlFor="test">test</label>)).toEqual(true);
    });

    it("renders with the disabled attribute", () => {
        const wrapper = shallow(
            <Checkbox disabled={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="checkbox" disabled={true} />)).toEqual(true);
    });

    it("renders with the checked attribute", () => {
        const wrapper = shallow(
            <Checkbox checked={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="checkbox" defaultChecked={true} />)).toEqual(true);
    });
});
