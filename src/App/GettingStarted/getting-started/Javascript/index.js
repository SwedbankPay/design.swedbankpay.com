import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Alert from "@components/Alert";
import CodeTags from "@components/CodeTags";

const AboutInit = () => (
    <>
        <h2 id="about-init">When to initialize</h2>
        <p>
            Our script runs <CodeTags type="secondary" code="dg.script.initAll();" /> on DOMContentLoaded making it so you have to
            run <CodeTags type="secondary" code="dg.<component_name>.init();" /> manually when a component is rendered after the event has fired.
        </p>
        <h3>Manual initializing</h3>
        <p>
            To initialize components use <CodeTags type="secondary" code="dg.<component_name>.init();" />. If the function is called
            without arguments it will target all components with class <CodeTags type="secondary" code="<component_name>" /> on the page. Initializing only one component can be done
            by passing an ID, it must match an existing components ID and will print a warning message if the value is invalid.
        </p>
        <p>
            If only one component is initialized then the init function will return one object. If several components are initialized
            it will return an array of objects.
        </p>
        <ComponentPreview language="javascript" codeFigure >
            {"dg.component.init();\n"}
            {"dg.component.init(\"demo-component-id\");\n"}
        </ComponentPreview>
        <Alert type="warning">
            Additional functions is available for some components. Read about them on the components documentation page.
        </Alert>
    </>
);

const JavascriptDocs = () => (
    <DocContainer docToc>
        <p className="lead">
            How to utilize our <CodeTags type="secondary" code="dg.<component_name>.init();" /> function.
        </p>
        <AboutInit />
    </DocContainer>
);

export default JavascriptDocs;

/* For testing */
export { AboutInit };
