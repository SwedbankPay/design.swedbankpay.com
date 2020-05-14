import React from "react";

import { ComponentPreview } from "@docutils";
import CodeTags from "@components/CodeTags";

const BASENAME = process.env.basename;
const brand = process.env.brand;
const scriptUrl = `https://design.${brand}.com${BASENAME}scripts/dg.js`;
const dashboardScriptUrl = `https://design.${brand}.com${BASENAME}scripts/dg-dashboard.js`;
const styleUrl = `https://design.${brand}.com${BASENAME}styles/dg-style.css`;
const dashboardStyleUrl = `https://design.${brand}.com${BASENAME}styles/dg-dashboard.css`;

const QuickStart = () => (
    <>
        <h3 id="quick-start">Quick start</h3>
        <p>To quickly add the dashboard theme to your project, include the snippets below in your project.</p>
    </>
);

const Css = () => (
    <>
        <h2 id="css">CSS</h2>
        <p>Copy-paste the stylesheet <CodeTags type="primary" code={"<link>"} /> into your <CodeTags type="primary" code={"<head>"} /> before all other stylesheets to load our CSS.</p>
        <ComponentPreview language="html" codeFigure>
            <link rel="stylesheet" href={styleUrl} />
            <link rel="stylesheet" href={dashboardStyleUrl} />
        </ComponentPreview>
    </>
);

const JavaScript = () => (
    <>
        <h2 id="javascript">JavaScript</h2>
        <p>The dashboard theme requires a separate script to run properly. So add the dashboard script below the <CodeTags type="secondary" code="scripts" /> at the bottom
        of your <CodeTags type="primary" code={"<body>"} /> tag like this:</p>
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
            <li><CodeTags type="secondary" code={"\"line\""} /></li>
            <li><CodeTags type="secondary" code={"\"bar\"/\"horizontalBar\""} /></li>
            <li><CodeTags type="secondary" code={"\"pie\"/\"doughnut\""} /></li>
        </ul>
        <QuickStart />
        {/* <Css /> */}
        <JavaScript />
    </>
);

export default Introduction;

/* For testing */
export { QuickStart, Css, JavaScript };
