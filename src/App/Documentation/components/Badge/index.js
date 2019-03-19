import React from "react";

import { ComponentPreview, Property, DocContainer } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Use class <Property value=".badge" /> along with <Property value=".badge-{color}" /> to display the badge of your choosing.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p>Badge <span className="badge badge-default">default</span></p>
            <p>Badge <span className="badge badge-yellow">brand</span></p>
            <p>Badge <span className="badge badge-blue">blue</span></p>
            <p>Badge <span className="badge badge-red">red</span></p>
        </ComponentPreview>
    </>
);

const FurtherUsage = () => (
    <>
        <h2 id="further-usage">Further usage</h2>
        <p>Badges inherit the size of the immediate parent element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <h1>Badge <span className="badge badge-blue">blue</span></h1>
            <h2>Badge <span className="badge badge-blue">blue</span></h2>
            <h3>Badge <span className="badge badge-blue">blue</span></h3>
            <h4>Badge <span className="badge badge-blue">blue</span></h4>
            <h5>Badge <span className="badge badge-blue">blue</span></h5>
            <h6>Badge <span className="badge badge-blue">blue</span></h6>
        </ComponentPreview>
    </>
);

const Badge = () => (
    <DocContainer docToc>
        <p className="lead">
            Badges are small rectangular boxes which can convey a message and or state with their text and color.
        </p>
        <Overview />
        <FurtherUsage />
    </DocContainer>
);

export default Badge;

/* For testing */
export { Overview, FurtherUsage };
