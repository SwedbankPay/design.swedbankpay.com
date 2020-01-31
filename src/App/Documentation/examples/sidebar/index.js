import React, { PureComponent } from "react";
import { DocContainer, ComponentPreview } from "@docutils";

import { SidebarNavList } from "./constants";
import TopbarComponent from "@components/Topbar";
import SidebarComponent from "./components/SidebarComponent";
import LoremIpsum from "./components/LoremIpsum";
import Introduction from "./components/Introduction";
import {
    COOverview,
    CDOrderHistory,
    CDInquiries,
    CDSummaryCharts
} from "./components/Customers";

const { sidebar } = window.dg;

class Sidebar extends PureComponent {

    constructor (props) {
        super(props);

        this.state = {
            activePage: "IntroPage",
            activePagePosition: "",
            group: 0,
            subGroup: null,
            leaf: 0
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
        sidebar.setActiveState("example-sidebar", this.state.group, this.state.subGroup, this.state.leaf);
    }

    componentDidUpdate () {
        sidebar.init("example-sidebar");
        sidebar.initScrollListener("example-sidebar", "sidebar-example-main", "h2");
        sidebar.setActiveState("example-sidebar", this.state.group, this.state.subGroup, this.state.leaf);

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
            COOverview: <COOverview />,
            CDOrderHistory: <CDOrderHistory />,
            CDInquiries: <CDInquiries />,
            CDSummaryCharts: <CDSummaryCharts />,
            IntroPage: <Introduction />,
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
                                <SidebarComponent setActive={this.setActive} sidebarNavList={SidebarNavList} />
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
