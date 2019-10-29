import React, { Component } from "react";
import PropTypes from "prop-types";
import { DocContainer, ComponentPreview } from "@docutils";

import PaginationComponent from "@components/Pagination";
import MediaObjectComponent from "@components/MediaObject";
import ActionListComponent from "@components/ActionList";
import { Datepicker as DatepickerComponent, Togglebox, Checkbox } from "@components/FormComponents";
import StepsComponent from "@components/Steps";
import ActionLinkComponent from "@components/ActionLink";

import {
    customersList,
    statusText,
    customerDetailedActionList,
    customersDetailedOrders,
    customersDetailedOrdersSteps,
    customersDetailedInquiriesLatestInquiry,
    customersDetailedInquiriesPreviousInquiries
} from "./constants";

const { actionList, datepicker, tabs } = window.dg;

class CustomersOverview extends Component {
    constructor (props) {
        super(props);
        this.state = {
            customerFilter: ""
        };
    }

    componentDidUpdate () {
        this.customerFilterField.focus();
    }

    updateFilter (e) {
        this.setState({
            customerFilter: e.target.value.toLowerCase()
        });
    }

    resetFilter () {
        this.setState({
            customerFilter: ""
        });
    }

    render () {
        return (
            <>
                <h2 id="customers-overview">Customers overview</h2>
                <ComponentPreview language="html" showCasePanel codeFigure>
                    <div className="panel panel-brand">
                        <header>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h2 className="panel-title">Customers</h2>
                                </div>
                                <div className="col-lg-8">
                                    <div className="input-group">{"\n"}
                                        <span className="input-group-addon">{"\n"}
                                            <i className="material-icons">search</i>
                                        </span>{"\n"}
                                        <input ref={input => this.customerFilterField = input} value={this.state.customerFilter} onChange={e => this.updateFilter(e)} type="text" className="form-control" />{"\n"}
                                        <button type="button" onClick={() => this.resetFilter()} className="btn btn-executive">{"\n"}
                                            <i className="material-icons">close</i>{"\n"}
                                        </button>{"\n"}
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="panel-table">
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col" className="d-none d-sm-table-cell">First name</th>
                                        <th scope="col" className="d-none d-sm-table-cell">Last name</th>
                                        <th scope="col">Location</th>
                                        <th scope="col" className="d-none d-lg-table-cell">Delivery status</th>
                                        <th scope="col" className="d-lg-none" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {customersList.filter(
                                        customer => this.state.customerFilter === "" ||
                                        customer.firstName.toLowerCase().includes(this.state.customerFilter) ||
                                        customer.lastName.toLowerCase().includes(this.state.customerFilter) ||
                                        customer.location.toLowerCase().includes(this.state.customerFilter)
                                    )
                                        .map((customer, index) => (
                                            <tr key={customer.id} onClick={() => this.props.setCustomerIndex(index)}>
                                                <th scope="row">{customer.id}</th>
                                                <td className="d-none d-sm-table-cell">{customer.firstName}</td>
                                                <td className="d-none d-sm-table-cell">{customer.lastName}</td>
                                                <td>{customer.location}</td>
                                                <td className="d-none d-lg-table-cell">
                                                    <span className={`status status-${customer.status}`}>{statusText[customer.status]}</span>
                                                </td>
                                                <td className="d-lg-none">
                                                    <span className={`status status-${customer.status} pl-0`} />
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <PaginationComponent text="1 of 123" arrows farArrows />
                    </div>
                </ComponentPreview>
            </>
        );
    }
}

class CustomersDetailed extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tabIndex: 3
        };
    }

    componentDidUpdate () {
        (this.state.tabIndex === 0 || this.state.tabIndex === 1) && datepicker.init();

        actionList.init();
        tabs.init();
    }

    componentDidMount () {
        (this.state.tabIndex === 0 || this.state.tabIndex === 1) && datepicker.init();
        actionList.init();
        tabs.init();
    }

    selectTab (e, i) {
        e.preventDefault();
        this.setState({
            tabIndex: i
        });
    }

