import React from "react";
import { shallow } from "enzyme";

import Customers from "./index";

describe("Examples: Customers", () => {
    it("is defined", () => {
        expect(Customers).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Customers test />);

        expect(wrapper).toMatchSnapshot();
    });
});
