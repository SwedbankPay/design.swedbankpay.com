import React from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import ColorPreview from "./ColorPreview";

const ColorPalette = () => (
    <>
        <h2 id="color-palette">Color palette</h2>
        <p>The PayEx DesignGuide color palette...</p>
        <ComponentPreview language="html" showCasePanel={true}>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="brand" hex="#2da944" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="default" hex="#3c3c3c" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="neutral" hex="#266c9a" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="success" hex="#2da944" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="warning" hex="#ff9f00" />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ColorPreview name="danger" hex="#cd2e00" />
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Usage = () => (
    <>
        <h2 id="usage">Usage</h2>
        <p>To use a color simply prepend <code className="token property">color-</code> to the desired color and add it to the element class attribute.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <p className="color-brand">This text is color-brand.</p>
            <p className="color-default">This text is color-default.</p>
            <p className="color-neutral">This text is color-neutral.</p>
            <p className="color-success">This text is color-success.</p>
            <p className="color-warning">This text is color-warning.</p>
            <p className="color-danger">This text is color-danger.</p>
        </ComponentPreview>
    </>
);

const ColorText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Here there be colors...</p>
        <ColorPalette />
        <Usage />
    </div>
);

const Color = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <ColorText />
                <DocToc component={ColorText} />
            </div>
        </div>
    );
};

export default Color;

/* for testing */
export { ColorPalette, Usage, ColorText };
