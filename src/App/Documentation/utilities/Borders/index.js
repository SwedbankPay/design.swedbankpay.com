import React from "react";
import { ComponentPreview, DocContainer, Property } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            <Property value=".border" /> sets a border around the entire element whilst the rest sets a border on the named side.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="demo-square border" />
            <div className="demo-square border-top" />
            <div className="demo-square border-right" />
            <div className="demo-square border-right" />
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
