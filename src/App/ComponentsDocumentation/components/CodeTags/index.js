import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTagsComponent from "@components/CodeTags";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Code tags use Akkurat Mono as the font. Akkurat Mono can be found in <Link to="/identity/typography">Typography</Link>. Using <CodeTagsComponent type="primary" code="<code>" /> without
            any specied styling will result in the primary styling being applied. Chose which option that is more suitable for your project, or combine them to differentiate between different
            coding languages or styles.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p>{"\n"}
                This is an example of inline code using <code>default.styling</code> with default styling.{"\n"}
            </p>
            <p>{"\n"}
                This is an example of inline code <CodeTagsComponent type="primary" code="<ComponentName />" /> with specified class.{"\n"}
            </p>
            <p>{"\n"}
                This is another example of inline code <CodeTagsComponent type="secondary" code="property.function()" /> with another class to differentiate.{"\n"}
            </p>

            <p>{"\n"}
                <span className="code-tags code-tags-primary">{"<span>"}</span> can also be used to <span className="code-tags code-tags-secondary">{"presentCode()"}</span>.{"\n"}
            </p>
        </ComponentPreview>
    </>
);

const CodeTags = () => (
    <DocContainer docToc >
        <p className="lead">Code tags are used to present inline code.</p>
        <Overview />
    </DocContainer>
);

export default CodeTags;

/* for testing */
export { Overview };
