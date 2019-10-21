import React, { Component } from "react";
import { DocContainer, ComponentPreview } from "@docutils";

import PaginationComponent from "@components/Pagination";
import Button from "@components/Button";

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
        firstName: "Sara",
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
                                        .map(customer => (
                                            <tr key={customer.id} onClick={() => this.props.setCustomerId(customer.id)}>
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

const CustomersDetailed = () => (
    <>
        <h2 id="customers-detailed">Customers detailed</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            details
        </ComponentPreview>
    </>
);

class Customers extends Component {
    constructor (props) {
        super(props);
        this.state = {
            customerId: "c1"
        };
    }

    setCustomerId (customerId) {
        this.setState({
            customerId
        });
    }

    render () {

        return (
            <DocContainer>
                <CustomersOverview setCustomerId={customerId => this.setCustomerId(customerId)}/>
                <CustomersDetailed />
            </DocContainer>
        );
    }
}

export default Customers;
