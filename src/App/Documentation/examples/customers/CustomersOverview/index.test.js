import React from "react";
import { shallow } from "enzyme";

import CustomersOverview from "./index";

describe("Examples: CustomersOverview", () => {
    const mockSetCustomerIndex = jest.fn();
    const mockCustomersList = [
        {
            id: "c1",
            firstName: "Sven",
            lastName: "Svensson",
            email: "sven.svensson@email.com",
            phone: "+47 *** ** ***",
            location: "Visby",
            status: "default"
        },
        {
            id: "c2",
            firstName: "Anna",
            lastName: "Svensson",
            email: "anna.svensson@email.com",
            phone: "+47 *** ** ***",
            location: "Stockholm",
            status: "success"
        },
        {
            id: "c3",
            firstName: "Ola",
            lastName: "Nordmann",
            email: "ola.nordmann@email.com",
            phone: "+47 *** ** ***",
            location: "Oslo",
            status: "success"
        }
    ];
    const mockStatusText = {
        default: "New",
        success: "Delivered",
        warning: "Late",
        danger: "Missing"
    };

    it("is defined", () => {
        expect(CustomersOverview).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CustomersOverview setCustomerIndex={mockSetCustomerIndex} customersList={mockCustomersList} statusText={mockStatusText} />);

        expect(wrapper).toMatchSnapshot();
    });
});
