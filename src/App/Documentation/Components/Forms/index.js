import React, { Component } from "react";
import PrismCode from "react-prism";

import ComponentPreview, { PxScript } from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

// import { forms } from "../../../../px-script";
// import FormComponent from "../../../components/Form";

const Usage = () => (
    <div>
        <h2 id="usage">Usage</h2>
        <p>Static Forms</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
        </ComponentPreview>
    </div>
);

const Demo = () => (
    <div>
        <h2 id="demo">Demo</h2>
        <p>Live Forms</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
        </ComponentPreview>
    </div>
);

const FormsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Forms...</p>
        <Usage />
        <Demo />
    </div>
);

class Forms extends Component {
    componentDidMount () {
        // forms.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <FormsText />
                    <DocToc component={FormsText} />
                </div>
            </div>
        );
    }
}

export default Forms;
