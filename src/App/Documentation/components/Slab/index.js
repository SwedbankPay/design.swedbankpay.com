import React from "react";

import { ComponentPreview, DocToc, ExperimentalComponentAlert, Property } from "#";

const DefaultSlab = () => (
    <>
        <h2 id="default-well">Default well</h2>
        <p>Use the <Property value=".well" /> as a simple effect on an element to give it an inset effect.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="well">
                Look ma, im in a well!
            </div>
        </ComponentPreview>
    </>
);

const SlabSizes = () => (
    <>
        <h2 id="well-sizes">Well sizes</h2>
        <p>Use the two optional <Property value=".well-sm" /> and <Property value=".well-lg" /> classes to control padding and rounded corners.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="well well-sm">
                Look ma, im in a small well!
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="well well-lg">
                Look ma, im in a large well!
            </div>
        </ComponentPreview>
    </>
);

const SlabText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Well well well, look what the cat dragged in...</p>
        <DefaultSlab />
        <SlabSizes />
    </div>
);

const Well = () => (
    <div className="doc-container">
        <div className="row">
            <SlabText />
            <DocToc component={SlabText} />
        </div>
    </div>
);

export default Well;

/* For testing */
export { DefaultSlab, SlabSizes, SlabText };
