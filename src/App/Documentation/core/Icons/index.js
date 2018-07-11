import React from "react";
import PrismCode from "react-prism";

import ComponentPreview from "#/ComponentPreview";
import DocToc from "#/DocToc";

const Usage = () => (
    <>
        <h2 id="usage">Usage</h2>
        <p>To use an icon, provide the following markup: <PrismCode className="language-html">{"<i class=\"material-icons\">[ICON NAME]</i>"}</PrismCode>.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <i className="material-icons">android</i>{"\n"}
            <i className="material-icons">contact_support</i>{"\n"}
            <i className="material-icons">face</i>{"\n"}
            <i className="material-icons">star</i>{"\n"}
            <i className="material-icons">warning</i>{"\n"}
        </ComponentPreview>
        {/* <h3>Sizes</h3>
        <p>Material icons also come in different sizes, the available ones are <code className="token property">.tiny</code>, <code className="token property">.small</code>, <code className="token property">.medium</code> and <code className="token property">.large</code>.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <i className="material-icons tiny">android</i>{"\n"}
            <i className="material-icons small">android</i>{"\n"}
            <i className="material-icons">android</i>{"\n"}
            <i className="material-icons medium">android</i>{"\n"}
            <i className="material-icons large">android</i>{"\n"}
        </ComponentPreview> */}
    </>
);

const IconsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">The PayEx DesignGuide includes Google{"'"}s material icons. For a full overview of the available icons please visit <a href="https://material.io/tools/icons/">this site</a>.</p>
        <Usage />
    </div>
);

const Icons = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <IconsText />
                <DocToc component={IconsText} />
            </div>
        </div>
    );
};

export default Icons;

/* for testing */
export { Usage, IconsText };
