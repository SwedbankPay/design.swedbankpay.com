import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property, JavascriptDocs } from "@docutils";
import TabsComponent from "@components/Tabs";

const { tabs } = window.dg;

const tabItems = ["Card", "Discounts", "Transactions", "Invoice", "Settings", "Audit trail"];

const BasicUsage = () => (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Add class <Property value=".tabs" /> to a div containing <PrismCode className="language-html">{"<ul>"}</PrismCode>and nest <PrismCode className="language-html">{"<li>"}</PrismCode> as needed.
        Make sure that the tabs will not overflow on screens of normal size.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent items={tabItems}/>
        </ComponentPreview>
    </>
);

const TabsScroll = () => (
    <>
        <h2 id="tabs-scroll">Tabs with scroll</h2>
        <p>To make tabs more mobile friendly, use classs <Property value=".tabs-scroll-{desired_size}" />.
        The available sizes can be found in our <Link to="/docs/core/breakpoints">breakpoints documentation</Link>.
        <Property value=".tabs-scroll-{desired_size}" /> will make the tabs scrollable in case of overflow.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent items={tabItems} mode="md"/>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="tabs" />
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
                <TabsScroll />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Tabs;

/* For testing */
export { BasicUsage, TabsScroll, JavascriptMethods };
