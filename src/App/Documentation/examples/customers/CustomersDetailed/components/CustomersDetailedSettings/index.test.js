import React from "react";
import { shallow } from "enzyme";

import CustomersDetailedSettings from "./index";

describe("Examples: CustomerDetailedSettings", () => {
    it("is defined", () => {
        expect(CustomersDetailedSettings).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CustomersDetailedSettings />);

        expect(wrapper).toMatchSnapshot();
    });
});
