import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, Property } from "@docutils";

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
        <h3 id="css">CSS</h3>
        <p>Copy-paste the stylesheet <PrismCode className="language-html">{"<link>"}</PrismCode> into your <PrismCode className="language-html">{"<head>"}</PrismCode> before all other stylesheets to load our CSS.</p>
        <ComponentPreview language="html" codeFigure>
            <link rel="stylesheet" href={styleUrl} />
            <link rel="stylesheet" href={dashboardStyleUrl} />
        </ComponentPreview>
    </>
);

const JavaScript = () => (
    <>
        <h3 id="javascript">JavaScript</h3>
        <p>The dashboard theme requires a separate script to run properly. So add the dashboard script below the <Property value="scripts" /> at the bottom of your <PrismCode className="language-html">{"<body>"}</PrismCode> tag like this:</p>
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
            <li><code className="token string">{"\"line\""}</code></li>
            <li><code className="token string">{"\"bar\"/\"horizontalBar\""}</code></li>
            <li><code className="token string">{"\"pie\"/\"doughnut\""}</code></li>
        </ul>
        <QuickStart />
        {/* <Css /> */}
        <JavaScript />
    </>
);

export default Introduction;

/* For testing */
export { QuickStart, Css, JavaScript };
