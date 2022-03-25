import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import { skipLinkShowcase } from "./constants";

import CodeTags from "@components/CodeTags";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={skipLinkShowcase} codeFigure/>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer Documentation</h2>
        <p>It is important to place the skip link in the top level of your navigation tree. The skip link should be the first thing users can tab to.</p>
        <p>Remember to include the correct <CodeTags type="primary" code="href"/> path to your skip link.</p>
    </section>
);

const SkipLink = () => (
    <DocContainer>
        <p className="lead">Use the skip link component to help keyboard-only users skip to the main content on a page.</p>
        <Overview/>
        <DeveloperDocumentation/>
    </DocContainer>
);

export default SkipLink;

/* For testing */
export { Overview, DeveloperDocumentation};
