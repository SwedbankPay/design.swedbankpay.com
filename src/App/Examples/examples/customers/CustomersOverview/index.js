import React, { Component } from "react";
import PropTypes from "prop-types";

import PaginationComponent from "@components/Pagination";

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
            <div className="container">
                <div className="panel panel-brand">
                    <header>
                        <div className="row">
                            <div className="col-lg-4">
                                <h2 className="panel-title">Customers</h2>
                            </div>
                            <div className="col-lg-8">
                                <div className="input-group">{"\n"}
                                    <span className="input-group-addon">{"\n"}
                                        <i className="material-icons" aria-hidden="true">search</i>
                                    </span>{"\n"}
                                    <input ref={input => this.customerFilterField = input} value={this.state.customerFilter} onChange={e => this.updateFilter(e)} type="text" className="form-control" />{"\n"}
                                    <button type="button" onClick={() => this.resetFilter()} disabled={this.state.customerFilter.length === 0} className="btn btn-primary btn-outline">{"\n"}
                                        <i className="material-icons" aria-hidden="true">close</i>{"\n"}
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
                                {this.props.customersList.filter(
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
                                                <span className={`status status-${customer.status}`}>{this.props.statusText[customer.status]}</span>
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
            </div>
        );
    }
}

CustomersOverview.propTypes = {
    customersList: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    })).isRequired,
    statusText: PropTypes.exact({
        default: PropTypes.string.isRequired,
        success: PropTypes.string.isRequired,
        warning: PropTypes.string.isRequired,
        danger: PropTypes.string.isRequired
    }).isRequired,
    setCustomerIndex: PropTypes.func.isRequired
};

export default CustomersOverview;
