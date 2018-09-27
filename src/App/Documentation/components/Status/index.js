import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overview... <code className="token property">.status</code>...</p>
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
        <p>Extended usage... <code className="token property">.status</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <h1 className="status status-default">Default</h1>
            <h2 className="status status-neutral">Neutral</h2>
            <h3 className="status status-success">Success</h3>
            <h4 className="status status-warning">Warning</h4>
            <h5 className="status status-danger">Danger</h5>
        </ComponentPreview>
    </>
);

const StatusText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Status...</p>
        <Overview />
        <ExtendedUsage />
    </div>
);

class Status extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <StatusText />
                    <DocToc component={StatusText} />
                </div>
            </div>
        );
    }
}

export default Status;

/* for testing */
export { Overview, ExtendedUsage, StatusText };
