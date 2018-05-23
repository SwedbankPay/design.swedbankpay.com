import React from "react";
import PrismCode from "react-prism";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import pkg from "../../../../../package.json";

const version = pkg.version;
const scriptUrl = `https://design.payex.com/${version}/scripts/px-script.js`;
const styleUrl = `https://design.payex.com/${version}/styles/px.css`;

const QuickStart = () => (
    <>
        <h2 id="quick-start">Quick start</h2>
        <p>To quickly add the designguide to your project, include the snippets below in your project.</p>
    </>
);

const Css = () => (
    <>
        <h2 id="css">CSS</h2>
        <p>Copy-paste the stylesheet <PrismCode className="language-html">{"<link>"}</PrismCode> into your <PrismCode className="language-html">{"<head>"}</PrismCode> before all other stylesheets to load our CSS.</p>
        <ComponentPreview language="html" codeFigure={true}>
            <link rel="stylesheet" href={styleUrl} />
        </ComponentPreview>
    </>
);

const JavaScript = () => (
    <>
        <h2 id="javascript">JavaScript</h2>
        <p>Many of our components require the use of JavaScript to function. Place the following <PrismCode className="language-html">{"<script>"}</PrismCode> tag near the end of your pages, right before the closing <PrismCode className="language-html">{"</body>"}</PrismCode> tag, to enable them.</p>
        <ComponentPreview language="html" codeFigure={true}>
            <script src={scriptUrl}></script>
        </ComponentPreview>
    </>
);

const StarterTemplate = () => (
    <>
        <h2 id="starter-template">Starter template</h2>
        <p>As a starting point you can use the following template</p>
        <ComponentPreview language="html" codeFigure={true}>
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <link rel="stylesheet" href={styleUrl} />

                    <title>Hello, PayEx!</title>
                </head>
                <body>
                    <h1>Hello, PayEx!</h1>
                    <script src={scriptUrl}></script>
                </body>
            </html>
        </ComponentPreview>
    </>
);

const IntroductionText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Get started with the PayEx DesignGuide.</p>
        <QuickStart />
        <Css />
        <JavaScript />
        {/* <StarterTemplate /> */}
    </div>
);

const Introduction = () => (
    <div className="doc-container">
        <div className="row">
            <IntroductionText />
            <DocToc component={IntroductionText} />
        </div>
    </div>
);

export default Introduction;

/* for testing */
export { QuickStart, Css, JavaScript, StarterTemplate, IntroductionText };
