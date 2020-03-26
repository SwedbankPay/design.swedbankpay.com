import React from "react";
import PropTypes from "prop-types";

import CustomersDetailedDatePickerGroup from "../CustomersDetailedDatePickerGroup";
import StepsComponent from "@components/Stepper";
import ActionLinkComponent from "@components/ActionLink";

const CustomersDetailedOrders = ({ customersDetailedOrdersSteps, customersDetailedOrders }) => (
    <>
        <h3>Latest order</h3>
        <div className="row">
            <div className="col-md-6">
                <div className="slab border slab-elevated">
                    <h5>Order: OrderID#123456</h5>
                    <p>Price: £ 1994</p>
                    <p>Date: 22.10.2019</p>
                    <p>Product ID: ProductID#321</p>
                    <p>Product name: Product name ABC</p>
                    <p>Addtional information: Description of the product and/or additional comments from the customer with regards to the order or product.</p>
                    <ActionLinkComponent linkText="Edit order" smallText="OrderID#123456" multiline={true} />
                </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
                <h5>Detailed internal status:</h5>
                <StepsComponent steps={customersDetailedOrdersSteps} vertical />
            </div>
        </div>

        <h3>Previous orders</h3>
        <CustomersDetailedDatePickerGroup />
        {customersDetailedOrders.map((order, i) => (
            <div key={i} className="slab border slab-elevated">
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <div className="flex-column">
                            <p className="font-weight-bold">
                                {`OrderID#${i}: `}
                            </p>
                            <p>
                                {`ProductID#${i * 5} Product name XYZ${i}`}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-weight-bold text-nowrap">£ {order}</p>
                    </div>
                </div>
                <ActionLinkComponent linkText="Edit order" smallText={`OrderID#${i}:`} multiline={true} />
            </div>
        ))}
    </>
);

CustomersDetailedOrders.propTypes = {
    customersDetailedOrdersSteps: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        ongoing: PropTypes.bool,
        completed: PropTypes.bool,
        selected: PropTypes.bool
    })).isRequired,
    customersDetailedOrders: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default CustomersDetailedOrders;
