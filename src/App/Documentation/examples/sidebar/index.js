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

const { sidebar } = window.dg;

const IntroPage = () => (
    <>
        <h2 id="introduction" className="hero">Welcome to the sidebar example!</h2>
        <p className="lead">This example showcases how the sidebar can be used.</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et mattis massa. Sed et gravida mi.
            Aliquam lobortis ligula nulla, vel consequat ligula auctor et. Vivamus placerat, odio et varius efficitur,
            neque leo condimentum mi, sed iaculis nisi arcu sit amet dui. Sed vehicula leo in purus lacinia, id auctor nulla scelerisque.
            Sed egestas sapien non enim pharetra sodales. Quisque a erat accumsan ligula efficitur vulputate blandit sed lorem. Nullam condimentum ultricies metus,
            et volutpat lacus tempor id. In tortor ante, interdum non convallis in, luctus non neque. Pellentesque in mauris enim.
        </p>

        <h2 id="faq">FAQ</h2>
        <div className="container">
            <FAQSearch />
            <FAQList />
            <FAQSheet />
            <FAQCard />
        </div>
    </>
);

const LoremIpsum = () => (
    <>
        <h2 id="what">What is Lorem Ipsum?</h2>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h2 id="why">Why do we use it?</h2>
        <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,
            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
        </p>
        <h2 id="where">Where does it come from?</h2>
        <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
            de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
        <h2 id="where-more">Where can I get some?</h2>
        <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
            or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
            isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
    </>
);

class SidebarComponent extends Component {
    render () {
        return (
            <div id="example-sidebar" className="sidebar">
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
                                                <a href="#" onClick={e => this.props.setActive(e, groupIndex, null, leafIndex, leaf)}>
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
                                                            <a href="#" onClick={e => this.props.setActive(e, groupIndex, subIndex, leafIndex, leaf)}>
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
            activePagePosition: "",
            group: 0,
            subGroup: null,
            leaf: 0,
            customerIndex: 0
        };

        this.setActive = this.setActive.bind(this);
    }

    setActive (e, group, subGroup, leaf, leafElement) {
        e.preventDefault();

        this.setState({
            group,
            subGroup,
            leaf,
            activePagePosition: leafElement.pagePosition
        });

        if (leaf === 0 || this.state.activePage !== leafElement.page) {
            this.setState({
                activePage: leafElement.page
            });
        }

    }

    componentDidMount () {
        sidebar.init("example-sidebar");
        sidebar.initScrollListener("example-sidebar", "sidebar-example-main", "h2");
        sidebar.setActiveState(this.state.group, this.state.subGroup, this.state.leaf);
    }

    componentDidUpdate () {
        sidebar.init("example-sidebar");
        this.state.group !== 2 && sidebar.initScrollListener("example-sidebar", "sidebar-example-main", "h2");
        sidebar.setActiveState(this.state.group, this.state.subGroup, this.state.leaf);

        if (this.state.activePagePosition) {
            const mainElement = document.getElementById("sidebar-example-main");
            const scrollToElement = document.getElementById(this.state.activePagePosition);

            mainElement.scrollTo({
                top: scrollToElement.offsetTop,
                left: 0,
                behavior: "instant"
            });
        }
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
            LoremIpsum: <LoremIpsum />

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
                            <main id="sidebar-example-main" className="col main-content border-left sidebar-example-main">
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
