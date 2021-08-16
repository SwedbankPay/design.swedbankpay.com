import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import InputGroup from "@components/InputGroup";
import Button from "@components/Button";
import { Checkbox, FormControlText, Radio, Togglebox } from "@components/FormComponents";
import CodeTags from "@components/CodeTags";

import { validation } from "@src/scripts/main";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Use <CodeTags type="primary" code={"<input>"} /> in combination with <CodeTags type="primary" code={"<form-group>"} />s and/or <CodeTags type="primary" code={"<form>"} />s to
            show a collection of related inputs. <CodeTags type="primary" code={"<form-group>"} />s can contain more than just an input, like a <CodeTags type="primary" code={"<label>"} /> or
            <CodeTags type="primary" code={"<help-block>"} />s.
        </p>
        <p>
            <b>Note:</b> On larger screens, <CodeTags type="primary" code={"<input>"} /> should not be wider than half the
            page. <CodeTags type="primary" code={"<input>"} /> should take the available width on smaller screen sizes. <Link to="/core/grid">Grid</Link> can
            be used to achieve this behavior.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form onSubmit={e => e.preventDefault()}>
                <div className="row">
                    <div className="col-md-6">
                        <InputGroup
                            id="your-name"
                            type="text"
                            autoComplete="name"
                            label="Name"
                            helpBlock="Your first and last name"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <InputGroup
                            id="email-address"
                            type="text"
                            label="Email"
                            autoComplete="email"
                            placeholder="name@mail.com"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <InputGroup
                            id="phone-number"
                            type="text"
                            label="Phone number"
                            autoComplete="phone"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <Checkbox label={"Subscribe to our Shovels and Tapestry catalogue"} id="subscribe-checkbox" />
                </div>{"\n"}
                <Button type="primary" label="Submit" btnType="submit" />{"\n"}
            </form>
        </ComponentPreview>
    </>
);

const FormGrid = () => (
    <>
        <h2 id="form-grid">Form grid</h2>
        <p>
            You can use the grid system to customize how forms are displayed. Just wrap your form elements in a row container to have two or more input elements next to eachother horizontally.
            Remember to add <CodeTags type="secondary" code=".col-{your_size}"/> to the forms.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form onSubmit={e => e.preventDefault()}>
                <div className="row">
                    <div className="col-5">
                        <InputGroup
                            id="grid-first-name"
                            type="text"
                            autoComplete="given-name"
                            label="First name"
                        />
                    </div>
                    <div className="col-5">
                        <InputGroup
                            id="grid-last-name"
                            type="text"
                            label="Last name"
                            autoComplete="family-name"
                        />
                    </div>
                    <div className="col-2">
                        <div className="form-group">{"\n"}
                            <br />{"\n"}
                            <button type="submit" className="btn btn-primary">Search</button>{"\n"}
                        </div>
                    </div>
                </div>
            </form>
        </ComponentPreview>
    </>
);

const Validation = () => (
    <>
        <h2 id="validation">Validation overview</h2>
        <p>To use our validation, start by adding the attribute <CodeTags type="secondary" code="novalidate" /> to your <CodeTags type="primary" code={"<form>"} /> element.
        If you wish to validate your entire form, add the <CodeTags type="secondary" code="validate" /> attribute to the <CodeTags type="primary" code={"<form>"}/> tag,
        if not add it to the desired <CodeTags type="primary" code={"<input>"} /> tags.</p>
        <p>Validates against <CodeTags type="secondary" code="required" /> and <CodeTags type="secondary" code="pattern" />. Using <CodeTags type="secondary" code="pattern" /> overrides default patterns.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form noValidate data-validate="">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <InputGroup
                            id="validation-name-1"
                            type="text"
                            label="Name"
                        />
                    </div>
                    <div className="col-md-5">
                        <InputGroup
                            id="validation-email-1"
                            type="email"
                            label="Email"
                            placeholder="name@mail.com"
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </ComponentPreview>

        <h3>Feedback</h3>
        <p>
            To give users validation feedback on each input insert the message in the attributes <CodeTags type="secondary" code="success" /> and <CodeTags type="secondary" code="error" /> in
            the <CodeTags type="secondary" code=".help-block" /> element. To display an asterisk you have to include a label with your input element.
        </p>
        <p>
            <b>NOTE:</b> To include the <CodeTags type="secondary" code="warning"/>-icon, the input must be wrapped in a <CodeTags type="secondary" code=".input-group" /> and cannot have
            any trailing <CodeTags type="secondary" code=".input-group-addons" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate data-validate="">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <InputGroup
                            required
                            id="validation-email-2"
                            type="email"
                            label="Email"
                            placeholder="name@mail.com"
                            prefixType="icon"
                            prefixValue="email"
                            helpBlock
                            successMessage="Right!"
                            errorMessage="Wrong!"
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary mb-4" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </ComponentPreview>

        <h3>Dynamically disabled submit button</h3>
        <p>You can also dynamically disable the submit button by adding <CodeTags type="secondary" code="disable-invalid" /> to the <CodeTags type="primary" code={"<button type=\"submit\">"} /> element.</p>
        <p><b>NOTE:</b> For this to work you also need the <CodeTags type="secondary" code="validate" /> attribute to be present in the <CodeTags type="primary" code={"<form>"} /> tag.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate data-validate="">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <InputGroup
                            required
                            id="validation-email-3"
                            type="email"
                            label="Email"
                            placeholder="name@mail.com"
                            prefixType="icon"
                            prefixValue="email"
                            successMessage="Right!"
                            errorMessage="Wrong!"
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" type="submit" data-disable-invalid="">Submit</button>
                    </div>
                </div>
            </form>
        </ComponentPreview>
    </>
);

