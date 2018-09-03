import React from "react";

import { ComponentPreview, DocToc } from "#";

const OurFavicon = () => (
    <>
        <h2 id="our-favicon">Our favicon</h2>
        <p>Our favicon...</p>
        <ComponentPreview language="html" showCasePanel>
            <img src="/icons/android-chrome-96x96.png" alt="PayEx favicon"/>
        </ComponentPreview>
    </>
);

const FaviconsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">The PayEx favicon...</p>
        <OurFavicon />
    </div>
);

const Favicons = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <FaviconsText />
                <DocToc component={FaviconsText} />
            </div>
        </div>
    );
};

export default Favicons;

/* for testing */
export { OurFavicon, FaviconsText };
