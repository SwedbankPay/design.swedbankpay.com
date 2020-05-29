import React from "react";
import { shallow } from "enzyme";

import Examples from "./index";

describe("Examples: index", () => {
    it("is defined", () => {
        expect(Examples).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Examples />);

        expect(wrapper).toMatchSnapshot();
    });
});
