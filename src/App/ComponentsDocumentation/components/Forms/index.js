import React, { Component } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import InputGroup from "@components/InputGroup";
import Button from "@components/Button";
import { Checkbox, FormControlText, Radio, Rangeslider, Togglebox } from "@components/FormComponents";
import CodeTags from "@components/CodeTags";

const { rangeslider, validation } = window.dg;

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Use <CodeTags type="primary" code={"<input>"} /> in combination with <CodeTags type="primary" code={"<form-group>"} />s and/or <CodeTags type="primary" code={"<form>"} />s to
            show a collection of related inputs. <CodeTags type="primary" code={"<form-group>"} />s can contain more than just an input, like a <CodeTags type="primary" code={"<label>"} /> or
            <CodeTags type="primary" code={"<help-block>"} />s.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form onSubmit={e => e.preventDefault()}>
                <InputGroup
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    label="First name"
                    placeholder="Enter your first name"
                    helpBlock="The first word of your full name"
                />
                <InputGroup
                    id="last-name"
                    type="text"
                    label="Last name"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                    helpBlock="The very last collection of letters in your name"
                />
                <InputGroup
                    id="email-address"
                    type="text"
                    label="Email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    helpBlock="The last part is probably @swedbankpay.com"
                />
                <div className="form-group">
                    <Checkbox label={"Subscribe to our Shovels and Tapestry catalogue"} id="subscribe-checkbox" />
                </div>{"\n"}
                <Button type="executive" label="Submit" btnType="submit" />{"\n"}
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
                            placeholder="Enter your first name"
                            helpBlock="Hope it is something cool"
                        />
                    </div>
                    <div className="col-5">
                        <InputGroup
                            id="grid-last-name"
                            type="text"
                            label="Last name"
                            autoComplete="family-name"
                            placeholder="Enter your last name"
                            helpBlock="Most likely in your passport"
                        />
                    </div>
                    <div className="col-2">
                        <div className="form-group">{"\n"}
                            <br />{"\n"}
                            <button type="submit" className="btn btn-executive">Search</button>{"\n"}
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
                <InputGroup
                    id="validation-name-1"
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    helpBlock="This one should be easy"
                />
                <InputGroup
                    id="validation-email-1"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    helpBlock="This one should be pretty easy too"
                />{"\n"}
                <button className="btn btn-executive" type="submit">Submit</button>
            </form>
        </ComponentPreview>

        <h3>Feedback</h3>
        <p>
            To give users validation feedback on each input insert the message in the attributes <CodeTags type="secondary" code="success" /> and <CodeTags type="secondary" code="error" /> in
            the <CodeTags type="secondary" code=".help-block" /> element. To display an asterisk you have to include a label with your input element.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate data-validate="">
                <InputGroup
                    required
                    id="validation-email-2"
                    type="email"
                    label="Email"
                    placeholder="bob.corlsan@example.com"
                    prefixType="icon"
                    prefixValue="email"
                    helpBlock
                    successMessage="Right!"
                    errorMessage="Wrong!"
                />{"\n"}
                <button className="btn btn-executive" type="submit">Submit</button>
            </form>
        </ComponentPreview>

        <h3>Dynamically disabled submit button</h3>
        <p>You can also dynamically disable the submit button by adding <CodeTags type="secondary" code="disable-invalid" /> to the <CodeTags type="primary" code={"<button type=\"submit\">"} /> element.</p>
        <p><b>NOTE:</b> For this to work you also need the <CodeTags type="secondary" code="validate" /> attribute to be present in the <CodeTags type="primary" code={"<form>"} /> tag.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate data-validate="">
                <InputGroup
                    required
                    id="validation-email-3"
                    type="email"
                    label="Email"
                    placeholder="bob.corlsan@example.com"
                    prefixType="icon"
                    prefixValue="email"
                    helpBlock="Keep your eye on that submit button"
                    successMessage="Right!"
                    errorMessage="Wrong!"
                />{"\n"}
                <button className="btn btn-executive" type="submit" data-disable-invalid="">Submit</button>
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
                    <InputGroup
                        id="fieldset-username"
                        type="text"
                        autoComplete="username"
                        label="Username"
                        placeholder="Enter your username"
                    />
                    <InputGroup
                        id="fieldset-password"
                        type="password"
                        label="Password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                    />
                    <Checkbox label="Remember me" id="fieldset-checkbox" />
                </fieldset>{"\n"}
                <Button type="executive" label="Log in" btnType="submit" />{"\n"}
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

