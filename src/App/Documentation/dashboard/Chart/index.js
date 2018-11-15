import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";

const Overview = () => (
    <>
        <h2 id="quick-start">Quick start</h2>
        <p>To quickly add the dashboard theme to your project, include the snippets below in your project.</p>
        <ComponentPreview language="html" codeFigure>
            <canvas />
        </ComponentPreview>
    </>
);

const ChartText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Get started with the PayEx DesignGuide Dashboard theme.</p>
        <Overview />
    </div>
);

class Chart extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ChartText />
                    <DocToc component={ChartText} />
                </div>
            </div>
        );
    }
}

export default Chart;

/* For testing */
export { Overview, ChartText };
