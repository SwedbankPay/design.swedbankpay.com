import React from "react";
import { shallow } from "enzyme";

import Steps from "./index";

describe("Component: Steps", () => {
    it("is defined", () => {
        expect(Steps).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Steps />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("steps");
    });
});
