import React, { useState, useEffect } from "react";
import { DocContainer } from "@docutils";

import Button from "@components/Button";
import Checkbox from "@components/FormComponents/Checkbox";
import CodeTags from "@components/CodeTags";
import InputGroup from "@components/InputGroup";
import RadioButton from "@components/FormComponents/Radio";

import LoginForm from "../../components/LoginForm/index";

import { ComponentPreview } from "~/src/App/docutils";
import { guidelinesElementsList, formsShowCase } from "./constants";
import { hintTextExpander } from "@src/scripts/main";

const radioOptions = [
    {
        label: "Option 1",
        id: "guidelines-options-1",
        checked: true
    },
    {
        label: "Option 2",
        id: "guidelines-options-2"
    },
    {
        label: "Option 3",
        id: "guidelines-options-3"
    }
];

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>

        <p>A form can include different type of user input components that can be arranged in different ways depending on your specific context and needs. You might for example design a form for a user to sign up for or log into an account, register for a service, reconfigure settings, take a survey, purchase a product or provide feedback.</p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={formsShowCase} noOptions removeOuterTag/>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="slab slab-plain py-5 px-0">
            <div className="col-12 col-sm-6 m-auto">
                <h3 className="mb-0">Title</h3>
                <div className="slab slab-primary d-flex justify-content-center mb-0 py-2 extra-small">32px</div>
                <InputGroup id="guideline-input-example" type="text" label="Input label" placeholder="Placeholder text" className="mb-0" helpBlock="Hint text" hintTextId="forms-hint-text-example"/>
                <div className="slab slab-primary d-flex justify-content-center mb-0 py-1 extra-small">24px</div>
                <InputGroup id="guideline-select-example" type="select" label="Label" placeholder="Select an option" selectOptions={["Option 1", "Option 2"]} optional className="mb-0"/>
                <div className="slab slab-primary d-flex justify-content-center mb-0 py-1 extra-small">24px</div>
                <RadioButton groupTitle="Input label" name="guidelines-radio-example" group options={radioOptions} className="mb-0 forms-radio-example" expandingHintTitle="Expander hint text" expandingHintId="expanding-forms-radio-example"/>
                <div className="slab slab-primary d-flex justify-content-center mb-0 py-2 extra-small">32px</div>
                <div className="d-flex">
                    <Button type="primary" label="Submit" className="mr-3"/>
                    <Button type="link" label="Cancel"/>
                </div>
            </div>
        </div>
        <p>Form are comprised of some or all of the following elements:</p>
        <ul className="list list-bullet">
            {guidelinesElementsList.map(({ element, text }) => (
                <li key={element}>
                    <b>{element}</b> {text}
                </li>
            ))}
        </ul>
        <h3>Spacing</h3>
        <p>As a general rule, we recommend a vertical spacing between individual inputs of 24px and a 32px spacer before the first input, between sections and between the last input and the buttons. This may vary depending on your context, but spacing between groups should always be adjusted in relationship to spacing between individual items. </p>
    </section>
);

