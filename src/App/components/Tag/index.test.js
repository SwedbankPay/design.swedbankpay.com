import React from "react";
import { shallow } from "enzyme";

import Tag from "./index";
import { expect } from "@jest/globals";

describe("Component: Tag", () => {
    it("is defined", () => {
        expect(Tag).toBeDefined();
    });

    it("renders with class tag and with icon button", () => {
        const wrapper = shallow(<Tag removable text="Tag"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(
            <span className="tag primary removable">
                Tag<button type="button" className="close-button"><i className="material-icons m-auto" aria-label="remove tag">close</i></button>
            </span>
        )).toBeTruthy();
    });

    it("renders code version of tag", () => {
        const wrapper = shallow(<Tag code text="Tag"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(
            <code className="tag code primary">Tag</code>
        )).toBeTruthy();
    });

    it("prop type string is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Tag/>);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });
});
