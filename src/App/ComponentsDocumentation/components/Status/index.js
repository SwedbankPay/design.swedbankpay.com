import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

import { showcaseStatusComponent, leadingExample, trailingExample } from "./constants";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Be aware of what color you use when deciding what message you want to convey. A completion status should not use a warning or danger status,
            that is why <CodeTags type="secondary" code=".status-success" /> exists. <b>NOTE:</b> Be careful not to rely solely on the color of the status icon to convey
            your message.
        </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={showcaseStatusComponent} >
        </ComponentPreview>
    </>
);

const ExampleUse = () => (
    <>
        <h2 id="example-use">Example of use</h2>
        <h3>Leading example</h3>
        <ComponentPreview language="html" showCasePanel >
            {leadingExample}
        </ComponentPreview>
        <h3>Trailing example</h3>
        <ComponentPreview language="html" showCasePanel >
            {trailingExample}
        </ComponentPreview>
    </>
);

const ExtendedUsage = () => (
    <>
        <h2 id="extended-usage">Extended usage</h2>
        <p>
            The status component inherits the size of its direct parent.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="d-flex flex-column">
                <h1 className="status status-neutral">Neutral</h1>
                <h2 className="status status-success">Success</h2>
                <h3 className="status status-warning">Warning</h3>
                <h4 className="status status-inactive">Inactive</h4>
                <h5 className="status status-danger">Danger</h5>
            </div>
        </ComponentPreview>
    </>
);

const Status = () => (
    <DocContainer>
        <p className="lead">
            The status component is a good way to convey to the user the state of something.
        </p>
        <Overview />
        <ExampleUse />
        <ExtendedUsage />
    </DocContainer>
);

export default Status;

/* For testing */
export { Overview, ExampleUse, ExtendedUsage };
