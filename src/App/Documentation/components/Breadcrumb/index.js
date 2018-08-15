import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";
import BreadcrumbComponent from "@/Breadcrumb";

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
            <p>Add class <code className="token property">.breadcrumb</code> to a containing <PrismCode className="language-html">{"<ol>"}</PrismCode> element and nest a <PrismCode className="language-html">{"<a>"}</PrismCode> or <PrismCode className="language-html">{"<span>"}</PrismCode> element inside the <PrismCode className="language-html">{"<li>"}</PrismCode> elements.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <BreadcrumbComponent items={items} />
            </ComponentPreview>
        </>
    );
};

const SmallBreadCrumb = () => {
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
            <h2 id="small-breadcrumb">Small breadcrumb</h2>
            <p>Add class <code className="token property">.breadcrumb-sm</code> to the containing <PrismCode className="language-html">{"<ol>"}</PrismCode> element for a smaller version of the breadcrumb component.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <BreadcrumbComponent small items={items} />
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
                <BreadcrumbComponent small items={items} />
            </ComponentPreview>
        </>
    );
};

const BreadcrumbText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content.</p>
        <BasicBreadCrumb />
        <SmallBreadCrumb />
        <DisabledBreadcrumb />
    </div>
);

const Breadcrumb = () => (
    <div className="doc-container">
        <div className="row">
            <BreadcrumbText />
            <DocToc component={BreadcrumbText} />
        </div>
    </div>
);

export default Breadcrumb;

/* for testing */
export { BasicBreadCrumb, SmallBreadCrumb, DisabledBreadcrumb, BreadcrumbText };
