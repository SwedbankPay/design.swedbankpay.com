import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import BreadcrumbComponent from "@components/Breadcrumb";
import Tag from "@components/Tag";

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
            <p>Add class <Tag code type="secondary" text=".breadcrumb" /> to a containing <Tag code type="primary" text={"<ol>"} /> element and nest
            a <Tag code type="primary" text={"<a>"} /> or <Tag code type="primary" text={"<span>"} /> element inside
            the <Tag code type="primary" text={"<li>"} /> elements.</p>
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
            <p>To disable a breadcrumb element, simply use a <Tag code type="primary" text={"<span>"} /> element within
            the <Tag code type="primary" text={"<li>"} /> element (will not work for last-child).</p>
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
