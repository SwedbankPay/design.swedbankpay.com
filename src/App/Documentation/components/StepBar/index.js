import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";
import StepBarComponent from "@/StepBar";

const BasicStepBar = () => {
    const items = [
        {
            title: "Step one"

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
        <p>Add class <code className="token property">.step-bar</code> to a containing <PrismCode className="language-html">{"<ol>"}</PrismCode> element and nest a <PrismCode className="language-html">{"<a>"}</PrismCode> or <PrismCode className="language-html">{"<span>"}</PrismCode> element inside the <PrismCode className="language-html">{"<li>"}</PrismCode> elements.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <StepBarComponent items={items} />
        </ComponentPreview>
    </>
    );
};

const StepBarText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Step Bar.</p>
        <BasicStepBar />
    </div>
);

const StepBar = () => (
    <div className="doc-container">
        <div className="row">
            <StepBar />
            <DocToc component={StepBarText} />
        </div>
    </div>
);

export default StepBar;

/* for testing */
export { BasicStepBar, StepBarText };
