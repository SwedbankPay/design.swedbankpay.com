import React from "react";

import { ComponentPreview } from "@docutils";
import Tag from "@components/Tag";

const basename = process.env.basename;
const scriptUrl = `${window.location.origin + basename}scripts/dg.js`;
const dashboardScriptUrl = `${window.location.origin + basename}scripts/dg-dashboard.js`;

const QuickStart = () => (
    <>
        <h3 id="quick-start">Quick start</h3>
        <p>To quickly add the dashboard theme to your project, include the snippets below in your project.</p>
    </>
);

const JavaScript = () => (
    <>
        <h2 id="javascript">JavaScript</h2>
        <p>The dashboard theme requires a separate script to run properly. So add the dashboard script below the <Tag code type="secondary" text="scripts" /> at the bottom
        of your <Tag code type="primary" text={"<body>"} /> tag like this:</p>
        <ComponentPreview language="html" codeFigure>
            <script src={scriptUrl}></script>
            <script src={dashboardScriptUrl}></script>
        </ComponentPreview>
    </>
);

const Introduction = () => (
    <>
        <h2 id="introduction">Introduction</h2>
        <p className="lead">
            We are using <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">chart.js</a> to generate the charts.
            Our script is mainly just a wrapper around that library to add the correct styling etc.
        </p>
        <p>Most options and settings available in the chart.js documentation will be available.</p>
        <p>For now, the following chart types are available:</p>
        <ul>
            <li><Tag code type="secondary" text={"\"line\""} /></li>
            <li><Tag code type="secondary" text={"\"bar\"/\"horizontalBar\""} /></li>
            <li><Tag code type="secondary" text={"\"pie\"/\"doughnut\""} /></li>
        </ul>
        <QuickStart />
        <JavaScript />
    </>
);

export default Introduction;

/* For testing */
export { QuickStart, JavaScript };
