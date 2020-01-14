import React from "react";
import { shallow } from "enzyme";

import CustomersDetailedOrders from "./index";

describe("Examples: CustomersDetailedOrders", () => {
    const mockSteps = [
        {
            title: "Step one",
            completed: true
        },
        {
            title: "Step two",
            ongoing: true,
            selected: true
        },
        {
            title: "Step three"
        }
    ];
    const mockOrders = [1000, 1001, 1002, 1003];

    it("is defined", () => {
        expect(CustomersDetailedOrders).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CustomersDetailedOrders customersDetailedOrdersSteps={mockSteps} customersDetailedOrders={mockOrders} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders correct amount of orders", () => {
        const wrapper = shallow(<CustomersDetailedOrders customersDetailedOrdersSteps={mockSteps} customersDetailedOrders={mockOrders} />);

        expect(wrapper.find(".slab.border.slab-elevated").length).toBe(mockOrders.length + 1); // Add one because of the presence of latest order.
    });
});
