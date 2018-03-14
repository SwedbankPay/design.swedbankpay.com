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
            <PanelComponent
                title="Panel title"
                subTitle="Panel subtitle"
                footerText="Footer content goes here."
                footerBtnText="Footer button"
                footerCentered={true}
            >
                <p>Content here.</p>
            </PanelComponent>
        </ComponentPreview>
    </div>
);

const PanelHeaders = () => (
    <div>
        <h2 id="panel-headers">Panel headers</h2>
        <p>Two types of headers... <code className="token property">.panel-default</code> and <code className="token property">.panel-brand</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <PanelComponent title="Default panel" />{"\n\n"}
            <PanelComponent type="brand" title="Panel brand" />
        </ComponentPreview>
    </div>
);

const PanelText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Panels...</p>
        <Overview />
        <PanelHeaders />
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