    render () {

        return (
            <>
                <h2 id="customers-detailed">Customers detailed</h2>
                <ComponentPreview language="html" showCasePanel codeFigure>
                    <div className="panel panel-brand">
                        <header>
                            <ol className="breadcrumb">
                                <li><a href="#">Customers</a></li>
                                <li><span>{this.props.customer.id}</span></li>
                            </ol>
                            <div className="row">
                                <div className="col-auto mr-auto">
                                    <div className="row">
                                        <div className="col-xs-auto">
                                            <div className="d-none d-sm-block">
                                                <div className="media media-sm">
                                                    <div className="media-img">
                                                        <i className="material-icons">account_circle</i>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{`${this.props.customer.firstName} ${this.props.customer.lastName}`}</h4>
                                                        <p>{`${this.props.customer.email} ${this.props.customer.phone}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-block d-sm-none">
                                                <div className="media media-sm">
                                                    <div className="media-img">
                                                        <i className="material-icons">account_circle</i>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{`${this.props.customer.firstName} ${this.props.customer.lastName}`}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-auto">
                                            <ActionListComponent classNames="anchor-top-right" items={customerDetailedActionList} />
                                        </div>
                                    </div>
                                    <div className="row d-block d-sm-none">
                                        <div className="col-sm-auto pl-0">
                                            <p className="mb-0 text-truncate">{this.props.customer.email}</p>
                                        </div>
                                        <div className="col-sm-auto pl-0">
                                            <p>{this.props.customer.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto pl-0">
                                    <h4>Delivery status:</h4>
                                    <span className={`status status-${this.props.customer.status}`}>{statusText[this.props.customer.status]}</span>
                                </div>
                            </div>
                        </header>
                        <div className="panel-body">
                            <div className="tabs tabs-horizontal-lg">{"\n"}
                                <i className="material-icons">keyboard_arrow_right</i>
                                <ul>
                                    {this.props.customersDetailedTabs.map((tab, i) => (
                                        <li key={`tab-item-${i}`} className={this.state.tabIndex === i ? "active" : null}>{"\n"}
                                            <a href="#" onClick={e => this.selectTab(e, i)}>{tab.name}</a>{"\n"}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {this.props.customersDetailedTabs[this.state.tabIndex].component}
                        </div>
                    </div>
                </ComponentPreview>
            </>
        );
    }

}

const CustomersDetailedDatePickerGroup = () => (
    <div className="row">
        <div className="col-sm-6">
            <DatepickerComponent
                value="2000-01-01"
                label="From:"
                prefixType="icon"
                prefixValue="event"
                fulldate
                id="init-value-datepicker"
            />
        </div>
        <div className="col-sm-6">
            <DatepickerComponent
                value="2020-01-01"
                label="To:"
                prefixType="icon"
                prefixValue="event"
                fulldate
                id="init-value-datepicker"
            />
        </div>
    </div>
);

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
            <div className="col-md-6">
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

const CustomersDetailedInquiryCard = ({ inquiry, size }) => (
    <div className="card card-secondary">
        <header className="card-header">
            <h4>{`Inquiry: ${inquiry.id} | ${inquiry.date}`}</h4>
        </header>
        <div className="card-body">
            <div className="d-none d-sm-block">
                <div className="d-flex justify-content-around">
                    <MediaObjectComponent
                        size={size}
                        icon="message"
                        heading={inquiry.numMessages}
                        text="messages"
                    />

                    <MediaObjectComponent
                        size={size}
                        icon={inquiry.resolved ? "check_circle" : "feedback"}
                        heading={inquiry.resolved ? "Resolved" : "Unresolved"}

                    />
                </div>
            </div>
            <div className="d-sm-none">
                <div className="d-flex flex-column">
                    <MediaObjectComponent
                        size="sm"
                        icon="message"
                        heading={inquiry.numMessages}
                        text="messages"
                    />

                    <MediaObjectComponent
                        size="sm"
                        icon={inquiry.resolved ? "check_circle" : "feedback"}
                        heading={inquiry.resolved ? "Resolved" : "Unresolved"}

                    />
                </div>
            </div>
            <h5>Initial message:</h5>
            <p>{inquiry.message}</p>
        </div>
        <div className="card-footer">
            <div className="footer-link"><a href="#">See inquiry thread</a></div>
        </div>
    </div>
);

const CustomersDetailedInquiries = ({ customersDetailedInquiriesLatestInquiry, customersDetailedInquiriesPreviousInquiries }) => (
    <>
        <h3>Latest inquiry</h3>
        <CustomersDetailedInquiryCard inquiry={customersDetailedInquiriesLatestInquiry} size="lg" />

        <h3>Previous inquiries</h3>
        <CustomersDetailedDatePickerGroup />
        <div className="row">
            {customersDetailedInquiriesPreviousInquiries.map(inquiry => (
                <div key={inquiry.id} className="col-lg-6 d-flex">
                    <CustomersDetailedInquiryCard inquiry={inquiry} size="sm" />
                </div>
            ))}
        </div>
    </>
);

const CustomersDetailedSettings = () => (
    <>
        <h3>Notifications</h3>
        <div className="row justify-content-around mt-3">
            <div className="col-lg-auto">
                <Togglebox id="customers-detailed-settings-toggle-1" checked label="Delivery status changes" />
            </div>
            <div className="col-lg-auto">
                <Togglebox id="customers-detailed-settings-toggle-2" label="New inquiry messages" />
            </div>
        </div>
        <h3>Newsletter and information</h3>
        <div className="row">
            {[...Array(7).keys()].map(item => (
                <div key={item} className="col-lg-3 col-md-4 col-sm-6">
                    <Checkbox id={`customers-detailed-settings-checkbox-${item}`} checked label={`Subscription #${item + 1}`} />
                </div>
            ))}
        </div>

        <h3></h3>

    </>
);

class Customers extends Component {
    constructor (props) {
        super(props);
        this.state = {
            customerIndex: 0
        };
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
                        customersDetailedInquiriesLatestInquiry={customersDetailedInquiriesLatestInquiry}
                        customersDetailedInquiriesPreviousInquiries={customersDetailedInquiriesPreviousInquiries}
                    />
            },
            {
                name: "Summary charts",
                component: <React.Fragment />
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
                <CustomersOverview setCustomerIndex={customerIndex => this.setCustomerIndex(customerIndex)}/>
                <CustomersDetailed customer={customersList[this.state.customerIndex]} customersDetailedTabs={customersDetailedTabs} />
            </DocContainer>
        );
    }
}

Customers.propTypes = {
    test: PropTypes.bool
};

CustomersOverview.propTypes = {
    setCustomerIndex: PropTypes.func.isRequired
};

CustomersDetailed.propTypes = {
    customer: PropTypes.exact({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    }).isRequired,
    customersDetailedTabs: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        component: PropTypes.object.isRequired
    })).isRequired
};

CustomersDetailedOrders.propTypes = {
    customersDetailedOrdersSteps: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        ongoing: PropTypes.bool,
        completed: PropTypes.bool,
        selected: PropTypes.bool
    })).isRequired,
    customersDetailedOrders: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Customers;

export {
    CustomersOverview,
    CustomersDetailed,
    CustomersDetailedDatePickerGroup,
    CustomersDetailedOrders,
    CustomersDetailedInquiries,
    CustomersDetailedInquiryCard
};
