import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTagsComponent from "@components/CodeTags";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Code tags use Akkurat Mono as the font. Akkurat Mono can be found in <Link to="/docs/core/typography">Typography</Link></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p>{"\n"}
                This is an example of inline code <CodeTagsComponent type="primary" code="property.function()" /> that
                is presented using code tags.{"\n"}
            </p>
            <p>{"\n"}
                This is another example of inline code <CodeTagsComponent type="secondary" code="property.function()" /> that
                is presented using code tags.{"\n"}
            </p>
        </ComponentPreview>
    </>
);

const CodeTags = () => (
    <DocContainer docToc >
        <p>Code tags are used to present inline code.</p>
        <Overview />
    </DocContainer>
);

export default CodeTags;

/* for testing */
export { Overview };
