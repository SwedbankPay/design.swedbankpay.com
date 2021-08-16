import React, { Component } from "react";
import PropTypes from "prop-types";
import { DocContainer, ComponentPreview } from "@docutils";

import CustomersOverview from "./CustomersOverview";
import CustomersDetailed from "./CustomersDetailed";
import CustomersDetailedOrders from "./CustomersDetailed/components/CustomersDetailedOrders";
import CustomersDetailedInquiries from "./CustomersDetailed/components/CustomersDetailedInquiries";
import CustomersDetailedCharts from "./CustomersDetailed/components/CustomersDetailedCharts";
import CustomersDetailedSettings from "./CustomersDetailed/components/CustomersDetailedSettings";

import {
    customersList,
    statusText,
    customersDetailedActionList,
    customersDetailedOrders,
    customersDetailedOrdersSteps,
    customersDetailedLatestInquiry,
    customersDetailedPreviousInquiries
} from "./constants";

import { actionList } from "@src/scripts/main";

const createNumArray = (length, baseNum, addNum) => (
    [...Array(length)].map(() => (
        Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) +
        Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) + baseNum)
    ) // The multiple Math.floor(Math.random) is there to achieve a lower variance
);

class Customers extends Component {
    constructor (props) {
        super(props);
        this.state = {
            customerIndex: 0
        };
    }

    componentDidUpdate () {
        actionList.init();
    }

    componentDidMount () {
        actionList.init();
    }

    setCustomerIndex (customerIndex) {
        this.setState({
            customerIndex
        });

        const customersDetailedElement = document.getElementById("customers-detailed");

        window.scrollTo({
            top: customersDetailedElement.offsetTop + 100,
            left: 0,
            behavior: "instant"
        });
    }

    render () {

        // customersDetailedTabs is kept here because of the component value
        const customersDetailedTabs = [
            {
                name: "Order history",
                component: this.props.test ?
                    <React.Fragment />
                    :
                    <CustomersDetailedOrders
                        customersDetailedOrdersSteps={customersDetailedOrdersSteps}
                        customersDetailedOrders={customersDetailedOrders}
                    />
            },
            {
                name: "Customer inquiries",
                component: this.props.test ?
                    <React.Fragment />
                    :
                    <CustomersDetailedInquiries
                        customersDetailedLatestInquiry={customersDetailedLatestInquiry}
                        customersDetailedPreviousInquiries={customersDetailedPreviousInquiries}
                    />
            },
            {
                name: "Summary charts",
                component: this.props.test ?
                    <React.Fragment />
                    :
                    <CustomersDetailedCharts
                        customerIdName={`${customersList[this.state.customerIndex].id} ${customersList[this.state.customerIndex].firstName} ${customersList[this.state.customerIndex].lastName}`}
                        customerOrders={[...customersDetailedOrders, 1994]}
                        customerInquiries={[...customersDetailedPreviousInquiries, customersDetailedLatestInquiry]}
                        createNumArray={createNumArray}
                    />
            },
            {
                name: "Settings",
                component: this.props.test ?
                    <React.Fragment />
                    :
                    <CustomersDetailedSettings />
            }
        ];

        return (
            <DocContainer>
                <h2 id="customers-overview">Customers overview</h2>
                <ComponentPreview language="html" showCasePanel codeFigure>
                    <CustomersOverview
                        setCustomerIndex={customerIndex => this.setCustomerIndex(customerIndex)}
                        customersList={customersList}
                        statusText={statusText}
                    />
                </ComponentPreview>
                <CustomersDetailed
                    customer={customersList[this.state.customerIndex]}
                    customersDetailedTabs={customersDetailedTabs}
                    customersDetailedActionList={customersDetailedActionList}
                    statusText={statusText}
                />
            </DocContainer>
        );
    }
}

Customers.propTypes = {
    test: PropTypes.bool
};

export default Customers;
