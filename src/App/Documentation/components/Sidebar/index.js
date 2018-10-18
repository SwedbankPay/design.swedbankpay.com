import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, ExperimentalComponentAlert } from "#";
import { sidebar } from "$/px-script";
import SidebarComponent from "@/Sidebar";

const sidebarItems = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart"
    },
    {
        name: "Notifications",
        icon: "notification_important"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance"
    },
    {
        name: "Authentication",
        icon: "fingerprint"
    }
];

const sidebarItemsTwoLevels = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart",
        subItems: ["Purchase history", "Invoice"]
    },
    {
        name: "Notifications",
        icon: "notification_important"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance",
        subItems: ["Email", "Information", "Other things"]
    }
];

const StandardSidebar = () => (
    <>
        <h2 id="sidebar-standard">Standard sidebar</h2>
        <p>
            Add class <code className="token property">.sidebar</code> and <code className="token property">.sidebar-(desired_size)-vertical-wide</code> to a nav containing an <PrismCode className="language-html">{"<ul>"}</PrismCode> to get a standard sidebar.
            Add <PrismCode className="language-html">{"<i>"}</PrismCode> and <PrismCode className="language-html">{"<span>"}</PrismCode> with your desired <Link to="/docs/core/icons">icon</Link> and text. <code className="token property">.sidebar-(desired_size)-vertical-wide</code> determines
            when your sidebar will switch from responsive mode to vertical. If you have more than five icons then the first four icons will be the only visible ones in responsive mode.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent widesize="lg" items={sidebarItems} />
        </ComponentPreview>
    </>
);

const TwoLevels = () => (
    <>
        <h2 id="sidebar-twolevels">Standard sidebar with two levels</h2>
        <p>
            You can also display another level of items in the standard sidebar. Just nest a <PrismCode className="language-html">{"<div>"}</PrismCode> with class <code className="token property">.submenu</code> containing an icon and text like the
            standard sidebar and add a new <PrismCode className="language-html">{"<ul>"}</PrismCode> with <PrismCode className="language-html">{"<li>"}</PrismCode> items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent widesize="lg" items={sidebarItemsTwoLevels} />
        </ComponentPreview>
    </>
);

const TabletMode = () => (
    <>
        <h2 id="sidebar-tablet">Tablet mode</h2>
        <p>
            To display only icons use class <code className="token property">.sidebar-(desired_size)-vertical</code>.  <code className="token property">.sidebar-(desired_size)-vertical</code> works
            just like in the standard example. In this mode it is possible to display another level of items.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent vertsize="md" items={sidebarItemsTwoLevels} />
        </ComponentPreview>
    </>
);

const Mix = () => (
    <>
        <h2 id="sidebar-mix">Tablet and wide</h2>
        <p>
            You can also use both tablet and wide together.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent vertsize="md" widesize="lg" items={sidebarItemsTwoLevels} />
        </ComponentPreview>
    </>
)

const Responsive = () => (
    <>
        <h2 id="responsive-sidebar">Responsive sidebar</h2>
        <p>
            To only use responsive mode use class <code className="token property">.sidebar</code> alone.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent items={sidebarItems} />
        </ComponentPreview>
    </>
);

const SidebarText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Sidebars...</p>
        <StandardSidebar />
        <TwoLevels />
        <TabletMode />
        <Mix />
        <Responsive />
    </div>
);

class Sidebar extends Component {
    componentDidUpdate () {
        sidebar.init();
    }

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
export { StandardSidebar, TwoLevels, TabletMode, Mix, Responsive, SidebarText };
