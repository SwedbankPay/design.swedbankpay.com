import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";

const TextColors = () => (
    <>
        <h2 id="text-colors">Text colors</h2>
        <p>To use a color simply prepend <code className="token property">color-</code> to the desired color and add it to the element class attribute.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="color-brand">This text is color-brand.</p>
            <p className="color-default">This text is color-default.</p>
            <p className="color-neutral">This text is color-neutral.</p>
            <p className="color-success">This text is color-success.</p>
            <p className="color-warning">This text is color-warning.</p>
            <p className="color-danger">This text is color-danger.</p>
        </ComponentPreview>
        <h3>With <code className="token property">.text-muted</code></h3>
        <p>To get a muted effect on the color you are using, append a <PrismCode className="language-html">{"<span>"}</PrismCode>-element with the class <code className="token property">.text-muted</code> to the desired element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="color-brand">This text is color-brand, <span className="text-muted">with a muted ending.</span></p>
            <p className="color-default">This text is color-default, <span className="text-muted">with a muted ending.</span></p>
            <p className="color-neutral">This text is color-neutral, <span className="text-muted">with a muted ending.</span></p>
            <p className="color-success">This text is color-success, <span className="text-muted">with a muted ending.</span></p>
            <p className="color-warning">This text is color-warning, <span className="text-muted">with a muted ending.</span></p>
            <p className="color-danger">This text is color-danger, <span className="text-muted">with a muted ending.</span></p>
        </ComponentPreview>
    </>
);

const BackgroundColors = () => (
    <>
        <h2 id="background-colors">Background colors</h2>
        <p>To alter the background-color of an element, add the class <code className="token property">background-</code> appended with the desired color to get the desired background-color.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container">
                <div className="row">
                    <div className="col-12 bg-brand">.bg-brand</div>
                    <div className="col-12 bg-default">.bg-default</div>
                    <div className="col-12 bg-neutral">.bg-neutral</div>
                    <div className="col-12 bg-success">.bg-success</div>
                    <div className="col-12 bg-warning">.bg-warning</div>
                    <div className="col-12 bg-danger">.bg-danger</div>
                    <div className="col-12 bg-white">.bg-white</div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const ColorsText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Convey meaning through color with a handful of color utility classes.</p>
        <TextColors />
        <BackgroundColors />
    </div>
);

const Colors = () => (
    <>
        <div className="doc-container">
            <div className="row">
                <ColorsText />
                <DocToc component={ColorsText} />
            </div>
        </div>
    </>
);

export default Colors;

/* For testing */
export { TextColors, BackgroundColors, ColorsText };
