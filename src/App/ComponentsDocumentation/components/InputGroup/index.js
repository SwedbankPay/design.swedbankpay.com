import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import InputGroupComponent from "@components/InputGroup";
import CodeTags from "@components/CodeTags";

const BasicExample = () => (
    <>
        <h2 id="basic-example">Basic example</h2>
        <p>
            Add a <CodeTags type="primary" code={"<span>"} /> with class <CodeTags type="secondary" code=".input-group-addon"/> to get a gray box on the left,
            right or both sides of an <CodeTags type="primary" code={"<input>"} /> element. The position of
            your <CodeTags type="secondary" code=".input-group-addon"/> depends on if you place it before or after the <CodeTags type="primary" code={"<input"} /> element.
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
            If you want <CodeTags type="primary" code={"<button>"} />s included with your input elements you can just add a <CodeTags type="primary" code={"<button>"} /> inside
            a input-group like you would anywhere else.
        </p>
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
                postfixBtnColor="primary"
            />
        </ComponentPreview>
    </>
);

const WithSelect = () => (
    <>
        <h2 id="with-select">With select</h2>
        <p>
            Inserting text next to a <CodeTags type="primary" code={"<select>"} /> works just like any other input element.
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
            You can also visualize validation on your input-groups. Just
            add <CodeTags type="secondary" code=".has-success" /> or <CodeTags type="secondary" code=".has-error" /> with
            a <CodeTags type="secondary" code=".input-group" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
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
            Just like for forms you can add <CodeTags type="secondary" code="disabled" /> to an input element to disable it.
            If you are going to disable an element in a <CodeTags type="secondary" code=".input-group" /> make sure to also add the <CodeTags type="secondary" code="disabled"/> attribute to the buttons.
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
                prefixBtnColor="secondary"
                postfixType="button"
                postfixValue="Button"
                postfixBtnColor="primary"
            />
        </ComponentPreview>
    </>
);

const InputGroup = () => (
    <DocContainer docToc>
        <p className="lead">
            You can include additional information to specific input elements by adding <CodeTags type="primary" code={"<span>"} />s
            or <CodeTags type="primary" code={"<button>"} />s in a <CodeTags type="secondary" code=".input-group" />.
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
