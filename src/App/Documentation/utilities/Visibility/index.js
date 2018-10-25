import React from "react";

import { ComponentPreview, Property } from "#";

const Intro = () => (
    <>
        <p>Set the <Property value="visibility" /> of elements with our visibility utilities. These do not modify the <Property value="display" /> value at all and are helpful for hiding content from most users, but still keeping them for screen readers.</p>
        <p>Apply <Property value=".visible" /> or <Property value=".invisible" /> as needed.</p>
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

const VisibilityText = () => (
    <div className="col-12 doc-body">
        <p className="lead">Control the visibility, without modifying the display, of elements with visibility utilities.</p>
        <Intro />
    </div>
);

const Visibility = () => (
    <>
        <div className="doc-container">
            <div className="row">
                <VisibilityText />
            </div>
        </div>
    </>
);

export default Visibility;

/* For testing */
export { Intro, VisibilityText };
