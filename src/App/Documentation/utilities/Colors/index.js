import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property } from "#";
import Alert from "@/Alert";

const TextColors = () => (
    <>
        <h2 id="text-colors">Text colors</h2>
        <Alert type="danger">
            <h5>Deprecated classname</h5>
            <p>The class <Property value=".color-{name}" /> has been deprecated, and will be removed.</p>
        </Alert>
        <p>To use a color simply prepend <Property value=".text-{name}" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="text-brand">.text-brand</p>
            <p className="text-default">.text-default</p>
            <p className="text-neutral">.text-neutral</p>
            <p className="text-success">.text-success</p>
            <p className="text-warning">.text-warning</p>
            <p className="text-danger">.text-danger</p>
            <p className="text-white bg-default">.text-white</p>
            <p className="text-black-50">.text-black-50</p>
            <p className="text-white-50 bg-default">.text-white-50</p>
        </ComponentPreview>

        <h3>With <Property value=".text-muted" /></h3>
        <p>To get a muted effect on the color you are using, append a <PrismCode className="language-html">{"<span>"}</PrismCode>-element with the class <Property value=".text-muted" /> to the desired element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="text-brand">.text-brand <span className="text-muted">.text-muted</span></p>
            <p className="text-default">.text-default <span className="text-muted">.text-muted</span></p>
            <p className="text-neutral">.text-neutral <span className="text-muted">.text-muted</span></p>
            <p className="text-success">.text-success <span className="text-muted">.text-muted</span></p>
            <p className="text-warning">.text-warning <span className="text-muted">.text-muted</span></p>
            <p className="text-danger">.text-danger <span className="text-muted">.text-muted</span></p>
            <p className="text-white bg-default">.text-white <span className="text-muted">.text-muted</span></p>
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
                    <div className="col-12 text-white bg-brand p-2">.bg-brand</div>
                    <div className="col-12 text-white bg-default p-2">.bg-default</div>
                    <div className="col-12 text-white bg-neutral p-2">.bg-neutral</div>
                    <div className="col-12 text-white bg-success p-2">.bg-success</div>
                    <div className="col-12 text-white bg-warning p-2">.bg-warning</div>
                    <div className="col-12 text-white bg-danger p-2">.bg-danger</div>
                    <div className="col-12 bg-white p-2">.bg-white</div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Colors = () => (
    <DocContainer docToc>
        <p className="lead">Convey meaning through color with a handful of color utility classes.</p>
        <TextColors />
        <BackgroundColors />
    </DocContainer>
);

export default Colors;

/* For testing */
export { TextColors, BackgroundColors };
