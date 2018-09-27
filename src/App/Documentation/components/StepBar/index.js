import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";
import StepBarComponent from "@/StepBar";

const BasicStepBar = () => {
    const items = [
        {
            title: "Step one",
            completed: true
        },
        {
            title: "Step two",
            active: true
        },
        {
            title: "Step three"
        },
        {
            title: "Step four"
        }
    ];

    return (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Add class <code className="token property">.step-bar</code> to an <PrismCode className="language-html">{"<ol>"}</PrismCode> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <StepBarComponent items={items} />
        </ComponentPreview>
    </>
    );
};

const HorizontalStepBar = () => {
    const items = [
        {
            title: "Step one",
            completed: true
        },
        {
            title: "Step two",
            active: true
        },
        {
            title: "Step three"
        },
        {
            title: "Step four"
        }
    ];

    return (
    <>
        <h2 id="horizontal-step-bar">Horizontal step bar</h2>
        <p>In addition to class <code className="token property">.step-bar</code>, add the extension class <code className="token property">.step-bar--horizontal</code> to an <PrismCode className="language-html">{"<ol>"}</PrismCode> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <StepBarComponent items={items} horizontal />
        </ComponentPreview>
    </>
    );
};

const StepBarText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Step Bar.</p>
        <BasicStepBar />
        <HorizontalStepBar />
    </div>
);

const StepBar = () => (
    <div className="doc-container">
        <div className="row">
            <StepBarText />
            <DocToc component={StepBarText} />
        </div>
    </div>
);

export default StepBar;

/* for testing */
export { BasicStepBar, HorizontalStepBar, StepBarText };
