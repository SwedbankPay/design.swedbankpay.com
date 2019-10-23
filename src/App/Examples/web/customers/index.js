import React, { Component, useEffect } from "react";
import { DocContainer, ComponentPreview } from "@docutils";

import PaginationComponent from "@components/Pagination";
import MediaObjectComponent from "@components/MediaObject";
import ActionListComponent from "@components/ActionList";
import { Datepicker as DatepickerComponent } from "@components/FormComponents";
import StepsComponent from "@components/Steps";
import ActionLinkComponent from "@components/ActionLink";

const { actionList, datepicker, tabs } = window.dg;

const customersList = [
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
    },
    {
        id: "c4",
        firstName: "Kari",
        lastName: "Nordmann",
        email: "kari.nordmann@email.com",
        phone: "+47 *** ** ***",
        location: "Bergen",
        status: "warning"
    },
    {
        id: "c5",
        firstName: "Holger",
        lastName: "Danske",
        email: "holger.danske@email.com",
        phone: "+47 *** ** ***",
        location: "Copenhagen",
        status: "danger"
    },
    {
        id: "c6",
        firstName: "Matti",
        lastName: "Meikäläinen",
        email: "matti.meikalainen@email.com",
        phone: "+47 *** ** ***",
        location: "Lahti",
        status: "success"
    },
    {
        id: "c7",
        firstName: "Helma",
        lastName: "Egilsdóttir",
        email: "helma.egilsdottir@email.com",
        phone: "+47 *** ** ***",
        location: "Reykjavík",
        status: "default"
    }
];

const statusText = {
    default: "New",
    success: "Delivered",
    warning: "Late",
    danger: "Missing"
};

const customersDetailedOrders = [...Array(15)].map(() => (Math.floor(Math.random() * 1000)) + 1000); // Generates 15 random orders with value between 1000 and 2000 to display
// Generates 15 previous inquiries to display as an example
const customersDetailedPreviousInquiries = [...Array(15).keys()].map(i => ({
    id: `InquiryID#${i}`,
    date: `${i + 10}.${Math.floor(10 - i * 0.4) < 10 ? "0" : ""}${Math.floor(10 - i * 0.4)}.20${19 - i < 10 ? "0" : ""}${19 - i}`, // Uses simple formulas to generate different dates, to get varied dates
    numMessages: `${Math.floor(Math.random() * 20) + 3}`,
    resolved: Math.random() > 0.1,
    message: `This is the initial message of inquiry InquiryID#${i}. This message was sent ${i + 10}.0${Math.floor(10 - i * 0.4)}.20${19 - i}`
}));

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
            tabIndex: 1
        };
    }

    componentDidUpdate () {
        (this.state.tabIndex === 0 || this.state.tabIndex === 1) && datepicker.init();

        actionList.init();
        tabs.init();
    }

    componentDidMount () {
        actionList.init();
        datepicker.init();
        tabs.init();
    }

    selectTab (e, i) {
        e.preventDefault();
        this.setState({
            tabIndex: i
        });
    }

    render () {
        const actionListCustomerDetailed = [
            {
                name: "Edit",
                icon: "edit"
            },
            {
                name: "Delete",
                icon: "delete"
            }
        ];

        const tabsCustomerDetailed = [
            {
                name: "Order history",
                component: <CustomersDetailedOrders />
            },
            {
                name: "Customer inquiries",
                component: <CustomersDetailedInquiries />
            },
            {
                name: "Summary charts",
                component: null
            },
            {
                name: "Settings",
                component: null
            }
        ];

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
                                                <MediaObjectComponent
                                                    size="lg"
                                                    icon="account_circle"
                                                    heading={`${this.props.customer.firstName} ${this.props.customer.lastName}`}
                                                    text={`${this.props.customer.email} ${this.props.customer.phone}`}
                                                />
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
                                            <ActionListComponent classNames="anchor-top-right" items={actionListCustomerDetailed} />
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
                                    {tabsCustomerDetailed.map((tab, i) => (
                                        <li key={`tab-item-${tab.name}-${i}`} className={this.state.tabIndex === i ? "active" : null}>{"\n"}
                                            <a href="#" onClick={e => this.selectTab(e, i)}>{tab.name}</a>{"\n"}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {tabsCustomerDetailed[this.state.tabIndex].component}
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

const CustomersDetailedOrders = () => {

    const steps = [
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
        },
        {
            title: "Step four"
        }
    ];

    return (
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
                    <StepsComponent steps={steps} vertical />
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
};

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

const CustomersDetailedInquiries = () => {

    const latestInquiry = {
        id: "InquiryID#456",
        date: "24.10.2019",
        numMessages: "8",
        resolved: false,
        message: "This is the initial message of the inquiry. The initial message is always sent by the customer. \
        It starts an inquiry thread in which the support team can respond to and stay in contact with the customer. \
        The inquiry is marked as unresolved until the support staff marks it as resolved."
    };

    return (
        <>
            <h3>Latest inquiry</h3>
            <CustomersDetailedInquiryCard inquiry={latestInquiry} size="lg" />

            <h3>Previous inquiries</h3>
            <CustomersDetailedDatePickerGroup />
            <div className="row">
                {customersDetailedPreviousInquiries.map(inquiry => (
                    <div key={inquiry.id} className="col-lg-6 d-flex">
                        <CustomersDetailedInquiryCard inquiry={inquiry} size="sm" />
                    </div>
                ))}
            </div>
        </>
    );
};

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

        return (
            <DocContainer>
                <CustomersOverview setCustomerIndex={customerIndex => this.setCustomerIndex(customerIndex)}/>
                <CustomersDetailed customer={customersList[this.state.customerIndex]} />
            </DocContainer>
        );
    }
}

export default Customers;

export { CustomersOverview, CustomersDetailed };
