import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const TextColors = () => (
    <>
        <h2 id="text-colors">Text colors</h2>
        <p>To use a color simply prepend <CodeTags type="secondary" code=".text-{name}" />.</p>
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

        <h3>With <CodeTags type="secondary" code=".text-muted" /></h3>
        <p>To get a muted effect on the color you are using, append a <CodeTags type="primary" code={"<span>"} />-element with the class <CodeTags type="secondary" code=".text-muted" /> to the desired element.</p>
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
        <p>To alter the background-color of an element, add the class <CodeTags type="secondary" code="background-{name}" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-default bg-brand p-3">.bg-white</div>
                    <div className="col-12 text-default bg-primary p-3">.bg-primary</div>
                    <div className="col-12 text-default bg-secondary p-3">.bg-secondary</div>
                    <div className="col-12 text-default bg-tertiary p-3">.bg-tertiary</div>
                    <div className="col-12 text-default bg-quaternary p-3">.bg-quaternary</div>
                    <div className="col-12 text-default bg-danger p-3">.bg-danger</div>
                    <div className="col-12 text-default bg-warning p-3">.bg-warning</div>
                    <div className="col-12 text-default bg-success p-3">.bg-success</div>
                    <div className="col-12 text-default bg-neutral p-3">.bg-neutral</div>
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
