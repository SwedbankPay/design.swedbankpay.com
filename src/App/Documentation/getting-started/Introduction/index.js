import React from "react";
import PrismCode from "react-prism";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import pkg from "../../../../../package.json";

const version = pkg.version;

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
            <link rel="stylesheet" href={`https://payex.github.io/design.payex.com/${version}/styles/px.css`} />
        </ComponentPreview>
    </>
);

const JavaScript = () => (
    <>
        <h2 id="javascript">JavaScript</h2>
        <p>Many of our components require the use of JavaScript to function. Place the following <PrismCode className="language-html">{"<script>"}</PrismCode> near the end of your pages, right before the closing <PrismCode className="language-html">{"</script>"}</PrismCode> tag, to enable them.</p>
        <ComponentPreview language="html" codeFigure={true}>
            <link rel="stylesheet" href={`https://payex.github.io/design.payex.com/${version}/scripts/px.js`} />
        </ComponentPreview>
    </>
);

const IntroductionText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Get started with the PayEx DesignGuide.</p>
        <QuickStart />
        <Css />
        <JavaScript />
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
