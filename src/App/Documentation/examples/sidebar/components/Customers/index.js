import React from "react";

import CustomersDetailedOrders from "../../../customers/CustomersDetailed/components/CustomersDetailedOrders";
import CustomersDetailedInquiries from "../../../customers/CustomersDetailed/components/CustomersDetailedInquiries";
import CustomersDetailedCharts from "../../../customers/CustomersDetailed/components/CustomersDetailedCharts";
import CustomersOverview from "../../../customers/CustomersOverview";

import {
    customersList,
    statusText,
    customersDetailedOrders,
    customersDetailedOrdersSteps,
    customersDetailedLatestInquiry,
    customersDetailedPreviousInquiries
} from "../../../customers/constants";

const createNumArray = (length, baseNum, addNum) => (
    [...Array(length)].map(() => (
        Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) +
        Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) + baseNum)
    ) // The multiple Math.floor(Math.random) is there to achieve a lower variance
);

const CustomersIntroduction = () => (
    <>
        <h2 id="customers-introduction">Introduction</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et mattis massa. Sed et gravida mi.
            Aliquam lobortis ligula nulla, vel consequat ligula auctor et. Vivamus placerat, odio et varius efficitur,
            neque leo condimentum mi, sed iaculis nisi arcu sit amet dui. Sed vehicula leo in purus lacinia, id auctor nulla scelerisque.
            Sed egestas sapien non enim pharetra sodales. Quisque a erat accumsan ligula efficitur vulputate blandit sed lorem. Nullam condimentum ultricies metus,
            et volutpat lacus tempor id. In tortor ante, interdum non convallis in, luctus non neque. Pellentesque in mauris enim.
        </p>
    </>
);

const CustomersAdditionalInformation = () => (
    <>
        <h2 id="customers-additional-information">Additional information</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et mattis massa. Sed et gravida mi.
            Aliquam lobortis ligula nulla, vel consequat ligula auctor et. Vivamus placerat, odio et varius efficitur,
            neque leo condimentum mi, sed iaculis nisi arcu sit amet dui. Sed vehicula leo in purus lacinia, id auctor nulla scelerisque.
            Sed egestas sapien non enim pharetra sodales. Quisque a erat accumsan ligula efficitur vulputate blandit sed lorem. Nullam condimentum ultricies metus,
            et volutpat lacus tempor id. In tortor ante, interdum non convallis in, luctus non neque. Pellentesque in mauris enim.
        </p>
    </>
);

const COOverview = () => (
    <>
        <CustomersIntroduction />
        <h2 id="customers-overview">Customers overview</h2>
        <CustomersOverview
            setCustomerIndex={customerIndex => customerIndex}
            customersList={customersList}
            statusText={statusText}
        />
        <CustomersAdditionalInformation />
    </>
);

const CDOrderHistory = () => (
    <>
        <CustomersIntroduction />
        <h2 id="customers-order-history">Customers order history</h2>
        <CustomersDetailedOrders
            customersDetailedOrdersSteps={customersDetailedOrdersSteps}
            customersDetailedOrders={customersDetailedOrders}
        />
        <CustomersAdditionalInformation />
    </>
);

const CDInquiries = () => (
    <>
        <CustomersIntroduction />
        <h2 id="customers-inquiries">Customers inquiries</h2>
        <CustomersDetailedInquiries
            customersDetailedLatestInquiry={customersDetailedLatestInquiry}
            customersDetailedPreviousInquiries={customersDetailedPreviousInquiries}
        />
        <CustomersAdditionalInformation />
    </>
);

const CDSummaryCharts = () => (
    <>
        <CustomersIntroduction />
        <h2 id="customers-summary-charts">Customers summary charts</h2>
        <CustomersDetailedCharts
            customerIdName={`${customersList[0].id} ${customersList[0].firstName} ${customersList[0].lastName}`}
            customerOrders={[...customersDetailedOrders, 1994]}
            customerInquiries={[...customersDetailedPreviousInquiries, customersDetailedLatestInquiry]}
            createNumArray={createNumArray}
        />
        <CustomersAdditionalInformation />
    </>
);

export {
    CustomersIntroduction,
    CustomersAdditionalInformation,
    COOverview,
    CDOrderHistory,
    CDInquiries,
    CDSummaryCharts
};
