import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Attribute, Property } from "#";
import { rangeslider, validation } from "$/px-script/main";
import InputGroup from "@/InputGroup";
import Button from "@/Button";
import { Checkbox, FormControlText, Radio, Rangeslider, Togglebox } from "@/FormComponents";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Forms overview...</p>
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
                    helpBlock="The last part is probably @payex.com"
                />
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
        <p>Form grid...</p>
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
        <p>To use our validation, start by adding the attribute <Attribute name="novalidate" /> to your <PrismCode className="language-html">{"<form>"}</PrismCode> element. If you wish to validate your entire form, add the <Attribute data name="validate" /> attribute to the <PrismCode className="language-html">{"<form>"}</PrismCode> tag, if not add it to the desired <PrismCode className="language-html">{"<input>"}</PrismCode> tags.</p>
        <p>Validates against <Attribute name="required" /> and <Attribute name="pattern" />. Using <Attribute name="pattern" /> overrides default patterns.</p>
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
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </ComponentPreview>

        <h3>Feedback</h3>
        <p>To give users validation feedback on each input insert the message in the attributes <Attribute data name="success" /> and <Attribute data name="error" /> in the <Attribute value=".help-block" /> element.</p>
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
                    helpBlock="This one might be a little tricky"
                    successMessage="Right!"
                    errorMessage="Wrong!"
                />{"\n"}
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </ComponentPreview>

        <h3>Dynamically disabled submit button</h3>
        <p>You can also dynamically disable the submit button by adding <Attribute data name="disable-invalid" /> to the <PrismCode className="language-html">{"<button type=\"submit\">"}</PrismCode> element.</p>
        <p><b>NOTE:</b> For this to work you also need the <Attribute data name="validate" /> attribute to be present in the <PrismCode className="language-html">{"<form>"}</PrismCode> tag.</p>
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
                <button className="btn btn-primary" type="submit" data-disable-invalid="">Submit</button>
            </form>
        </ComponentPreview>
    </>
);

const UsageWithFieldsets = () => (
    <>
        <h2 id="usage-with-fieldsets">Usage with fieldsets</h2>
        <p>Usage with fieldsets...</p>
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
                <Button type="primary" label="Log in" btnType="submit" />{"\n"}
            </form>
        </ComponentPreview>
        <h3>Disable a fieldset</h3>
        <p>Disable entire fieldsets with <Attribute name="disabled" /> attribute...</p>
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
                <Button type="primary" label="Log in" btnType="submit" disabled />{"\n"}
            </form>
        </ComponentPreview>
    </>
);

const StaticText = () => (
    <>
        <h2 id="static-text">Static text</h2>
        <p>Static text...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <FormControlText label="Company" text="PayEx" />
            <FormControlText label="Employee" text="Bob Corlsan" />
        </ComponentPreview>
    </>
);

const Checkboxes = () => (
    <>
        <h2 id="checkboxes">Checkboxes</h2>
        <p>Checkboxes...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Checkbox label="Bread" id="checkbox-example-1" />
            <Checkbox label="Not bread. I'm not really fond of it. What I would really like, however, is one single piece of cracker with some nutella on it. Perhaps this could be the second checkbox. These thoughts are written here simply to show you how the checkboxes align themselves when label text is fairly long." id="checkbox-example-2" />
            <Checkbox label="Milk" id="checkbox-example-3" checked />
        </ComponentPreview>
    </>
);

const DisabledCheckboxes = () => (
    <>
        <h2 id="disabled-checkboxes">Disabled checkboxes</h2>
        <p>Disabled checkboxes...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Checkbox label="Bread" id="checkbox-disabled-example-1" disabled />
            <Checkbox label="Not bread. I'm not really fond of it. What I would really like, however, is one single piece of cracker with some nutella on it. Perhaps this could be the second checkbox. These thoughts are written here simply to show you how the checkboxes align themselves when label text is fairly long." id="checkbox-disabled-example-2" disabled />
            <Checkbox label="Milk" id="checkbox-disabled-example-3" disabled checked />
        </ComponentPreview>
    </>
);

