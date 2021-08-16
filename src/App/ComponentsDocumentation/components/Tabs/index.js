import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, JavascriptDocs, JavascriptDocElement } from "@docutils";
import TabsComponent from "@components/Tabs";
import CodeTags from "@components/CodeTags";

import { tabs } from "@src/scripts/main";

const tabItems = ["Card", "Discounts", "Transactions", "Invoice", "Settings", "Audit trail", "History"];

const BasicUsage = () => (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Add class <CodeTags type="secondary" code=".tabs" /> to a div containing <CodeTags type="primary" code={"<ul>"} /> and nest <CodeTags type="primary" code={"<li>"} /> as
        needed. The tabs component will by default cover the whole width of the container at breakpoint <CodeTags type="secondary" code="sm" />. To specify a larger breakpoint,
        use <CodeTags type="secondary" code=".tabs-{breakpoint}" /> (see <Link to="/core/breakpoints">breakpoints</Link> for more information on breakpoints).
        Make sure that the tabs will not overflow on screens of normal size.
        Consider revising the design or the decision to use tabs when more than 3
        alternatives are present. If using tabs really is necessary, tabs with scroll might be
        a more suitable alternative.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent id="tabs-example" items={[...tabItems.slice(0, 3)]}/>
        </ComponentPreview>
    </>
);

const TabsScroll = () => (
    <>
        <h2 id="tabs-scroll">Tabs with scroll</h2>
        <p>To make tabs more mobile friendly, use class <CodeTags type="secondary" code=".tabs-scroll" />. <CodeTags type="secondary" code=".tabs-scroll" /> will
        make the tabs scrollable in case of overflow. Note that the scrollable property is not optimized for desktop usage. Consider the usage
        when 4 or more tabs are present.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent id="tabs-scroll-example" ulId="tabs-scroll-example-ul" items={tabItems} scroll/>
        </ComponentPreview>
    </>
);

const SetScrollStateJavaScript = ({ componentName }) => (
    <>
        <JavascriptDocElement
            code={<CodeTags type="secondary" code={`dg.${componentName}.setScrollState(<${componentName.toLowerCase()}-id>, scrollState)`} />}
            description={
                <>
                    Moves the scroll position of the {componentName} to the user specified position. The value to be passed to <CodeTags type="secondary" code="scrollState" /> is
                    the object <CodeTags type="secondary" code="{ scrollStart, scrollTotalAmount }" />. <CodeTags type="secondary" code="scrollStart" /> is the current scroll
                    position, <CodeTags type="secondary" code="scrollTotalAmount" /> is the amount to be scrolled from the current scroll position (negative values for left scroll,
                    positive values for right scroll). Note: <CodeTags type="primary" code={"<ul>"} /> is the scrollable element.
                </>
            }
        />
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="tabs" others={[SetScrollStateJavaScript]} />
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
