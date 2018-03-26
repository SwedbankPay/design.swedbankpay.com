import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

const Overview = () => (
    <div>
        <h2 id="overview">Overview</h2>
        <p>Overview... <code className="token property">.status</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <p className="status status-default">Default</p>
            <p className="status status-brand">Brand</p>
            <p className="status status-neutral">Neutral</p>
            <p className="status status-success">Success</p>
            <p className="status status-warning">Warning</p>
            <p className="status status-danger">Danger</p>
        </ComponentPreview>
    </div>
);

const ExtendedUsage = () => (
    <div>
        <h2 id="extended-usage">Extended usage</h2>
        <p>Extended usage... <code className="token property">.status</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <h1 className="status status-default">Default</h1>
            <h2 className="status status-brand">Brand</h2>
            <h3 className="status status-neutral">Neutral</h3>
            <h4 className="status status-success">Success</h4>
            <h5 className="status status-warning">Warning</h5>
            <h6 className="status status-danger">Danger</h6>
        </ComponentPreview>
    </div>
);

const StatusText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Status...</p>
        <Overview />
        <ExtendedUsage />
    </div>
);

class Status extends Component {
    componentDidMount () {
    }

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
