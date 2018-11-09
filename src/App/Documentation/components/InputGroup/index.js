import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import InputGroupComponent from "@/InputGroup";

const BasicExample = () => (
    <>
        <h2 id="basic-example">Basic example</h2>
        <p>Basic input group...</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
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
    </>
);

const CheckboxesAndRadios = () => (
    <>
        <h2 id="checkboxes-and-radios">Checkboxes and radios</h2>
        <p>Place any checkbox or radio option within an input group’s addon instead of text.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
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
    </>
);

const ButtonAddons = () => (
    <>
        <h2 id="button-addons">Button addons</h2>
        <p>Addons...</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <InputGroupComponent
                type="text"
                postfixType="button"
                postfixValue="Button"
                postfixBtnColor="primary"
            /> {"\n\n"}
            <InputGroupComponent
                type="text"
                prefixType="button"
                prefixValue="Button"
                prefixBtnColor="secondary"
                postfixType="button"
                postfixValue="Button"
                postfixBtnColor="danger"
            />
        </ComponentPreview>
    </>
);

const WithSelect = () => (
    <>
        <h2 id="with-select">With select</h2>
        <p>Select...</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <InputGroupComponent
                type="select"
                selectOptions={["Bounty hunter", "Smuggler", "Jedi"]}
                prefixValue="Profession"
            />
        </ComponentPreview>
    </>
);

const WithFeedbackIcon = () => (
    <>
        <h2 id="with-feedback">With feedback</h2>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <InputGroupComponent
                id="input-with-feedback-1"
                type="text"
                label="Name"
                placeholder="Name"
                prefixValue="Mr."
                feedbackIcon="cancel"
            />
        </ComponentPreview>
    </>
);

const ValidationStates = () => (
    <>
        <h2 id="validation-states">Validation states</h2>
        <p>Validation...</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <InputGroupComponent
                type="text"
                validationState="success"
                placeholder="Name"
                prefixValue="Mr."
                defaultValue="Anderson"
            /> {"\n\n"}
            <InputGroupComponent
                type="text"
                validationState="error"
                placeholder="Name"
                prefixValue="Agent"
                defaultValue="Smith"
            />
        </ComponentPreview>
    </>
);

const Disabled = () => (
    <>
        <h2 id="disabled">Disabled</h2>
        <p>Disabled blabla...</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <InputGroupComponent
                id="input-id-3"
                type="number"
                label="Amount"
                placeholder="Rounded to nearest $"
                disabled
                prefixType="icon"
                prefixValue="attach_money"
                postfixValue=".00"
            />
            <InputGroupComponent
                id="input-id-4"
                type="textarea"
                label="Special requests"
                placeholder="Extra frosting, no pineapple..."
                disabled
                prefixType="icon"
                prefixValue="format_quote"
            />
            <InputGroupComponent
                type="select"
                selectOptions={["Option one", "Option two", "Option three"]}
                label="Flavor"
                prefixValue="Options"
                disabled
            />
        </ComponentPreview>
    </>
);

const InputGroupText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Input groups...</p>
        <BasicExample />
        {/* <CheckboxesAndRadios /> */}
        <ButtonAddons />
        <WithSelect />
        {/* <WithFeedbackIcon /> */}
        <ValidationStates />
        <Disabled />
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

/* For testing */
export { BasicExample, CheckboxesAndRadios, ButtonAddons, WithSelect, WithFeedbackIcon, ValidationStates, Disabled, InputGroupText };
