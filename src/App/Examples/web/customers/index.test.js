import React from "react";
import { shallow } from "enzyme";

import Customers,
{ CustomersOverview,
    CustomersDetailed,
    CustomersDetailedDatePickerGroup,
    CustomersDetailedOrders,
    CustomersDetailedInquiries,
    CustomersDetailedInquiryCard,
    CustomersDetailedSettings,
    CustomersDetailedCharts } from "./index";

describe("Examples: Customers", () => {
    it("is defined", () => {
        expect(Customers).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Customers test />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("CustomersOverview", () => {
        it("is defined", () => {
            expect(CustomersOverview).toBeDefined();
        });

        it("renders", () => {
            const mockSetCustomerIndex = jest.fn();
            const wrapper = shallow(<CustomersOverview setCustomerIndex={mockSetCustomerIndex} />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CustomersDetailed", () => {
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

        it("is defined", () => {
            expect(CustomersDetailed).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CustomersDetailed customer={mockCustomer} customersDetailedTabs={mockTabs} customersDetailedActionList={mockActionList} />);

            expect(wrapper).toMatchSnapshot();
        });

        it("contains breadcrumb with correct customer id", () => {
            const wrapper = shallow(<CustomersDetailed customer={mockCustomer} customersDetailedTabs={mockTabs} customersDetailedActionList={mockActionList} />);
            const breadcrumb = wrapper.find(".breadcrumb");

            expect(breadcrumb.contains(<li><span>ctest</span></li>)).toEqual(true);
        });

        it("contains MediaObject with media-body with correct customer firstName, lastName, email and phone", () => {
            const wrapper = shallow(<CustomersDetailed customer={mockCustomer} customersDetailedTabs={mockTabs} customersDetailedActionList={mockActionList} />);
            const mediaBodyLg = wrapper.find(".d-none.d-sm-block").find(".media-body");
            const mediaBodySm = wrapper.find(".d-block.d-sm-none").find(".media-body");

            expect(mediaBodyLg.contains(<h4>Sven Svensson</h4>)).toEqual(true);
            expect(mediaBodyLg.contains(<p>sven.svensson@email.com +47 *** ** ***</p>)).toEqual(true);
            expect(mediaBodySm.contains(<h4>Sven Svensson</h4>)).toEqual(true);
            expect(mediaBodySm.contains(<p>sven.svensson@email.com +47 *** ** ***</p>)).toEqual(false);
        });

        it("contains status with correct status text and type", () => {
            const wrapper = shallow(<CustomersDetailed customer={mockCustomer} customersDetailedTabs={mockTabs} customersDetailedActionList={mockActionList} />);
            const status = wrapper.find(".status");

            expect(status.contains(<span className="status status-default">New</span>)).toEqual(true);
        });
    });

    describe("CustomersDetailedDatePickerGroup", () => {
        it("is defined", () => {
            expect(CustomersDetailedDatePickerGroup).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CustomersDetailedDatePickerGroup />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CustomersDetailedOrders", () => {
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

    describe("CustomersDetailedInquiries", () => {
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

    describe("CustomersDetailedInquiryCard", () => {
        const mockInquiry = {
            id: "InquiryID#000",
            date: "01.01.2019",
            numMessages: "10",
            resolved: false,
            message: "This is the initial message of the inquiry."
        };

        it("is defined", () => {
            expect(CustomersDetailedInquiryCard).toBeDefined();
        });

        it("renders", () => {
            const mockSize = "lg";
            const wrapper = shallow(<CustomersDetailedInquiryCard inquiry={mockInquiry} size={mockSize} />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CustomerDetailedSettings", () => {
        it("is defined", () => {
            expect(CustomersDetailedSettings).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CustomersDetailedSettings />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CustomersDetailedCharts", () => {
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
});
