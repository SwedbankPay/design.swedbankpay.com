import React from "react";
import { shallow } from "enzyme";

import {
    CustomersIntroduction,
    CustomersAdditionalInformation,
    COOverview,
    CDOrderHistory,
    CDInquiries,
    CDSummaryCharts
} from "./index";

describe("Examples: Sidebar - Customers", () => {
    describe("CustomersIntroduction", () => {
        it("is defined", () => {
            expect(CustomersIntroduction).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CustomersIntroduction />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CustomersAdditionalInformation", () => {
        it("is defined", () => {
            expect(CustomersAdditionalInformation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CustomersAdditionalInformation />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("COOverview", () => {
        it("is defined", () => {
            expect(COOverview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<COOverview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CDOrderHistory", () => {
        it("is defined", () => {
            expect(CDOrderHistory).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CDOrderHistory test />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CDInquiries", () => {
        it("is defined", () => {
            expect(CDInquiries).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CDInquiries test />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CDSummaryCharts", () => {
        it("is defined", () => {
            expect(CDSummaryCharts).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CDSummaryCharts test />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
