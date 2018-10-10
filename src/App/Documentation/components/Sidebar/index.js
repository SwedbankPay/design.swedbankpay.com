import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import { sidebar } from "$/px-script";
import SidebarComponent from "@/Sidebar";

const sidebarItems = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Settings",
        icon: "settings"
    },
    {
        name: "Transactions",
        icon: "shopping_cart"
    },
    {
        name: "Favorites",
        icon: "favorite"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance"
    }
];

const Overview = () => (
    <>
        <h2 id="sidebar-usage">Standard sidebar behaviour</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent items={sidebarItems} />
        </ComponentPreview>
    </>
);

const Vertical = () => (
    <>
        <h2 id="vertical-sidebar">Vertical sidebar</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent mode="xl" items={sidebarItems} />
        </ComponentPreview>
    </>
);

const VerticalWide = () => (
    <>
        <h2 id="example-usage">Example usage</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent items={sidebarItems} />
        </ComponentPreview>
    </>
);

const SidebarText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Sidebars...</p>
        <Overview />
        <Vertical />
    </div>
);

class Sidebar extends Component {
    componentDidMount () {
        sidebar.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <SidebarText />
                    <DocToc component={SidebarText} />
                </div>
            </div>
        );
    }
}

export default Sidebar;

/* For testing */
export { Overview };
