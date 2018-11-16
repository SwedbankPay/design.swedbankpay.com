import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Property } from "#";

const TextColors = () => (
    <>
        <h2 id="text-colors">Text colors</h2>
        <p>To use a color simply prepend <Property value="color-{name}" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="color-brand">This text is color-brand.</p>
            <p className="color-default">This text is color-default.</p>
            <p className="color-neutral">This text is color-neutral.</p>
            <p className="color-success">This text is color-success.</p>
            <p className="color-warning">This text is color-warning.</p>
            <p className="color-danger">This text is color-danger.</p>
        </ComponentPreview>
        <h3>With <Property value=".text-muted" /></h3>
        <p>To get a muted effect on the color you are using, append a <PrismCode className="language-html">{"<span>"}</PrismCode>-element with the class <Property value=".text-muted" /> to the desired element.</p>
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
        <p>To alter the background-color of an element, add the class <Property value="background-{name}" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container">
                <div className="row">
                    <div className="col-12 bg-brand p-2">.bg-brand</div>
                    <div className="col-12 bg-default p-2">.bg-default</div>
                    <div className="col-12 bg-neutral p-2">.bg-neutral</div>
                    <div className="col-12 bg-success p-2">.bg-success</div>
                    <div className="col-12 bg-warning p-2">.bg-warning</div>
                    <div className="col-12 bg-danger p-2">.bg-danger</div>
                    <div className="col-12 bg-white p-2">.bg-white</div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const ColorsText = () => (
    <div className="col-lg-10 doc-body">
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
