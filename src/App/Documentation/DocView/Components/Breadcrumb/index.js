import React from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import ComponentPreview from "../../../utils/ComponentPreview";
import DocToc from "../../../utils/DocToc";

import BreadcrumbComponent from "../../../../components/Breadcrumb";

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
        { title: "Gadgets #1" }
    ];

    return (
        <div>
            <h2 id="basic-usage">Basic usage</h2>
            <p>Add class <code className="token property">.breadcrumb</code> to a containing <PrismCode className="language-html">{"<ol>"}</PrismCode> element and nest a <PrismCode className="language-html">{"<a>"}</PrismCode> or <PrismCode className="language-html">{"<span>"}</PrismCode> element inside the <PrismCode className="language-html">{"<li>"}</PrismCode> elements.</p>
            <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
                <BreadcrumbComponent items={items} />
            </ComponentPreview>
        </div>
    );
};

const SmallBreadCrumb = () => {
    const items = [
        { title: "Home" },
        { title: "Products" },
        { title: "Gadgets" },
        { title: "Gadgets #1" }
    ];

    return (
        <div>
            <h2 id="small-breadcrumb">Small breadcrumb</h2>
            <p>Add class <code className="token property">.breadcrumb-sm</code> to the containing <PrismCode className="language-html">{"<ol>"}</PrismCode> element for a smaller version of the breadcrumb component.</p>
            <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
                <BreadcrumbComponent small={true} items={items} />
            </ComponentPreview>
        </div>
    );
};

const DisabledBreadcrumb = () => {
    const items = [
        {
            title: "Home",
            href: "#"
        },
        {
            title: "Products",
            href: "#",
            disabled: true
        },
        {
            title: "Gadgets",
            href: "#"
        },
        {
            title: "Gadgets #1",
            href: "#"
        }
    ];

    return (
        <div>
            <h2 id="disable-a-breadcrumb">Disable a breadcrumb</h2>
            <p>To disable a breadcrumb element, add class <code className="token property">.disabled</code> to the <PrismCode className="language-html">{"<li>"}</PrismCode> element.</p>
            <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
                <BreadcrumbComponent small={true} items={items} />
            </ComponentPreview>
        </div>
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
