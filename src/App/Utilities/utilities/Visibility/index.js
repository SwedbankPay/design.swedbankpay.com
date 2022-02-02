import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";

const Intro = () => (
    <>
        <p>Set the <Tag code type="secondary" text="visibility" /> of elements with our visibility utilities. These do not modify the <Tag code type="secondary" text="display" /> value at all and are helpful for hiding content from most users, but still keeping them for screen readers.</p>
        <p>Apply <Tag code type="secondary" text=".visible" /> or <Tag code type="secondary" text=".invisible" /> as needed.</p>
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
        <p className="lead">Control the visibility, without modifying the display, of elements with visibility utilities.</p>
        <Intro />
    </DocContainer>
);

export default Visibility;

/* For testing */
export { Intro };
