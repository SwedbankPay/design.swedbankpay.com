import React from "react";

import { ComponentPreview, DocContainer, Property, Attribute } from "@docutils";
import PrismCode from "react-prism";
import InputGroupComponent from "@components/InputGroup";

const BasicExample = () => (
    <>
        <h2 id="basic-example">Basic example</h2>
        <p>
            Add a <PrismCode className="language-html">{"<span>"}</PrismCode> with class <Property value=".input-group-addon"/> to get a gray box on the left,
            right or both sides of an <PrismCode className="language-html">{"<input>"}</PrismCode> element. The position of
            your <Property value=".input-group-addon"/> depends on if you place it before or after the <PrismCode className="language-html">{"<input"}</PrismCode> element.
        </p>
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
        <p>
            If you want <PrismCode className="language-html">{"<button>"}</PrismCode>s included with your input elements you can just add a <PrismCode className="language-html">{"<button>"}</PrismCode> inside
            a input-group like you would anywhere else.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <InputGroupComponent
                type="text"
                postfixType="button"
                postfixValue="Button"
                postfixBtnColor="executive"
            /> {"\n\n"}
            <InputGroupComponent
                type="text"
                prefixType="button"
                prefixValue="Button"
                prefixBtnColor="guiding"
                postfixType="button"
                postfixValue="Button"
                postfixBtnColor="destructive"
            />
        </ComponentPreview>
    </>
);

const WithSelect = () => (
    <>
        <h2 id="with-select">With select</h2>
        <p>
            Inserting text next to a <PrismCode className="language-html">{"<select>"}</PrismCode> works just like any other input element.
        </p>
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
        <p>
            You can also visualize validation on your input-groups. Just add <Property value=".has-success" /> or <Property value=".has-error" /> with a <Property value=".input-group" />.
        </p>
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
        <p>
            Just like for forms you can add <Attribute name="disabled" /> to an input element to disable it.
            If you are going to disable an element in a <Property value=".input-group" /> make sure to also add the <Attribute name="disabled"/> attribute to the buttons.
        </p>
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
                type="text"
                disabled
                prefixType="button"
                prefixValue="Button"
                prefixBtnColor="guiding"
                postfixType="button"
                postfixValue="Button"
                postfixBtnColor="destructive"
            />
        </ComponentPreview>
    </>
);

const InputGroup = () => (
    <DocContainer docToc>
        <p className="lead">
            You can include additional information to specific input elements by adding <PrismCode className="language-html">{"<span>"}</PrismCode>s
            or <PrismCode className="language-html">{"<button>"}</PrismCode>s in a <Property value=".input-group" />.
        </p>
        <BasicExample />
        <ButtonAddons />
        <WithSelect />
        <ValidationStates />
        <Disabled />
    </DocContainer>
);

export default InputGroup;

/* For testing */
export { BasicExample, CheckboxesAndRadios, ButtonAddons, WithSelect, WithFeedbackIcon, ValidationStates, Disabled };
