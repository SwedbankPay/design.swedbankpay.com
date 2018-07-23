import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import { tooltip } from "$/px-script";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overview... <code className="token property">.tooltip</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <p data-tooltip="" data-tooltip-placement="top" data-tooltip-text="this is a tooltip test">TEST</p>
        </ComponentPreview>
    </>
);

const TooltipText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Tooltips...</p>
        <Overview />
    </div>
);

class Tooltip extends Component {
    componentDidMount () {
        tooltip.init();
    }

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
