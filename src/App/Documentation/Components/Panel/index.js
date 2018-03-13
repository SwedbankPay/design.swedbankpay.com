import React, { Component } from "react";
import PrismCode from "react-prism";

import ComponentPreview, { PxScript } from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import PanelComponent from "../../../components/Panel";

const Overview = () => (
    <div>
        <h2 id="overview">Overview</h2>
        <p>Panel...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <PanelComponent type="brand" title="Panel title" subTitle="Panel sub title">
                <p>Content here.</p>
            </PanelComponent>
        </ComponentPreview>
    </div>
);

const Demo = () => (
    <div>
        <h2 id="demo">Demo</h2>
        <p>Default Panel</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <PanelComponent />
        </ComponentPreview>
    </div>
);

const PanelText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Panels...</p>
        <Overview />
        {/* <Demo /> */}
    </div>
);

class Panel extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <PanelText />
                    <DocToc component={PanelText} />
                </div>
            </div>
        );
    }
}

export default Panel;