const Checkboxes = () => (
    <>
        <h2 id="checkboxes">Checkboxes</h2>
        <p>
            Use checkboxes to make it so a user can select several options. If you need to restrict the number of possible selections to one, see radio buttons.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Checkbox label="Bread" id="checkbox-example-1" />
            <Checkbox label="Not bread. I'm not really fond of it. What I would really like, however, is one single piece of cracker with some nutella on it. Perhaps this could be the second checkbox. These thoughts are written here simply to show you how the checkboxes align themselves when label text is fairly long." id="checkbox-example-2" />
            <Checkbox label="Milk" id="checkbox-example-3" checked />
        </ComponentPreview>
    </>
);

const RadioButtons = () => (
    <>
        <h2 id="radio-buttons">Radio buttons</h2>
        <p>
            Use radio buttons when you wish to limit your user to one choice out of several possible.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Radio label="Hamburgers" id="radio-example-1" name="radio-example" />
            <Radio label="Not the one above because I'm not really fond of hamburgers. What I would really like, however, is a nice piece of steak. Perhaps that could be the second option. These thoughts are written here simply to show you how radio buttons align themselves when label text is fairly long." id="radio-example-2" name="radio-example" />
            <Radio label="Pizza" id="radio-example-3" name="radio-example" checked />
        </ComponentPreview>
    </>
);

const Toggleboxes = () => (
    <>
        <h2 id="toggleboxes">Toggleboxes</h2>
        <p>
            Use toggleboxes if you wish present the user with an either-or option.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Togglebox id="togglebox-example-1" label="Enable overdrive" />
            <Togglebox id="togglebox-example-2" label="Enable superpowers" checked />
        </ComponentPreview>
    </>
);

const RangeSlider = () => (
    <>
        <h2 id="rangeslider">Rangeslider</h2>
        <p>Asides from the default behavior of a range input, the Rangeslider{"'"}s colors and label positioning can be customized.</p>
        <p>Currently there are three different supported colors for the slider: <CodeTags type="secondary" code=".rangeslider-brand" />, <CodeTags type="secondary" code=".rangeslider-default" /> and <CodeTags type="secondary" code=".rangeslider-neutral" />.</p>
        <p>The Rangeslider currently supports two positions: <CodeTags type="secondary" code=".label-right" /> and <CodeTags type="secondary" code=".label-top" />. If no position is given, <CodeTags type="secondary" code="right" /> is defaulted.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Rangeslider min={0} max={200} step={1} value={100} valueLabel valueLabelPrefix="$" valueLabelPostfix="%" />
        </ComponentPreview>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <Rangeslider min={0} max={200} step={1} value={100} color="neutral" valueLabel valueLabelPrefix="$" valueLabelPostfix="%" valueLabelPosition="top" />
        </ComponentPreview>
    </>
);

const DisabledFormComponents = () => (
    <>
        <h2 id="disabled-form-components">Disabled form components</h2>
        <p>Disable whichever form component you want by adding <CodeTags type="secondary" code="disabled" /> to the desired input element</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Togglebox id="togglebox-disabled-example-1" label="Enable overdrive" disabled />
            <Radio label="Hamburgers" id="radio-disabled-example-1" name="radio-disabled-example" disabled />
            <Checkbox label="Milk" id="checkbox-disabled-example-3" disabled checked />
            <Rangeslider className="mb-2" min={0} max={200} step={1} value={100} valueLabel valueLabelPrefix="$" valueLabelPostfix="%" disabled/>
        </ComponentPreview>

        <h3>Disable a fieldset</h3>
        <p>Disable entire fieldsets by adding <CodeTags type="secondary" code="disabled" /> to the fieldset element</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form>
                <fieldset disabled>
                    <legend>Log in</legend>
                    <InputGroup
                        id="fieldset-disabled-username"
                        type="text"
                        autoComplete="username"
                        label="Username"
                        placeholder="Enter your username"
                    />
                    <InputGroup
                        id="fieldset-disabled-password"
                        type="password"
                        label="Password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                    />
                    <Checkbox label="Remember me" id="fieldset-disabled-checkbox" />
                </fieldset>{"\n"}
                <Button type="executive" label="Log in" btnType="submit" disabled />{"\n"}
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
                    <InputGroup
                        id="form-group-disabled-username"
                        type="text"
                        autoComplete="username"
                        label="Username"
                        placeholder="Enter your username"
                    />
                    <InputGroup
                        id="form-group-disabled-password"
                        type="password"
                        label="Password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        disabled
                    />
                    <Checkbox label="Remember me" id="form-group-disabled-checkbox" />
                </fieldset>{"\n"}
                <Button type="executive" label="Log in" btnType="submit" disabled />{"\n"}
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
        rangeslider.init();
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
                <Checkboxes />
                <RadioButtons />
                <Toggleboxes />
                <RangeSlider />
                <DisabledFormComponents />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Forms;

/* For testing */
export { Overview, FormGrid, Validation, UsageWithFieldsets, StaticText, Checkboxes, RadioButtons, Toggleboxes, RangeSlider, DisabledFormComponents, JavascriptMethods };
