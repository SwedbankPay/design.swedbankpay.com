import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property, Attribute, JavascriptDocs } from "@docutils";
import TopbarComponent from "@components/Topbar";

const { topbar } = window.dg;

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
            <li><Property value=".topbar" /> wrapper.</li>
            <li>Anchor with class <Property value=".topbar-logo" /> to display the logo and make it clickable.</li>
        </ul>
        <p>
            With this you get a topbar with the Swedbank Pay logo.
            In the topbar you can add additional functionality like a menu containing links. To enable this add a <PrismCode className="language-html">{"<button>"}</PrismCode> and
            a <PrismCode className="language-html">{"<nav>"}</PrismCode> containing anchors. Remember to include <Attribute data name="toggle-nav" value="{your_nav_id}"/> as a <PrismCode className="language-html">{"<button>"}</PrismCode> attribute
            to get the menu to appear when the menu-button is clicked.
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

const TopbarPNG = () => (
    <>
        <h2 id="topbar-png">Topbar with PNG logo</h2>
        <p>
            A PNG version of the logo can also be used. This is done by appending the class <Property value=".topbar-logo-png" /> to the
            anchor with class <Property value=".topbar-logo" />. Only consider using the PNG version when there are issues with using the SVG version.
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
        topbar.init("demo-topbar");
        topbar.init("demo-topbar-1");
        topbar.init("demo-topbar-png");
        topbar.init("demo-topbar-1-png");
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">The topbar is used to give users an easily available navigational bar at the top of your web application.</p>
                <Overview />
                <TopbarWide />
                <TopbarPNG />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Topbar;

/* For testing */
export { Overview, TopbarWide, TopbarPNG, JavascriptMethods };
