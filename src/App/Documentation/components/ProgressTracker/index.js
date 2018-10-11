import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, DeprecatedComponentAlert, Property } from "#";
import ProgressTrackerComponent from "@/ProgressTracker";

const BasicProgressTracker = () => {
    const items = [
        {
            title: "Registration",
            href: "#"
        },
        {
            title: "Confirmation",
            active: true
        },
        {
            title: "Payment",
            href: "#"
        },
        {
            title: "Receipt",
            href: "#"
        }
    ];

    return (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Add class <Property value=".progress-tracker" /> to a containing <PrismCode className="language-html">{"<ol>"}</PrismCode> element and nest a <PrismCode className="language-html">{"<a>"}</PrismCode> or <PrismCode className="language-html">{"<span>"}</PrismCode> element inside the <PrismCode className="language-html">{"<li>"}</PrismCode> elements.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ProgressTrackerComponent items={items} />
        </ComponentPreview>
    </>
    );
};

const SmallProgressTracker = () => {
    const items = [
        {
            title: "Registration",
            href: "#"
        },
        {
            title: "Confirmation",
            href: "#"
        },
        {
            title: "Payment",
            active: true
        },
        {
            title: "Receipt",
            href: "#"
        }
    ];

    return (
        <>
            <h2 id="small-progress-tracker">Small progress tracker</h2>
            <p>Add class <Property value=".progress-tracker-sm" /> to the containing <PrismCode className="language-html">{"<ol>"}</PrismCode> element for a smaller version of the progress tracker component.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <ProgressTrackerComponent small items={items} />
            </ComponentPreview>
        </>
    );
};

const DisabledProgressTracker = () => {
    const items = [
        {
            title: "Registration",
            href: "#"
        },
        {
            title: "Confirmation",
            href: "#"
        },
        {
            title: "Payment",
            active: true
        },
        { title: "Receipt" }
    ];

    return (
        <>
            <h2 id="disable-a-step">Disable a step</h2>
            <p>To disable a step in the progress tracker, simply use a <PrismCode className="language-html">{"<span>"}</PrismCode> element within the <PrismCode className="language-html">{"<li>"}</PrismCode> element (will not work with <Property value=".active" />).</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <ProgressTrackerComponent items={items} />
            </ComponentPreview>
        </>
    );
};

const ProgressTrackerText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <DeprecatedComponentAlert />
        <p className="lead">Progress trackers are a good way to display the users current progress in a given path, while also showing the user the remaining steps. This is usually used when the user are expected to complete several steps in a process.</p>
        <BasicProgressTracker />
        <SmallProgressTracker />
        <DisabledProgressTracker />
    </div>
);

const ProgressTracker = () => (
    <div className="doc-container">
        <div className="row">
            <ProgressTrackerText />
            <DocToc component={ProgressTrackerText} />
        </div>
    </div>
);

export default ProgressTracker;

/* For testing */
export { BasicProgressTracker, SmallProgressTracker, DisabledProgressTracker, ProgressTrackerText };
