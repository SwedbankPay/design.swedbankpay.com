import React from "react";
import { shallow } from "enzyme";

import StepBar, { DefaultItems } from "./index";

describe("Component: StepBar", () => {
    it("is defined", () => {
        expect(StepBar).toBeDefined();
    });

    it("renders with default items when no items is provided through items prop", () => {
        const wrapper = shallow(
            <StepBar />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("step-bar");
        expect(wrapper.contains(<DefaultItems />)).toEqual(true);
    });
});
