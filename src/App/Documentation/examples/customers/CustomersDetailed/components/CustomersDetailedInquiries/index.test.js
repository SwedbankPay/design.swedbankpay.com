import React from "react";
import { shallow } from "enzyme";

import CustomersDetailedInquiries, { CustomersDetailedInquiryCard } from "./index";

describe("Examples: CustomersDetailedInquiries", () => {
    const mockLatestInquiry = {
        id: "InquiryID#000",
        date: "01.01.2019",
        numMessages: 10,
        resolved: false,
        message: "This is the initial message of the inquiry."
    };
    const mockPreviousInquiries = [
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

    it("is defined", () => {
        expect(CustomersDetailedInquiries).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CustomersDetailedInquiries customersDetailedLatestInquiry={mockLatestInquiry} customersDetailedPreviousInquiries={mockPreviousInquiries} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders correct amount of inquiries", () => {
        const wrapper = shallow(<CustomersDetailedInquiries customersDetailedLatestInquiry={mockLatestInquiry} customersDetailedPreviousInquiries={mockPreviousInquiries} />);

        expect(wrapper.find(CustomersDetailedInquiryCard).length).toBe(mockPreviousInquiries.length + 1); // Add one because of the presence of latest inquiry.
    });
});
