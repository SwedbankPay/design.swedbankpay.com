import React from "react";
import { shallow } from "enzyme";

import CustomersDetailedDialog from "./index";

describe("Examples: CustomersDetailedDialog", () => {
    const mockCustomer = {
        id: "ctest",
        firstName: "Sven",
        lastName: "Svensson",
        email: "sven.svensson@email.com",
        phone: "+47 *** ** ***",
        location: "Visby",
        status: "default"
    };

    it("is defined", () => {
        expect(CustomersDetailedDialog).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CustomersDetailedDialog customer={mockCustomer} />);

        expect(wrapper).toMatchSnapshot();
    });
});
