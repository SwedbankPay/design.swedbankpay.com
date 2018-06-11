import React from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>Change the value of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"><code className="token property">display</code> property</a> with our responsive display utility classes. We purposely support only a subset of all possible values for <code className="token property">display</code>. Classes can be combined for various effects as you need.</p>
    </>
);

const DisplayText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</p>
        <HowItWorks />
    </div>
);

const Display = () => (
    <>
        <div className="doc-container">
            <div className="row">
                <DisplayText />
                <DocToc component={DisplayText} />
            </div>
        </div>
    </>
);

export default Display;

/* for testing */
export { HowItWorks, DisplayText };
