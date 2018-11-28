import React, { Component } from "react";

import { ComponentPreview, DocContainer, Property } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overview... <Property value=".status" />...</p>
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
    </>
);

const ExtendedUsage = () => (
    <>
        <h2 id="extended-usage">Extended usage</h2>
        <p>Extended usage... <Property value=".status" />...</p>
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
                <p className="lead">Status...</p>
                <Overview />
                <ExtendedUsage />
            </DocContainer>
        );
    }
}

export default Status;

/* For testing */
export { Overview, ExtendedUsage };
