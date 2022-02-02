import React from "react";
import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            <Tag code type="secondary" text=".border" /> sets a border around the entire element whilst the rest sets a border on the named side.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="demo-square border" />
            <div className="demo-square border-top" />
            <div className="demo-square border-right" />
            <div className="demo-square border-bottom" />
            <div className="demo-square border-left" />
        </ComponentPreview>
    </>
);

const Borders = () => (
    <DocContainer docToc>
        <p className="lead">
            Use our border utilities to set borders that suit your needs. Our borders are always 1px thick, solid and a light gray.
        </p>
        <Overview />
    </DocContainer>
);

export default Borders;

/* For testing */

export { Overview };
