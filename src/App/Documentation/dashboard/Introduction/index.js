import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, Property, DocContainer } from "#";

const BASENAME = process.env.basename;
const scriptUrl = `https://design.swedbankpay.com${BASENAME}scripts/px-script.js`;
const dashboardScriptUrl = `https://design.swedbankpay.com${BASENAME}scripts/px.dashboard.js`;
const styleUrl = `https://design.swedbankpay.com${BASENAME}styles/px.css`;
const dashboardStyleUrl = `https://design.swedbankpay.com${BASENAME}styles/px.dashboard.css`;

const QuickStart = () => (
    <>
        <h2 id="quick-start">Quick start</h2>
        <p>To quickly add the dashboard theme to your project, include the snippets below in your project.</p>
    </>
);

const Css = () => (
    <>
        <h2 id="css">CSS</h2>
        <p>Copy-paste the stylesheet <PrismCode className="language-html">{"<link>"}</PrismCode> into your <PrismCode className="language-html">{"<head>"}</PrismCode> before all other stylesheets to load our CSS.</p>
        <ComponentPreview language="html" codeFigure>
            <link rel="stylesheet" href={styleUrl} />
            <link rel="stylesheet" href={dashboardStyleUrl} />
        </ComponentPreview>
    </>
);

const JavaScript = () => (
    <>
        <h2 id="javascript">JavaScript</h2>
        <p>The dashboard theme requires a separate script to run properly. So add the dashboard script below the <Property value="px-script" /> at the bottom of your <PrismCode className="language-html">{"<body>"}</PrismCode> tag like this:</p>
        <ComponentPreview language="html" codeFigure>
            <script src={scriptUrl}></script>
            <script src={dashboardScriptUrl}></script>
        </ComponentPreview>
    </>
);

const Introduction = () => (
    <DocContainer>
        <p className="lead">Get started with the Swedbank Pay DesignGuide Dashboard theme.</p>
        <QuickStart />
        {/* <Css /> */}
        <JavaScript />
    </DocContainer>
);

export default Introduction;

/* For testing */
export { QuickStart, Css, JavaScript };
