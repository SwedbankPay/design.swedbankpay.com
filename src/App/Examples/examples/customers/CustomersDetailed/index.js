import React, { Component } from "react";
import PropTypes from "prop-types";
import { ComponentPreview } from "@docutils";

import CustomersDetailedDialog from "./components/CustomersDetailedDialog/";

const { actionList, dialog, tabs } = window.dg;

class CustomersDetailed extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tabIndex: 0,
            tabScrollState: null
        };
    }

    componentDidUpdate () {
        actionList.init();
        dialog.init();
        tabs.init();
        tabs.setScrollState("customers-detailed-tabs", this.state.tabScrollState);
    }

    componentDidMount () {
        dialog.init();
        tabs.init();
    }

    selectTab (e, i) {
        e.preventDefault();

        const tabScroll = document.getElementById("customers-detailed-tabs-ul");
        const scrollStart = tabScroll.scrollLeft;
        const scrollTotalAmount = (e.target.offsetLeft - (tabScroll.offsetWidth / 2) + (e.target.offsetWidth / 2)) - scrollStart;

        this.setState({
            tabIndex: i,
            tabScrollState: {
                scrollTotalAmount,
                scrollStart
            }
        });
    }

    render () {
        return (
            <>
                <h2 id="customers-detailed">Customers detailed</h2>
                <ComponentPreview language="html" showCasePanel codeFigure>
                    <div className="container">
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
                                                            <i className="material-icons" aria-hidden="true">account_circle</i>
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
                                                            <i className="material-icons" aria-hidden="true">account_circle</i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>{`${this.props.customer.firstName} ${this.props.customer.lastName}`}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-auto">
                                                <div id="customer-detailed-action-list" className="action-list anchor-top-right">
                                                    <button id="actionListToggle" type="button" className="action-toggle" aria-haspopup="true">
                                                        <i className="material-icons" aria-hidden="true">more_vert</i>
                                                    </button>
                                                    <div className="action-menu" aria-labelledby="actionListToggle">
                                                        <a href="#" onClick={e => e.preventDefault()}><i className="material-icons" aria-hidden="true">edit</i>Edit</a>
                                                        <a href="#" onClick={e => e.preventDefault()} data-dialog-open="customers-detailed-dialog"><i className="material-icons" aria-hidden="true">delete</i>Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <CustomersDetailedDialog customer={this.props.customer} />
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
                                        <span className={`status status-${this.props.customer.status}`}>{this.props.statusText[this.props.customer.status]}</span>
                                    </div>
                                </div>
                            </header>
                            <div className="panel-body">
                                <div id="customers-detailed-tabs" className="tabs tabs-scroll">{"\n"}
                                    <ul id="customers-detailed-tabs-ul">
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
                    </div>
                </ComponentPreview>
            </>
        );
    }

}

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

export default CustomersDetailed;
