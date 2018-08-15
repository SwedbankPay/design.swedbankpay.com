import React from "react";

import { ComponentPreview } from "#";

const Intro = () => (
    <>
        <p>Set the <code className="token property">visibility</code> of elements with our visibility utilities. These do not modify the <code className="token property">display</code> value at all and are helpful for hiding content from most users, but still keeping them for screen readers.</p>
        <p>Apply <code className="token property">.visible</code> or <code className="token property">.invisible</code> as needed.</p>
        <ComponentPreview language="html" codeFigure>
            <div className="visible">...</div>
            <div className="invisible">...</div>
        </ComponentPreview>
        <ComponentPreview language="css" codeFigure>
            {`
                // Class
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

/* for testing */
export { Intro, VisibilityText };