const HowToDesignForms = () => {
    const [showInput, setShowInput] = useState(true);

    return (
        <section>
            <h2 id="layout">How to design forms</h2>
            <section>
                <h3>Layout</h3>
                <p>Forms should be designed vertically as this improves their readability. When possible, a form should be one column, but information can be presented in multiple columns if they are grouped together (e.g. address fields).
                </p>
                <p>Do not make an input full width of a desktop viewport, use the grid to restrict the width of the inputs to no more than half of the viewport. The field widths should reflect the intended length of the content while still aligning to the grid. On mobile devices, expand the input elements and buttons to make use of the whole viewport width.
                </p>

                <div className="slab slab-plain slab-border-success pb-4">
                    <span className="h4 d-block mb-4">Do</span>
                    <div className="col-12 col-sm-8 m-auto px-0">
                        <InputGroup id="layout-address-example" type="text" label="Address"/>
                        <div className="row">
                            <InputGroup id="layout-postal-example" type="text" label="Postal code" className="col-12 col-sm-5"/>
                            <InputGroup id="layout-city-example" type="text" label="City" className="col-12 col-sm-7 mb-2"/>
                        </div>
                    </div>
                </div>
                <div className="slab slab-plain slab-border-error">
                    <span className="h4 d-block mb-4">Don&apos;t</span>
                    {["Address", "Postal code", "City"].map(label => (
                        <InputGroup id={`layout-${label.toLowerCase()}-dont-example`} type="text" label={label} key={label}/>
                    ))}
                </div>
            </section>
            <section>
                <h3>Required VS. optional</h3>
                <p>All fields in a form can be assumed required and should not be labeled with an “*” . If you must ask an optional question, make it clear that it’s optional by adding “(optional)” to the label instead. </p>

                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="slab slab-plain slab-border-success">
                            <span className="h4 d-block mb-4">Do</span>
                            <InputGroup id="required-optional-do-email-example" type="text" label="E-mail"/>
                            <InputGroup id="required-optional-do-phone-example" type="text" label="Telephone number" optional/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="slab slab-plain slab-border-error">
                            <span className="h4 d-block mb-4">Don&apos;t</span>
                            <InputGroup id="required-optional-dont-email-example" type="text" label="E-mail*"/>
                            <InputGroup id="required-optional-dont-phone-example" type="tel" label="Telephone number"/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h3>Label and hints</h3>
                <p>It is important to give the users the information required to fill in the form and help them be successful the first time. An input must have a label that clearly describes the type of input a field requires. The label can be complemented with a hint text or a hint expander to provide clarifying details, try do avoid using both a visible hint text and a hint expander.</p>
                <p>Consider the following to decide where to place the information:</p>
                <ul className="list list-bullet">
                    <li>If the information is very important and most or all users will need it, make it part of the <b>label</b>.</li>
                    <li>If the information is important and many users will need it, provide <b>hint text</b> that is visible by default.</li>
                    <li>If the information is less important and only a minority of users will need it, put it in a <b>hint expander</b>.</li>
                </ul>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="slab slab-plain slab-border-success">
                            <span className="h4 d-block mb-4">Do</span>
                            <InputGroup id="personal-identification-number-example" type="text" label="Personal identification number" helpBlock="YYYYMMDDNNNN" hintTextId="personal-id-number-example"/>
                        </div>
                        <p>Use a hint text for important information that is secondary to the label.</p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="slab slab-plain slab-border-success">
                            <span className="h4 d-block mb-4">Do</span>
                            <InputGroup id="cvc-example" type="text" label="Security code (CVC)" expandingHintTitle="Where to find the code?" expandingHintContent="Three to four digits on the back or the front of your card." expandingHintId="expanding-where-to-find-example"/>
                        </div>
                        <p>Use hint expander for additional information that is less important or long.</p>
                    </div>
                </div>
            </section>
            <section>
                <h3>Logical flow</h3>
                <p>To create a better user flow, ask questions in a logical order and group related inputs into sections or steps. Also consider using progressive disclosure to reveal additional content based on how a user answered the previous question. The flow will then better resemble a conversation and guide the user through the task.</p>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="slab slab-plain slab-border-success h-100">
                            <span className="h4 d-block mb-4">Do</span>
                            <div className="radio mb-3">
                                <input type="radio" id="logical-flow-example-email" name="logical-flow-example" defaultChecked/>
                                <label htmlFor="logical-flow-example-email" onClick={() => setShowInput(!showInput)}>E-mail</label>
                            </div>
                            {showInput &&
                                <div className="ml-2">
                                    <InputGroup id="logical-flow-do-email-example" type="text" label="E-mail address" className="ml-4 mb-4"/>
                                </div>
                            }
                            <div className="radio mb-3">
                                <input type="radio" id="logical-flow-example-call" name="logical-flow-example"/>
                                <label htmlFor="logical-flow-example-call" onClick={() => setShowInput(!showInput)}>Call</label>
                            </div>
                            {!showInput &&
                                <div className="ml-2">
                                    <InputGroup id="logical-flow-do-phone-example" type="text" label="Telephone number" className="ml-4"/>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="slab slab-plain slab-border-error">
                            <span className="h4 d-block mb-4">Don&apos;t</span>
                            <RadioButton label="E-mail" name="logical-flow-example-2" id="logical-flow-example-email-2" checked className="mb-3"/>
                            <div className="ml-2">
                                <InputGroup id="logical-flow-dont-email-example" type="text" label="E-mail address" className="ml-4 mb-4"/>
                            </div>
                            <RadioButton label="Call" name="logical-flow-example-2" id="logical-flow-example-call-2" className="mb-3"/>
                            <div className="ml-2">
                                <InputGroup id="logical-flow-dont-phone-example" type="text" label="Phone number" className="ml-4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h3>Button placement</h3>
                <p>The primary button should be left-aligned along with the left side of the form field. If additional actions are required, put the primary button first, then secondary buttons, then the link button. One exception is a multiple-step form where the “Back” secondary button sits at the very left, while the rest of the buttons are aligned to the right. In some cases, like on a <a href="">Login page</a>, buttons can be centered and set to the same width as the input fields. On mobile, the buttons are always centered, full width and stacked vertically with the primary action on top. </p> {/* TODO: Add link to Login template */}
                <img src={`${process.env.basename}img/documentation/patterns/img-button-placement.png`} className="w-100" alt=""/>
            </section>
            <section>
                <h3>Error messages</h3>
                <p>When an input isn’t accepted, error messages should be used to help the user understand what went wrong and how to solve the problem without using technical jargong. </p>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="slab slab-plain slab-border-success">
                            <span className="h4 d-block mb-4">Do</span>
                            <InputGroup type="text" validationState="error" errorMessage='The email address must include "@"' label="Email address" defaultValue="Name.com" id="input-error-do-example"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="slab slab-plain slab-border-error">
                            <span className="h4 d-block mb-4">Don&apos;t</span>
                            <InputGroup type="text" validationState="error" errorMessage="Invalid input" label="Email address" defaultValue="Name.com" id="input-error-dont-example"/>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <section>
            <h3>Errors and validation</h3>
            <p>To use our validation, start by adding the attribute <CodeTags type="secondary" code="novalidate" /> to your <CodeTags type="primary" code={"<form>"} /> element.
            If you wish to validate your entire form, add the <CodeTags type="secondary" code="validate" /> attribute to the <CodeTags type="primary" code={"<form>"}/> tag,
            if not add it to the desired <CodeTags type="primary" code={"<input>"}/> tags. This will validate against <CodeTags type="secondary" code="required" /> and <CodeTags type="secondary" code="pattern" />, where pattern will override default patterns.</p>

            <b className="brand-headline">Client-side validation</b>
            <p>Use client-side validation to validate as much data as possible before the user submits the form. Common errors include empty required fields, invalid characters or incorrect input format. To give users inline validation feedback insert a error message within the <CodeTags type="primary" code="form-group"/> in the <CodeTags type="primary" code="help-block"/> element in the attribute <CodeTags type="primary" code="data-error"/>.</p>

            <ComponentPreview language="html" codeFigure showCasePanel removeOuterTag>
                <div className="col-12 col-sm-6 m-auto pt-3">
                    <InputGroup type="text" validationState="error" errorMessage='The email address must include "@"' label="Email" defaultValue="Name.com" id="input-error-client-example"/>
                </div>
            </ComponentPreview>

            <b className="brand-headline">Server-side validation</b>
            <p>Server side validation can be used to control the inputs after the user submits the form. If an error has occurred, display an error alert at the top of the form after the page has reloaded as well as inline errors on the affected input components.</p>

            <ComponentPreview language="html" codeFigure showCasePanel>
                <div className="col-sm-6 col-12 m-auto px-0 py-3">
                    <LoginForm error defaultPassword defaultEmail
                        passwordId="validation-password-example"
                        emailId="validation-email-example"
                        checkboxId="validation-checkbox-example"
                        title="h2"/>
                </div>
            </ComponentPreview>
        </section>
        <section>
            <h3>Fieldset</h3>
            <p>You can use the <CodeTags type="primary" code="<fieldset>" /> to group related elements in a <CodeTags type="primary" code="form" /> and create more structure.</p>

            <ComponentPreview language="html" codeFigure showCasePanel>
                <div className="col-12 col-sm-6 m-auto">
                    <form>
                        <fieldset className="mb-2">
                            <legend> {"\n"}
                                <span className="h3">Name</span>
                            </legend>
                            <InputGroup id="fieldset-first-name-example" type="name" label="First name" />
                            <InputGroup id="fieldset-last-name-example" type="name" label="Last name" />
                        </fieldset>
                        <fieldset>
                            <legend> {"\n"}
                                <span className="h3">Contact information</span>
                            </legend>
                            <InputGroup id="fieldset-email-example" type="email" label="Email" />
                            <InputGroup id="fieldset-phone-example" type="tel" label="Phone number" />
                        </fieldset>
                    </form>
                </div>
            </ComponentPreview>
        </section>
        <section>
            <h3>Disabled state</h3>
            <p>You can disable an entire fieldset by adding <CodeTags type="primary" code="disabled"/> to the fieldset element. </p>

            <ComponentPreview language="html" codeFigure showCasePanel removeOuterTag>
                <div className="col-12 col-sm-6 m-auto">
                    <fieldset disabled>
                        <InputGroup id="disabled-name-example" type="name" label="Name" />
                        <InputGroup id="disabled-email-example" type="email" label="Email" />
                        <Checkbox id="disabled-fieldset-checkbox" label="I agree to terms of use" className="mb-4"/>{"\n"}
                        <Button type="primary" label="Submit" className="mt-2" />
                    </fieldset>
                </div>
            </ComponentPreview>
            <p>If you only wish to disable a specific form component, add the <CodeTags type="primary" code="disabled"/> attribute to the desired component.</p>

            <ComponentPreview language="html" codeFigure showCasePanel removeOuterTag>
                <div className="col-12 col-sm-6 m-auto">
                    <fieldset>
                        <InputGroup id="disable-specific-name-example" type="name" label="Name" disabled />
                        <InputGroup id="disable-specific-email-example" type="email" label="Email" />
                        <Checkbox id="disabled-input-checkbox" label="I agree to terms of user" className="mb-4"/>{"\n"}
                        <Button type="primary" label="Submit" className="mt-2" />
                    </fieldset>
                </div>
            </ComponentPreview>
        </section>
        <section>
            <h3>Form grid</h3>
            <p>If you need more than one column in your form, you can use the grid system to customize how forms are displayed. Wrap your form elements in a row container and remember to add <CodeTags type="secondary" code=".col-{your_size}"/> to the <CodeTags type="secondary" code=".form-group"/>.</p>
        </section>
        <ComponentPreview language="html" codeFigure showCasePanel removeOuterTag>
            <div className="col-12 col-sm-10 m-auto pt-2">
                <form>
                    <div className="row align-items-center justify-content-between">
                        <InputGroup id="form-grid-name-example" type="name" label="Name" className="col-12 col-sm-3 px-0 mb-4"/>
                        <InputGroup id="form-grid-email-example" type="email" label="Email" className="col-12 col-sm-6 px-0 mb-4"/>{"\n"}
                        <Button type="primary" label="Submit" className="mt-1"/>
                    </div>
                </form>
            </div>
        </ComponentPreview>
        <section>
            <h3>Static text</h3>
            <p>To display static text in a form use <CodeTags type="secondary" code="<span>" /></p>
        </section>
        <section>
            <h3>JavaScript methods</h3>
            <p><CodeTags type="primary" code="dg.validation.init()" /> can be used on a form tag to initialize all fields contained in the form, or you can pass a single field to initialize just that one.</p>
        </section>
    </section>
);

const Forms = () => {
    useEffect(() => {
        hintTextExpander.init();
    });

    return (

        <DocContainer>
            <p className="lead">A form is a collection of input components that allows users to provide and submit data.</p>
            <Overview />
            <ContentGuidelines />
            <HowToDesignForms />
            <DeveloperDocumentation />
        </DocContainer>
    );
};

export default Forms;

export { Overview, ContentGuidelines, HowToDesignForms, DeveloperDocumentation };
