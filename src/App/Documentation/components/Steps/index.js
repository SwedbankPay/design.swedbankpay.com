import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Property } from "#";
import StepsComponent from "@/Steps";

const BasicSteps = () => {
    const steps = [
        {
            title: "Step one",
            subtitle: "24.12.17 12:10",
            completed: true

        },
        {
            title: "Step two",
            ongoing: true,
            selected: true
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
            <p>Add class <Property value=".steps" /> to an <PrismCode className="language-html">{"<ol>"}</PrismCode> element.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <StepsComponent steps={steps} />
            </ComponentPreview>
        </>
    );
};

const VerticalSteps = () => {
    const steps = [
        {
            title: "Step one",
            completed: true
        },
        {
            title: "Step two",
            ongoing: true,
            selected: true
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
            <h2 id="vertical-steps">Vertical steps</h2>
            <p>In addition to class <Property value=".steps" />, add the extension class <Property value=".steps-vertical" /> to an <PrismCode className="language-html">{"<ol>"}</PrismCode> element.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <StepsComponent steps={steps} vertical />
            </ComponentPreview>
        </>
    );
};

const ClickableSteps = () => {
    const steps = [
        {
            title: "Step one",
            completed: true,
            clickable: true
        },
        {
            title: "Step two",
            ongoing: true,
            clickable: true
        },
        {
            title: "Step three",
            clickable: true
        },
        {
            title: "Step four",
            selected: true
        },
        {
            title: "Step Five"
        },
        {
            title: "Step Six"
        }
    ];

    return (
        <>
            <h2 id="clickable-steps">Clickable steps</h2>
            <p>
                Add an anchor element (<PrismCode className="language-html">{"<a>"}</PrismCode>) to the list item element ( <PrismCode className="language-html">{"<li>"}</PrismCode>).
                Ensure that all content within the list element is also inside the anchor element.
                <br/>Clickable steps is not working properly
            </p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <StepsComponent steps={steps} />
            </ComponentPreview>
        </>
    );
};

const StepsText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Steps.</p>
        <BasicSteps />
        <VerticalSteps />
        <ClickableSteps />
    </div>
);

class Steps extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <StepsText />
                    <DocToc component={StepsText} />
                </div>
            </div>
        );
    }
}

export default Steps;

/* for testing */
export { BasicSteps, VerticalSteps, ClickableSteps, StepsText };
