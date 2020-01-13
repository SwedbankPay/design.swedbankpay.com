import React from "react";
import { shallow } from "enzyme";

import CustomersDetailedDatePickerGroup from "./index";

describe("Examples: CustomersDetailedDatePickerGroup", () => {
    it("is defined", () => {
        expect(CustomersDetailedDatePickerGroup).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CustomersDetailedDatePickerGroup />);

        expect(wrapper).toMatchSnapshot();
    });
});
