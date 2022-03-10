import React from "react";

import { tableShowcase } from "./constants";
import { ComponentPreview, DocContainer } from "@docutils";

const Overview = () => (
    <section>
        <h2>Overview</h2>
        <p>Use the table component to make information easier to compare and scan for users.</p>

        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={tableShowcase} />
    </section>
);

const Tables = () => (
    <DocContainer>
        <p className="lead">A table displays information in a grid of rows and columns.</p>
        <Overview />
    </DocContainer>
);

export default Tables;

/* For testing */
export { Overview };
