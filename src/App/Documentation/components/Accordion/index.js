import React from "react";

import { ComponentPreview, DocContainer } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Accordion.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="accordion">
                <h5>My link</h5>
                <div className="accordion-item">
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Accordion = () => (
    <DocContainer docToc>
        <p className="lead">
            Accordion
        </p>
        <Overview />
    </DocContainer>
);

export default Accordion;

/* For testing */
export { Overview };
