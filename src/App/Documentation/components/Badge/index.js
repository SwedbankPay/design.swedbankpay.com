import React from "react";

import { ComponentPreview, Property, DocContainer } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Use class <Property value=".badge" /> along with <Property value=".badge-{color}" /> to display the badge of your choosing.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p>Badge <span className="badge badge-default">default</span></p>
            <p>Badge <span className="badge badge-yellow">yellow</span></p>
            <p>Badge <span className="badge badge-blue">blue</span></p>
            <p>Badge <span className="badge badge-red">red</span></p>
        </ComponentPreview>
    </>
);

const Badge = () => (
    <DocContainer docToc>
        <p className="lead">
            Badges are small rectangular boxes which can convey a message and or state with their text and color.
        </p>
        <Overview />
    </DocContainer>
);

export default Badge;

/* For testing */
export { Overview };
