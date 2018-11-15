import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Property, Attribute } from "#";
import TopbarComponent from "@/Topbar";
import { topbar } from "$/px-script";
import Alert from "@/Alert";

const menu = {
    btn: {
        icon: "menu",
        text: "Menu"
    },
    items: ["Link 1", "Link 2", "Link 3"]
};

const topbarContent = {
    id: "topbar-nav",
    ...menu
};

// TODO: Remove when deprecated parts are deleted.
const DeprecatedAlert = () => (
    <Alert type="danger">
        <h3>Component contains deprecated parts</h3>
        <p>The following parts are deprecated and will be removed:</p>
        <ul>
            <li>Right nav</li>
            <li>Levels in left nav</li>
            <li>topbar-btn-right and topbar-btn-left classes will be replaced by topbar-btn</li>
        </ul>
        <p>For continued support, please follow the examples in the documentation.</p>
    </Alert>
);

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
            With this you get a topbar with the PayEx logo.
            In the topbar you can add additional functionality like a menu containing links. To enable this add a <PrismCode className="language-html">{"<button>"}</PrismCode> and
            a <PrismCode className="language-html">{"<nav>"}</PrismCode> containing anchors. Remember to include <Attribute data name="toggle-nav" value="{your_nav_id}"/> as a <PrismCode className="language-html">{"<button>"}</PrismCode> attribute
            to get the menu to appear when the menu-button is clicked.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent topbarContent={topbarContent} logout />
        </ComponentPreview>
    </>
);

const FixedTopbar = () => (
    <>
        <h2 id="fixed-topbar">Fixed topbar</h2>
        <p>
            Add <Property value=".topbar-fixed" /> with your <Property value=".topbar" /> to get a fixed topbar.
            For a demonstration of the usage see the documentations top bar or implement it in your own project!
        </p>
        <ComponentPreview language="html" codeFigure>
            <TopbarComponent fixed />
        </ComponentPreview>
    </>
);

const TopbarText = () => (
    <div className="col-lg-10 doc-body">
        <DeprecatedAlert />
        <p className="lead">Topbar...</p>
        <Overview />
        <FixedTopbar />
    </div>
);

class Topbar extends Component {
    componentDidMount () {
        topbar.init(1);
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <TopbarText />
                    <DocToc component={TopbarText} />
                </div>
            </div>
        );
    }
}

export default Topbar;

/* For testing */
export { Overview, TopbarText, FixedTopbar, DeprecatedAlert };
