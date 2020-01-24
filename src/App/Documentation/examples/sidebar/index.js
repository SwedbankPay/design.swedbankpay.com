import React, { Component, PureComponent } from "react";
import { DocContainer, ComponentPreview } from "@docutils";

import { SidebarNavList } from "./constants";
import InputGroupComponent from "@components/InputGroup";
import TopbarComponent from "@components/Topbar";

import CustomersDetailedSettings from "../customers/CustomersDetailed/components/CustomersDetailedSettings";
import CustomersDetailedOrders from "../customers/CustomersDetailed/components/CustomersDetailedOrders";
import CustomersDetailedInquiries from "../customers/CustomersDetailed/components/CustomersDetailedInquiries";
import CustomersDetailedCharts from "../customers/CustomersDetailed/components/CustomersDetailedCharts";
import CustomersOverview from "../customers/CustomersOverview";
import { FAQSearch, FAQList, FAQSheet, FAQCard } from "../faq";

import {
    customersList,
    statusText,
    customersDetailedOrders,
    customersDetailedOrdersSteps,
    customersDetailedLatestInquiry,
    customersDetailedPreviousInquiries
} from "../customers/constants";

const createNumArray = (length, baseNum, addNum) => (
    [...Array(length)].map(() => (
        Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) +
        Math.floor(Math.random() * addNum) + Math.floor(Math.random() * addNum) + baseNum)
    ) // The multiple Math.floor(Math.random) is there to achieve a lower variance
);

const { sidebar, sheet } = window.dg;

const IntroPage = () => (
    <>
        <h1 className="hero">Welcome to sidebar example!</h1>
        <p className="lead">This example showcases how the sidebar can be used.</p>
    </>
);

const FAQ = () => (
    <div className="container">
        <FAQSearch />
        <FAQList />
        <FAQSheet />
        <FAQCard />
    </div>
);

class SidebarComponent extends Component {
    render () {
        return (
            <div className="sidebar">
                <InputGroupComponent
                    id="sidebar-search"
                    type="text"
                    placeholder="Search..."
                    prefixType="icon"
                    prefixValue="search"
                /> {"\n\n"}
                <nav className="sidebar-nav">
                    {SidebarNavList.map((group, groupIndex) => (
                        <div key={groupIndex} className="nav-group">
                            <div className="nav-group-heading">
                                <i className="material-icons">arrow_right</i>
                                <span>
                                    {group.title}
                                </span>
                            </div>
                            {
                                group.lastParent ?
                                    <ul className="nav-ul">
                                        {group.subList.map((leaf, leafIndex) => (
                                            <li key={leafIndex} className="nav-leaf">
                                                <a href="" onClick={e => this.props.setActive(e, groupIndex, null, leafIndex, leaf.page)}>
                                                    {leaf.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    :
                                    <ul className="nav-ul">
                                        {group.subList.map((sub, subIndex) => (
                                            <li key={subIndex} className="nav-subgroup">
                                                <div className="nav-subgroup-heading">
                                                    <i className="material-icons">arrow_right</i>
                                                    <span>
                                                        {sub.title}
                                                    </span>
                                                </div>
                                                <ul className="nav-ul">
                                                    {sub.subList.map((leaf, leafIndex) => (
                                                        <li key={leafIndex} className="nav-leaf">
                                                            <a href="" onClick={e => this.props.setActive(e, groupIndex, subIndex, leafIndex, leaf.page)}>
                                                                {leaf.title}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                            }
                        </ div>
                    ))}
                </nav>
            </div>
        );
    }
}

class Sidebar extends PureComponent {

    constructor (props) {
        super(props);

        this.state = {
            activePage: "IntroPage",
            group: 0,
            subGroup: null,
            leaf: 0,
            customerIndex: 0
        };

        this.setActive = this.setActive.bind(this);
    }

    setActive (e, group, subGroup, leaf, activePage) {
        e.preventDefault();
        this.setState({
            activePage,
            group,
            subGroup,
            leaf
        });
    }

    componentDidMount () {
        sidebar.init();
        sidebar.setActiveState(this.state.group, this.state.subGroup, this.state.leaf);
    }

    componentDidUpdate () {
        sheet.init();
        sidebar.init();
        sidebar.setActiveState(this.state.group, this.state.subGroup, this.state.leaf);
    }

    render () {

        const pages = {
            COSettings: <CustomersDetailedSettings />,
            COOverview:
            <CustomersOverview
                setCustomerIndex={customerIndex => customerIndex}
                customersList={customersList}
                statusText={statusText}
            />,
            CDSettings: <CustomersDetailedSettings />,
            CDOrderHistory:
            <CustomersDetailedOrders
                customersDetailedOrdersSteps={customersDetailedOrdersSteps}
                customersDetailedOrders={customersDetailedOrders}
            />,
            CDInquiries:
            <CustomersDetailedInquiries
                customersDetailedLatestInquiry={customersDetailedLatestInquiry}
                customersDetailedPreviousInquiries={customersDetailedPreviousInquiries}
            />,
            CDSummaryCharts:
            <CustomersDetailedCharts
                customerIdName={`${customersList[this.state.customerIndex].id} ${customersList[this.state.customerIndex].firstName} ${customersList[this.state.customerIndex].lastName}`}
                customerOrders={[...customersDetailedOrders, 1994]}
                customerInquiries={[...customersDetailedPreviousInquiries, customersDetailedLatestInquiry]}
                createNumArray={createNumArray}
            />,
            IntroPage: <IntroPage />,
            IntroFAQ: <FAQ />

        };

        return (
            <DocContainer>
                <ComponentPreview language="html" showCasePanel codeFigure>
                    <div className="container-fluid">
                        <div className="row">
                            <TopbarComponent wide="xl" logout id="demo-topbar" />
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <SidebarComponent {...this.state} setActive={this.setActive} />
                            </div>
                            <main className="col main-content border-left sidebar-example-main">
                                {(this.state.activePage && !this.props.test) ? pages[this.state.activePage] : <React.Fragment />}
                            </main>
                        </div>
                    </div>
                </ComponentPreview>
            </DocContainer>
        );
    }
}

export default Sidebar;
