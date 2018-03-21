import React from "react";
import { shallow } from "enzyme";

import Forms from "./index";

describe("Documentation: Forms", () => {
    it("is defined", () => {
        expect(Forms).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Forms />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
