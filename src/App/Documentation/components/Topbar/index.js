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
        <ComponentPreview language="html" showCasePanel codeFigure >
            <div className="container-fluid">
                <div className="row">
                    <header className="topbar topbar-xl-wide" id="demo-topbar-1">
                        <button type="button" className="topbar-btn">
                            <i className="material-icons topbar-btn-icon">menu</i>
                        </button>
                        <a className="topbar-logo" href="/">
                            <img src="/img/swedbankpay-logo.svg?8f76620b1e058f7a32c5f5b59e0adee5" alt="swedbankpay-logo" />
                        </a>
                        <nav className="topbar-nav">
                            <div className="topbar-link-container">
                                <button type="button" className="topbar-close">
                                    <i className="material-icons">close</i>
                                </button>
                                <a href="#" className="active">
                                    <i className="material-icons">home</i>
                                    <span>Home</span>
                                </a>
                                <a href="#">
                                    <i className="material-icons">shopping_cart</i>
                                    <span>Purchase history</span>
                                </a>
                                <a href="#">
                                    <i className="material-icons">settings</i>
                                    <span>Settings</span>
                                </a>
                                <a className="topbar-link-right" href="#">
                                    <i className="material-icons">exit_to_app</i>
                                    <span>Log out</span>
                                </a>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className="row">
                    <div className="col-auto">Sidebar component...</div>
                    <main className="col main-content border-left">Main content things...</main>
                </div>
            </div>
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
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">The topbar is used to give users an easily available navigational bar at the top of your web application.</p>
                <Overview />
                <TopbarWide />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Topbar;

/* For testing */
export { Overview, TopbarWide, JavascriptMethods };
