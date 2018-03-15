import React, { Component } from "react";
import PrismCode from "react-prism";

import ComponentPreview, { PxScript } from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

import InputGroupComponent from "../../../components/InputGroup";

const BasicExample = () => (
    <div>
        <h2 id="basic-example">Basic example</h2>
        <p></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <InputGroupComponent />
        </ComponentPreview>
    </div>
);

const Demo = () => (
    <div>
        <h2 id="demo">Demo</h2>
        <p>Live Forms</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
        </ComponentPreview>
    </div>
);

const InputGroupText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Input groups...</p>
        <BasicExample />
    </div>
);

class InputGroup extends Component {
    componentDidMount () {
        // forms.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <InputGroupText />
                    <DocToc component={InputGroupText} />
                </div>
            </div>
        );
    }
}

export default InputGroup;
