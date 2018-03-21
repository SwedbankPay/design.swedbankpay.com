import React, { Component } from "react";
import PrismCode from "react-prism";

import ComponentPreview, { PxScript } from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

import InputGroupComponent from "../../../components/InputGroup";

const BasicExample = () => (
    <div>
        <h2 id="basic-example">Basic example</h2>
        <p></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <InputGroupComponent
                id="input-id-1"
                type="text"
                label="Name"
                placeholder="Name"
                prefixValue="Mr."
            /> {"\n\n"}
            <InputGroupComponent
                id="input-id-2"
                type="text"
                label="Email"
                placeholder="Email"
                prefixType="icon"
                prefixValue="email"
            /> {"\n\n"}
            <InputGroupComponent
                id="input-id-3"
                type="number"
                label="Amount"
                placeholder="Rounded to nearest $"
                prefixType="icon"
                prefixValue="attach_money"
                postfixValue=".00"
            /> {"\n\n"}
            <InputGroupComponent
                id="input-id-4"
                type="textarea"
                label="Notes"
                placeholder="Special requests"
                prefixType="icon"
                prefixValue="format_quote"
            />
        </ComponentPreview>
    </div>
);

const CheckboxesAndRadios = () => (
    <div>
        <h2 id="checkboxes-and-radios">Checkboxes and radios</h2>
        <p>Place any checkbox or radio option within an input group’s addon instead of text.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <div className="form-group">
                <div className="input-group">{"\n"}
                    <span className="input-group-addon">{"\n\t\t"}
                        <input type="checkbox"/>{"\n\t"}
                    </span>{"\n"}
                    <input type="text" className="form-control" />{"\n"}
                </div>
            </div>{"\n\n"}
            <div className="form-group">
                <div className="input-group">{"\n"}
                    <span className="input-group-addon">{"\n\t\t"}
                        <input type="radio"/>{"\n\t"}
                    </span>{"\n"}
                    <input type="text" className="form-control" />{"\n"}
                </div>
            </div>
        </ComponentPreview>
    </div>
);

const ButtonAddons = () => (
    <div>
        <h2 id="button-addons">Button addons</h2>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <InputGroupComponent
                type="text"
                prefixType="button"
                prefixValue="Button"
                prefixBtnColor="default"
            /> {"\n\n"}
            <InputGroupComponent
                type="text"
                postfixType="button"
                postfixValue="Button"
                postfixBtnColor="brand"
            /> {"\n\n"}
            <InputGroupComponent
                type="text"
                prefixType="button"
                prefixValue="Button"
                prefixBtnColor="default"
                postfixType="button"
                postfixValue="Button"
                postfixBtnColor="neutral"
            />
        </ComponentPreview>
    </div>
);

const WithSelect = () => (
    <div>
        <h2 id="with-select">With select</h2>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <InputGroupComponent
                type="select"
                selectOptions={["Option one", "Option two", "Option three"]}
                prefixValue="Options"
            />
        </ComponentPreview>
    </div>
);

const WithFeedbackIcon = () => (
    <div>
        <h2 id="with-feedback">With feedback</h2>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <InputGroupComponent
                id="input-with-feedback-1"
                type="text"
                label="Name"
                placeholder="Name"
                prefixValue="Mr."
                feedbackIcon="cancel"
            />
        </ComponentPreview>
    </div>
);

const ValidationStates = () => (
    <div>
        <h2 id="validation-states">Validation states</h2>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <InputGroupComponent
                type="text"
                validationState="success"
                placeholder="Name"
                prefixValue="Mr."
                value="Anderson"
                feedbackIcon="check_circle"
            /> {"\n\n"}
            <InputGroupComponent
                type="text"
                validationState="error"
                placeholder="Name"
                prefixValue="Agent"
                value="Smith"
                feedbackIcon="cancel"
            />
        </ComponentPreview>
    </div>
);

const InputGroupText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Input groups...</p>
        <BasicExample />
        {/* <CheckboxesAndRadios /> */}
        <ButtonAddons />
        <WithSelect />
        <WithFeedbackIcon />
        <ValidationStates />
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

/* for testing */
export { BasicExample, CheckboxesAndRadios, InputGroupText };
