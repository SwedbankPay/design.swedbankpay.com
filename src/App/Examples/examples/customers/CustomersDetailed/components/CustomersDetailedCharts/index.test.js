import React from "react";
import { shallow } from "enzyme";

import CustomersDetailedCharts from "./index";

describe("Examples: CustomersDetailedCharts", () => {
    const mockCustomerIdName = "id1 Customer Name";
    const mockCustomerOrders = [1000, 1001, 1002, 1003];
    const mockCustomerInquiries = [
        {
            id: "InquiryID#001",
            date: "01.01.2018",
            numMessages: 10,
            resolved: true,
            message: "This is the initial message of the inquiry."
        },
        {
            id: "InquiryID#002",
            date: "01.01.2017",
            numMessages: 10,
            resolved: true,
            message: "This is the initial message of the inquiry."
        },
        {
            id: "InquiryID#003",
            date: "01.01.2016",
            numMessages: 10,
            resolved: true,
            message: "This is the initial message of the inquiry."
        },
        {
            id: "InquiryID#004",
            date: "01.01.2015",
            numMessages: 10,
            resolved: true,
            message: "This is the initial message of the inquiry."
        }
    ];
    const mockCreateNumArray = (length, baseNum, addNum) => (
        [...Array(length)].map(() => baseNum + 5 * addNum)
    );

    it("is defined", () => {
        expect(CustomersDetailedCharts).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CustomersDetailedCharts
            customerIdName={mockCustomerIdName}
            customerOrders={mockCustomerOrders}
            customerInquiries={mockCustomerInquiries}
            createNumArray={mockCreateNumArray}
        />);

        expect(wrapper).toMatchSnapshot();
    });
});
