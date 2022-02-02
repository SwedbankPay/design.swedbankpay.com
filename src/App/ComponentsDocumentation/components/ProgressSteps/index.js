import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import StepsComponent from "@components/Steps";
import Tag from "@components/Tag";

const BasicSteps = () => {
    const steps = [
        {
            title: "Step one",
            subtitle: "Authentication",
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
            <p>
                The standard steps component will render horizontally and scale according to the size of its parent.
            </p>
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
            <p>
                If you wish to use steps vertically you can add <Tag code type="secondary" text=".steps-vertical" /> to the <Tag code type="primary" text={"<div>"} /> element.
            </p>
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
            clickable: true,
            selected: true
        },
        {
            title: "Step four",
            clickable: true
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
                Add an anchor element (<Tag code type="primary" text={"<a>"} />) to the list item element ( <Tag code type="primary" text={"<li>"} />).
                Ensure that all content within the list element is also inside the anchor element.
            </p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <StepsComponent steps={steps} />
            </ComponentPreview>
        </>
    );
};

const Steps = () => (
    <DocContainer docToc>
        <p className="lead">
            Use steps to visualize the users progress through a process.
        </p>
        <BasicSteps />
        <VerticalSteps />
        <ClickableSteps />
    </DocContainer>
);

export default Steps;

/* for testing */
export { BasicSteps, VerticalSteps, ClickableSteps };
