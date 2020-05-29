import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const BASENAME = process.env.basename;
const brand = process.env.brand;
const brandTitle = process.env.brandTitle;
const scriptUrl = `https://design.${brand}.com${BASENAME}scripts/dg.js`;
const styleUrl = `https://design.${brand}.com${BASENAME}styles/dg-style.css`;

const QuickStart = () => (
    <>
        <h2 id="quick-start">Quick start</h2>
        <p>To quickly add the {brandTitle} DesignGuide to your project, include the snippets below in your project.</p>
    </>
);

const Css = () => (
    <>
        <h2 id="css">CSS</h2>
        <p>Copy-paste the stylesheet <CodeTags type="primary" code={"<link>"} /> into your <CodeTags type="primary" code={"<head>"} /> before all other stylesheets to load our CSS.</p>
        <ComponentPreview language="html" codeFigure>
            <link rel="stylesheet" href={styleUrl} />
        </ComponentPreview>
    </>
);

const JavaScript = () => (
    <>
        <h2 id="javascript">JavaScript</h2>
        <p>Many of our components require the use of JavaScript to function. Place the following <CodeTags type="primary" code={"<script>"} /> tag near the end of your pages, right before the
        closing <CodeTags type="primary" code={"</body>"} /> tag, to enable them.</p>
        <ComponentPreview language="html" codeFigure>
            <script src={scriptUrl}></script>
        </ComponentPreview>
    </>
);

const Introduction = () => (
    <DocContainer docToc>
        <p className="lead">Getting started with the {brandTitle} DesignGuide.</p>
        <QuickStart />
        <Css />
        <JavaScript />
    </DocContainer>
);

export default Introduction;

/* For testing */
export { QuickStart, Css, JavaScript };