const RadioButtons = () => (
    <>
        <h2 id="radio-buttons">Radio buttons</h2>
        <p>Radio buttons...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Radio label="Hamburgers" id="radio-example-1" name="radio-example" />
            <Radio label="Not the one above because I'm not really fond of hamburgers. What I would really like, however, is a nice piece of steak. Perhaps that could be the second option. These thoughts are written here simply to show you how radio buttons align themselves when label text is fairly long." id="radio-example-2" name="radio-example" />
            <Radio label="Pizza" id="radio-example-3" name="radio-example" checked />
        </ComponentPreview>
    </>
);

const DisabledRadioButtons = () => (
    <>
        <h2 id="disabled-radio-buttons">Disabled radio buttons</h2>
        <p>Disabled radio buttons...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Radio label="Hamburgers" id="radio-disabled-example-1" name="radio-disabled-example" disabled />
            <Radio label="Not the one above because I'm not really fond of hamburgers. What I would really like, however, is a nice piece of steak. Perhaps that could be the second option. These thoughts are written here simply to show you how radio buttons align themselves when label text is fairly long." id="radio-disabled-example-2" name="radio-disabled-example" disabled />
            <Radio label="Pizza" id="radio-disabled-example-3" name="radio-disabled-example" disabled checked />
        </ComponentPreview>
    </>
);

const Toggleboxes = () => (
    <>
        <h2 id="toggleboxes">Toggleboxes</h2>
        <p>Toggleboxes...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Togglebox id="togglebox-example-1" label="Enable overdrive" />
            <Togglebox id="togglebox-example-2" label="Enable superpowers" checked />
        </ComponentPreview>
    </>
);

const DisabledToggleboxes = () => (
    <>
        <h2 id="disabled-toggleboxes">Disabled toggleboxes</h2>
        <p>Disabled toggleboxes...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Togglebox id="togglebox-disabled-example-1" label="Enable overdrive" disabled />
            <Togglebox id="togglebox-disabled-example-2" label="Enable superpowers" disabled checked />
        </ComponentPreview>
    </>
);

const RangeSlider = () => (
    <>
        <h2 id="rangeslider">Rangeslider</h2>
        <p>Asides from the default behavior of a range input, the Rangeslider{"'"}s colors and label positioning can be customized.</p>
        <p>Currently there are three different supported colors for the slider: <Property value=".rangeslider-brand" />, <Property value=".rangeslider-default" /> and <Property value=".rangeslider-neutral" />.</p>

        <p>The Rangeslider currently supports two positions: <Property value=".label-right" /> and <Property value=".label-top" />. If no position is given, <Property value="right" /> is defaulted.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Rangeslider min={0} max={200} step={1} value={100} valueLabel valueLabelPrefix="$" valueLabelPostfix="%" />
        </ComponentPreview>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <Rangeslider min={0} max={200} step={1} value={100} color="neutral" valueLabel valueLabelPrefix="$" valueLabelPostfix="%" valueLabelPosition="top" />
        </ComponentPreview>
    </>
);

const DisabledRangeSlider = () => (
    <>
        <h2 id="disabled-rangeslider">Disabled rangeslider</h2>
        <p>Disabled rangeslider...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <Rangeslider min={0} max={200} step={1} value={100} valueLabel valueLabelPrefix="$" valueLabelPostfix="%" disabled />
        </ComponentPreview>
    </>
);

const FormsText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Forms...</p>
        <Overview />
        <FormGrid />
        <Validation />
        <UsageWithFieldsets />
        <StaticText />
        <Checkboxes />
        <DisabledCheckboxes />
        <RadioButtons />
        <DisabledRadioButtons />
        <Toggleboxes />
        <DisabledToggleboxes />
        <RangeSlider />
        <DisabledRangeSlider />
    </div>
);

class Forms extends Component {
    componentDidMount () {
        rangeslider.init();
        validation.init();
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

/* For testing */
export { Overview, FormGrid, Validation, UsageWithFieldsets, StaticText, Checkboxes, DisabledCheckboxes, RadioButtons, DisabledRadioButtons, Toggleboxes, DisabledToggleboxes, RangeSlider, DisabledRangeSlider, FormsText };
