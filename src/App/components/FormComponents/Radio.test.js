import React from "react";
import { shallow } from "enzyme";

import Radio from "./Radio";

describe("Component: Radio - ", () => {
    it("is defined", () => {
        expect(Radio).toBeDefined();
    });

    it("renders without label", () => {
        const wrapper = shallow(<Radio />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="radio" />)).toEqual(true);
        expect(wrapper.contains(<label></label>)).toEqual(false);
    });

    it("renders with id and label", () => {
        const wrapper = shallow(<Radio id="test" label="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="radio" id="test" />)).toEqual(true);
        expect(wrapper.contains(<label htmlFor="test">test</label>)).toEqual(true);
    });

    it("renders with name", () => {
        const wrapper = shallow(<Radio name="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="radio" name="test" />)).toEqual(true);
    });

    it("renders disabled", () => {
        const wrapper = shallow(<Radio disabled />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="radio" disabled />)).toEqual(true);
    });

    it("renders checked", () => {
        const wrapper = shallow(<Radio checked />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="radio" defaultChecked />)).toEqual(true);
    });
});
