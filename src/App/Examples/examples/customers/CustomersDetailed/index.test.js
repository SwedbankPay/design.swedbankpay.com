import React from "react";
import { shallow } from "enzyme";

import CustomersDetailed from "./index";

import { dialog, tabs } from "@src/scripts/main";

describe("Examples: CustomersDetailed", () => {
    const mockCustomer = {
        id: "ctest",
        firstName: "Sven",
        lastName: "Svensson",
        email: "sven.svensson@email.com",
        phone: "+47 *** ** ***",
        location: "Visby",
        status: "default"
    };

    const mockTabs = [
        {
            name: "tab1",
            component: <React.Fragment />
        },
        {
            name: "tab2",
            component: <React.Fragment />
        }
    ];

    const mockActionList = [
        {
            name: "Item1",
            icon: "test"
        },
        {
            name: "Item2",
            icon: "test"
        }
    ];
    const mockStatusText = {
        default: "New",
        success: "Delivered",
        warning: "Late",
        danger: "Missing"
    };

    /*
        The Customers component calls dg.dialog.init() and dg.tabs.init(). Mocking the topbarscript
        to avoid a warning message.
    */
    dialog.init = jest.fn();
    tabs.init = jest.fn();

    it("is defined", () => {
        expect(CustomersDetailed).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CustomersDetailed customer={mockCustomer} customersDetailedTabs={mockTabs} customersDetailedActionList={mockActionList} statusText={mockStatusText}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("contains breadcrumb with correct customer id", () => {
        const wrapper = shallow(<CustomersDetailed customer={mockCustomer} customersDetailedTabs={mockTabs} customersDetailedActionList={mockActionList} statusText={mockStatusText}/>);
        const breadcrumb = wrapper.find(".breadcrumb");

        expect(breadcrumb.contains(<li><span>ctest</span></li>)).toEqual(true);
    });

    it("contains MediaObject with media-body with correct customer firstName, lastName, email and phone", () => {
        const wrapper = shallow(<CustomersDetailed customer={mockCustomer} customersDetailedTabs={mockTabs} customersDetailedActionList={mockActionList} statusText={mockStatusText}/>);
        const mediaBodyLg = wrapper.find(".d-none.d-sm-block").find(".media-body");
        const mediaBodySm = wrapper.find(".d-block.d-sm-none").find(".media-body");

        expect(mediaBodyLg.contains(<h4>Sven Svensson</h4>)).toEqual(true);
        expect(mediaBodyLg.contains(<p>sven.svensson@email.com +47 *** ** ***</p>)).toEqual(true);
        expect(mediaBodySm.contains(<h4>Sven Svensson</h4>)).toEqual(true);
        expect(mediaBodySm.contains(<p>sven.svensson@email.com +47 *** ** ***</p>)).toEqual(false);
    });

    it("contains status with correct status text and type", () => {
        const wrapper = shallow(<CustomersDetailed customer={mockCustomer} customersDetailedTabs={mockTabs} customersDetailedActionList={mockActionList} statusText={mockStatusText}/>);
        const status = wrapper.find(".status");

        expect(status.contains(<span className="status status-default">New</span>)).toEqual(true);
    });
});
