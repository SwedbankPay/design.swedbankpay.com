import React from "react";
import { shallow } from "enzyme";

import Resources from "./index";

describe("Resources: index", () => {
    it("is defined", () => {
        expect(Resources).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Resources />);

        expect(wrapper).toMatchSnapshot();
    });
});
