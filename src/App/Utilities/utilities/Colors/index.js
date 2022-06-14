import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Link from "@components/Link";

const TextColors = () => (
    <>
        <h2 id="text-colors">Text colors</h2>
        <p>To set the color of a text, use any of the following utility classes.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="text-default p-2">.text-default</p>
            <p className="text-muted p-2">.text-muted</p>
            <p className="text-white p-2">.text-white</p>
            <p className="text-danger p-2">.text-danger</p>
            <p className="text-warning p-2">.text-warning</p>
            <p className="text-neutral p-2">.text-neutral</p>
            <p className="text-success p-2">.text-success</p>
        </ComponentPreview>
    </>
);

const BackgroundColors = () => (
    <>
        <h2 id="background-colors">Background colors</h2>
        <p>To alter the background-color of an element, use any of the following utility classes.</p>
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
        <p className="lead">We have a few color utility classes. For more information about our colors refer to the <a href="../identity/color">Color section</a> under Identity.</p>
        <TextColors />
        <BackgroundColors />
    </DocContainer>
);

export default Colors;

/* For testing */
export { TextColors, BackgroundColors };
