import React from "react";
import Alert from "@components/Alert";
import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const Intro = () => (
    <>
        <p>Set the <CodeTags type="secondary" code="visibility" /> of elements with our visibility utilities. These do not modify the <CodeTags type="secondary" code="display" /> value at all and are helpful for hiding content from most users, but still keeping them for screen readers.</p>
        <p>Apply <CodeTags type="secondary" code=".visible" /> or <CodeTags type="secondary" code=".invisible" /> as needed.</p>
        <ComponentPreview language="html" codeFigure>
            <div className="visible">...</div>
            <div className="invisible">...</div>
        </ComponentPreview>
        <ComponentPreview language="css" codeFigure>
            {`
                .visible {
                    visibility: visible !important;
                }
                .invisible {
                    visibility: hidden !important;
                }
            `}
        </ComponentPreview>
    </>
);

const Visibility = () => (
    <DocContainer>
        <Alert type="danger" icon="error" text={<p><b>To be removed:</b> This documentation page will be removed.</p>}/>
        <p className="lead">Control the visibility, without modifying the display, of elements with visibility utilities.</p>
        <Intro />
    </DocContainer>
);

export default Visibility;

/* For testing */
export { Intro };
