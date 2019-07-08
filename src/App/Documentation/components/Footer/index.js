import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, Property } from "#";
import FooterComponent from "@/Footer";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Our footer component comes with the same brand color as our topbar.
            It also supports aligning text with <Property value=".page-footer-rights"/> when a page reaches the small <Link to="/docs/core/breakpoints">breakpoint</Link>.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <FooterComponent />
        </ComponentPreview>
    </>
);

const Footer = () => (
    <DocContainer docToc>
        <p className="lead">
            The Swedbank Pay footer.
        </p>
        <Overview />
    </DocContainer>
);

export default Footer;

/* For testing */
export { Overview };
