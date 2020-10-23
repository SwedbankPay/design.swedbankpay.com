import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import TopbarComponent from "@components/Topbar";
import CodeTags from "@components/CodeTags";
import SidebarComponent from "@components/Sidebar";
import { SidebarNavList } from "../Sidebar/constants";

const { topbar, sidebar } = window.dg;

const menu = {
    btn: {
        name: "Menu",
        icon: "menu"
    },
    items: [
        {
            name: "Home",
            icon: "home"
        },
        {
            name: "Purchase history",
            icon: "shopping_cart"
        },
        {
            name: "Settings",
            icon: "settings"
        }
    ]
};

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            To use a topbar the bare minimum markup required is:
        </p>
        <ul>
            <li><CodeTags type="secondary" code=".topbar" /> wrapper.</li>
            <li>Anchor with class <CodeTags type="secondary" code=".topbar-logo" /> to display the logo and make it clickable.</li>
        </ul>
        <p>
            With this you get a topbar with the Swedbank Pay logo.
            In the topbar you can add additional functionality like a menu containing links. To enable this add a <CodeTags type="primary" code={"<button>"} /> and
            a <CodeTags type="primary" code={"<nav>"} /> containing anchors. Remember to include <CodeTags type="secondary" code={"toggle-nav=\"{your_nav_id}\""} /> as
            a <CodeTags type="primary" code={"<button>"} /> attribute
            to get the menu to appear when the menu-button is clicked.
        </p>

        <p>
            Note that scrolling is locked when the menu is displayed.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent topbarContent={menu} logout id="demo-topbar" />
        </ComponentPreview>
    </>
);

const TopbarWide = () => (
    <>
        <h2 id="topbar-wide">Wide topbar</h2>
        <p>
            This is a wide topbar.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent id="demo-topbar-1" topbarContent={menu} wide="xl" logout />
        </ComponentPreview>
    </>
);

const TopbarSticky = () => (
    <>
        <h2 id="topbar-sticky">Sticky topbar</h2>
        <p>
            A sticky topbar is also available, with class <CodeTags type="secondary" code=".topbar-sticky" />.
            Use <CodeTags type="secondary" code=".topbar-min-{breakpoint}-sticky" /> to specify the minimum width the topbar should be sticky,
            or <CodeTags type="secondary" code=".topbar-max-{breakpoint}-sticky" /> to specify the maximum width the topbar should be sticky
            (see <Link to="/utilities/breakpoints">breakpoints</Link> for more information on breakpoints). Note that the sticky topbar does
            not work in Internet Explorer 11.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container-fluid">
                <TopbarComponent id="demo-topbar-sticky" topbarContent={menu} wide="xl" logout sticky />
                <div className="row">
                    <div className="col-auto">
                        <SidebarComponent id="topbar-sticky-sidebar" sidebarNavList={SidebarNavList} sticky />
                    </div>
                    <main className="col main-content border-left">Main content things...</main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const TopbarWithSidebar = () => (
    <>
        <h2 id="topbar-with-sidebar">Topbar with sidebar content</h2>
        <p>
            It is recommended to have the sidebar content in the topbar menu on smaller devices, such as phones and tablets (see more on sidebar <Link to="/components/sidebar">here</Link>).
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent topbarContent={menu} logout id="demo-topbar-sidebar" sidebar />
        </ComponentPreview>
    </>
);

const TopbarPNG = () => (
    <>
        <h2 id="topbar-png">Topbar with PNG logo</h2>
        <p>
            A PNG version of the logo can also be used. This is done by appending the class <CodeTags type="secondary" code=".topbar-logo-png" /> to the
            anchor with class <CodeTags type="secondary" code=".topbar-logo" />. Only consider using the PNG version when there are issues with using the SVG version.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent topbarContent={menu} logout id="demo-topbar-png" png/>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent id="demo-topbar-1-png" topbarContent={menu} wide="xl" logout png/>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript Methods</h2>
        <JavascriptDocs componentName="topbar" open close />
    </>
);

class Topbar extends Component {
    componentDidMount () {
        topbar.init();
        sidebar.init("topbar-sidebar");
        sidebar.init("topbar-sticky-sidebar");
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">The topbar is used to give users an easily available navigational bar at the top of your web application.</p>
                <Overview />
                <TopbarWide />
                <TopbarSticky />
                <TopbarWithSidebar />
                <TopbarPNG />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Topbar;

/* For testing */
export { Overview, TopbarWide, TopbarSticky, TopbarWithSidebar, TopbarPNG, JavascriptMethods };
