import React, { Component } from "react";

import { ComponentPreview, DocToc, Attribute, Icon } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Action lists.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <div className="action-list">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#"><Icon icon="account_circle"/>Action #1</a>{"\n"}
                    <a href="#"><Icon icon="account_circle"/>Action #2</a>{"\n"}
                    <a href="#"><Icon icon="account_circle"/>Action #3</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
    </>
);

const TooltipText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Action lists...</p>
        <Overview />
    </div>
);

class Tooltip extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <TooltipText />
                    <DocToc component={TooltipText} />
                </div>
            </div>
        );
    }
}

export default Tooltip;

/* for testing */
export { Overview, TooltipText };
