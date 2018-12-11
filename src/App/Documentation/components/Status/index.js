import React, { Component } from "react";

import { ComponentPreview, DocContainer, Property } from "#";
import Alert from "@/Alert";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Be aware of what color you use when deciding what message you want to convey. A completion status should not use a warning or danger status,
            that is why <Property value=".status-success" /> exists.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure removeList>
            <ul className="list">
                <li>
                    <span className="status status-default">Default</span>
                </li>
                <li>
                    <span className="status status-neutral">Neutral</span>
                </li>
                <li>
                    <span className="status status-success">Success</span>
                </li>
                <li>
                    <span className="status status-warning">Warning</span>
                </li>
                <li>
                    <span className="status status-danger">Danger</span>
                </li>
            </ul>
        </ComponentPreview>
        <Alert type="warning">
            <h5>Visual impairments and colors</h5>
            <p>
                Be careful not to rely soley on the color of the status icon to convey your message.
            </p>
        </Alert>
    </>
);

const ExtendedUsage = () => (
    <>
        <h2 id="extended-usage">Extended usage</h2>
        <p>
            The status component inherits the size of its direct parent.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <h1 className="status status-default">Default</h1>
            <h2 className="status status-neutral">Neutral</h2>
            <h3 className="status status-success">Success</h3>
            <h4 className="status status-warning">Warning</h4>
            <h5 className="status status-danger">Danger</h5>
        </ComponentPreview>
    </>
);

class Status extends Component {
    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    The status component is a good way to convey to the user the state of something.
                </p>
                <Overview />
                <ExtendedUsage />
            </DocContainer>
        );
    }
}

export default Status;

/* For testing */
export { Overview, ExtendedUsage };
