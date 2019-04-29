import React from "react";

import { ComponentPreview, DocContainer, Property } from "#";

const AboutInit = () => (
    <>
        <h2 id="about-init">Initializing components</h2>
        <p>
            To initialize components use <Property value="px.{component_name}.init()" />. If <Property value=".init()" /> is called
            without arguments it will target all components with <Property value="{component_name}" /> on the page. To initialize only a select few send one or more ids as an argument.
            The init function accepts both a single string or an array of strings. These strings need to match an
            existing component id and will print warning messages if an argument is invalid.
        </p>
        <hr/>
        <ComponentPreview language="javascript" codeFigure >
            {"px.component.init();\n"}
            {"px.component.init(\"demo-component\");\n"}
            {"px.component.init([\"demo-component\"]);\n"}
            {"px.component.init([\"demo-component-1\", .. \"demo-component-x\"]);\n"}
        </ComponentPreview>
    </>
);

const JavascriptDocs = () => (
    <DocContainer docToc>
        <p className="lead">
            How to utilize our <Property value="px.{component_name}.init()" /> function.
        </p>
        <AboutInit />
    </DocContainer>
);

export default JavascriptDocs;

/* For testing */
export { AboutInit };
