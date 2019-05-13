import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property, JavascriptDocs } from "#";
import TabsComponent from "@/Tabs";

const { tabs } = window.px;

const tabItems = ["Card", "Discounts", "Transactions", "Invoice", "Settings", "Audit trail"];

const BasicUsage = () => (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Add class <Property value=".tabs" /> with a <Property value=".tabs-horizontal-desired_size" /> to a div containing an arrow icon along with <PrismCode className="language-html">{"<ul>"}</PrismCode> and nest <PrismCode className="language-html">{"<li>"}</PrismCode> as needed. The <Property value=".tabs-horizontal-desired_size" /> class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our <Link to="/docs/core/breakpoints">breakpoints documentation</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent mode="xl" items={tabItems}/>
        </ComponentPreview>
    </>
);

const Collapsed = () => (
    <>
        <h2 id="collapsed">Collapsed</h2>
        <p>If no <Property value=".tabs-horizontal-desired_size" /> is provided then the tabs will always be in collapsed mode.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent items={tabItems}/>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">Javascript methods</h2>
        <JavascriptDocs componentName="tabs"open close />
    </>
);

class Tabs extends Component {
    componentDidMount () {
        tabs.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Use tabs to show which page or section that is active out of several options.
                </p>
                <BasicUsage />
                <Collapsed />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Tabs;

/* For testing */
export { BasicUsage, Collapsed, JavascriptMethods };
