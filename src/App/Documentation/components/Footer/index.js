import React from "react";

import { ComponentPreview, DocContainer } from "#";
import FooterComponent from "@/Footer";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Footer.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <FooterComponent />
        </ComponentPreview>
    </>
);

const Footer = () => (
    <DocContainer docToc>
        <p className="lead">
            Footer
        </p>
        <Overview />
    </DocContainer>
);

export default Footer;

/* For testing */
export { Overview };
