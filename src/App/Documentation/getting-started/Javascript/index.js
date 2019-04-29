import React from "react";

import { ComponentPreview, DocContainer, Property, PxScript } from "#";
import Alert from "@/Alert";

const AboutInit = () => (
    <>
        <h2 id="about-init">When to initialize</h2>
        <p>
            Our script runs <PxScript component="script" func="initAll" /> on DOMContentLoaded. Making it so you have to
            run <PxScript component="{component_name}" func="init" /> manually when that component is rendered.
        </p>
        <h3>Manual initializing</h3>
        <p>
            To initialize components use <PxScript component="{component_name}" func="init" params={["\"test-2\"", "test-3"]} />. If the function is called
            without arguments it will target all components with class <Property value="{component_name}" /> on the page. Initializing only a select few can be done
            by sending one or more ids as an argument. The init function accepts both a single string or an array of strings. These strings need to match an
            existing component id and will print warning messages if an argument is invalid.
        </p>
        <p>
            All inits return the same thing; an array containing an object reference to the element(s) that was passed.
        </p>
        <ComponentPreview language="javascript" codeFigure >
            {"px.component.init();\n"}
            {"px.component.init(\"demo-component\");\n"}
            {"px.component.init([\"demo-component\"]);\n"}
            {"px.component.init([\"demo-component-1\", .. \"demo-component-x\"]);\n"}
        </ComponentPreview>
        <Alert type="warning">
            Additional functions may be available for some components. Read about them on the components documentation page.
        </Alert>
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