const UsageWithFieldsets = () => (
    <>
        <h2 id="usage-with-fieldsets">Usage with fieldsets</h2>
        <p>Use fieldsets to give your forms more structure.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form onSubmit={e => e.preventDefault()}>
                <fieldset>
                    <legend>Log in</legend>
                    <div className="row">
                        <div className="col-md-6">
                            <InputGroup
                                id="fieldset-username"
                                type="text"
                                autoComplete="username"
                                label="Username"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <InputGroup
                                id="fieldset-password"
                                type="password"
                                label="Password"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <Checkbox label="Remember me" id="fieldset-checkbox" />
                </fieldset>{"\n"}
                <Button type="primary" label="Log in" btnType="submit" />{"\n"}
            </form>
        </ComponentPreview>
    </>
);

const StaticText = () => (
    <>
        <h2 id="static-text">Static text</h2>
        <p>To just display static text in forms use a <CodeTags type="primary" code={"<span>"} /> inside a form</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <FormControlText label="Company" text="Swedbank Pay" />
            <FormControlText label="Employee" text="Bob Corlsan" />
        </ComponentPreview>
    </>
);

const DisabledFormComponents = () => (
    <>
        <h2 id="disabled-form-components">Disabled form components</h2>
        <p>Disable whichever form component you want by adding <CodeTags type="secondary" code="disabled" /> to the desired input element</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Togglebox id="togglebox-disabled-example-1" label="Enable overdrive" disabled />
            <Togglebox id="togglebox-disabled-checked-example-1" label="Enable overdrive" disabled checked/>
            <Radio label="Hamburgers" id="radio-disabled-example-1" name="radio-disabled-example" disabled />
            <Checkbox label="Milk" id="checkbox-disabled-example-3" disabled checked />
        </ComponentPreview>

        <h3>Disable a fieldset</h3>
        <p>Disable entire fieldsets by adding <CodeTags type="secondary" code="disabled" /> to the fieldset element</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form>
                <fieldset disabled>
                    <legend>Log in</legend>
                    <div className="row">
                        <div className="col-sm-6">
                            <InputGroup
                                id="fieldset-disabled-username"
                                type="text"
                                autoComplete="username"
                                label="Username"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <InputGroup
                                id="fieldset-disabled-password"
                                type="password"
                                label="Password"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <InputGroup
                                label="Profession"
                                type="select"
                                selectOptions={["Bounty hunter", "Smuggler", "Jedi"]}
                            />
                        </div>
                    </div>
                    <Checkbox label="Remember me" id="fieldset-disabled-checkbox" />
                </fieldset>{"\n"}
                <Button type="primary" label="Log in" btnType="submit" disabled />{"\n"}
            </form>
        </ComponentPreview>

        <h3>Disable a <CodeTags type="secondary" code=".form-group" /></h3>
        <p>
            Add disable styling to a <CodeTags type="secondary" code=".form-group" /> by adding class <CodeTags type="secondary" code=".disabled" /> to it.
            Note that the disabled form component should still have <CodeTags type="secondary" code="disabled" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form>
                <fieldset>
                    <legend>Log in</legend>
                    <div className="row">
                        <div className="col-sm-6">
                            <InputGroup
                                id="form-group-disabled-username"
                                type="text"
                                autoComplete="username"
                                label="Username"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <InputGroup
                                id="form-group-disabled-password"
                                type="password"
                                label="Password"
                                autoComplete="current-password"
                                disabled
                            />
                        </div>
                    </div>
                    <Checkbox label="Remember me" id="form-group-disabled-checkbox" />
                </fieldset>{"\n"}
                <Button type="primary" label="Log in" btnType="submit" disabled />{"\n"}
            </form>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="validation" />
        <p>
            The <CodeTags type="secondary" code="dg.validation.init()" /> can be used on a form tag to initialize all fields
            contained in the form, or you can pass a single field to initialize just that one.
        </p>
    </>
);

class Forms extends Component {
    componentDidMount () {
        validation.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Form componenets allow you to gather user input in various different ways.
                </p>
                <Overview />
                <FormGrid />
                <Validation />
                <UsageWithFieldsets />
                <StaticText />
                <DisabledFormComponents />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Forms;

/* For testing */
export { Overview, FormGrid, Validation, UsageWithFieldsets, StaticText, DisabledFormComponents, JavascriptMethods };
