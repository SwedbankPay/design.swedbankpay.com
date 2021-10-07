import React from "react";
import { shallow, mount } from "enzyme";

import Pagination from "./index";

describe("Component: Pagination -", () => {
    it("is defined", () => {
        expect(Pagination).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Pagination />);

        expect(wrapper).toMatchSnapshot();
    });

    it("prop type is enum and requires 'example' or 'simple' and produces an error when neither is provided", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Pagination type="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("prop type is enum and requires 'example' or 'simple' and does not produce an error when either is provided", () => {
        console.error = jest.fn();

        const wrapper = shallow(
            <div>
                <Pagination type="example" />
                <Pagination type="simple" />
            </div>
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).not.toHaveBeenCalled();
    });

    it("renders list items when prop items is provided", () => {
        const items = [
            /* eslint-disable object-property-newline */
            { name: "test#1", href: "#", active: false },
            { name: "test#2", href: "#", active: false }
            /* eslint-enable object-property-newline */
        ];

        const wrapper = shallow(<Pagination items={items} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<a href="#" aria-label="Go to page test#1">test#1</a>)).toEqual(true);
    });

    it("renders arrows when prop arrows is provided", () => {
        const wrapper = mount(<Pagination arrows />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("arrow-back");
        expect(wrapper.html()).toContain("arrow-forward");
    });
});
