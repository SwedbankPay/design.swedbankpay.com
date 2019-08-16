import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, Property, DocContainer } from "@docutils";
import BreadcrumbComponent from "@components/Breadcrumb";

const BasicBreadCrumb = () => {
    const items = [
        {
            title: "Home",
            href: "#"
        },
        {
            title: "Products",
            href: "#"
        },
        {
            title: "Gadgets",
            href: "#"
        },
        { title: "Gadget #1" }
    ];

    return (
        <>
            <h2 id="basic-usage">Basic usage</h2>
            <p>Add class <Property value=".breadcrumb" /> to a containing <PrismCode className="language-html">{"<ol>"}</PrismCode> element and nest a <PrismCode className="language-html">{"<a>"}</PrismCode> or <PrismCode className="language-html">{"<span>"}</PrismCode> element inside the <PrismCode className="language-html">{"<li>"}</PrismCode> elements.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <BreadcrumbComponent items={items} />
            </ComponentPreview>
        </>
    );
};

const DisabledBreadcrumb = () => {
    const items = [
        {
            title: "Home",
            href: "#"
        },
        { title: "Products" },
        {
            title: "Gadgets",
            href: "#"
        },
        { title: "Gadget #1" }
    ];

    return (
        <>
            <h2 id="disable-a-breadcrumb">Disable a breadcrumb</h2>
            <p>To disable a breadcrumb element, simply use a <PrismCode className="language-html">{"<span>"}</PrismCode> element within the <PrismCode className="language-html">{"<li>"}</PrismCode> element (will not work for last-child).</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <BreadcrumbComponent items={items} />
            </ComponentPreview>
        </>
    );
};

const Breadcrumb = () => (
    <DocContainer docToc>
        <p className="lead">Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content.</p>
        <BasicBreadCrumb />
        <DisabledBreadcrumb />
    </DocContainer>
);

export default Breadcrumb;

/* For testing */
export { BasicBreadCrumb, DisabledBreadcrumb };
