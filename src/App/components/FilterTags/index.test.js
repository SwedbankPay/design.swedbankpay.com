import React from "react";
import { shallow } from "enzyme";

import FilterTags from "./index";
import { expect } from "@jest/globals";

describe("Component: FilterTags", () => {
    it("is defined", () => {
        expect(FilterTags).toBeDefined();
    });

    it("renders with class filter-tag", () => {
        const wrapper = shallow(<FilterTags filterText="Tag"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(
            <span className="filter-tag">
            Tag
                <i className="material-icons close-tag" aria-hidden="true">close</i>
            </span>)).toBeTruthy();
    });

    it("prop type is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<FilterTags/>);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });
});
