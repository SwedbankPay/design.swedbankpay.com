import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

import { rangeslider } from "../../../../px-script";
import InputGroup from "../../../components/InputGroup";
import Button from "../../../components/Button";
import { Checkbox, FormControlText, Radio, Rangeslider, Togglebox } from "../../../components/FormComponents";

const Overview = () => (
    <div>
        <h2 id="overview">Overview</h2>
        <p>Forms overview...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <form>
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
                <Button type="brand" label="Submit" btnType="submit" />{"\n"}
            </form>
        </ComponentPreview>
    </div>
);

const FormGrid = () => (
    <div>
        <h2 id="form-grid">Form grid</h2>
        <p>Form grid...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <InputGroup
                            id="grid-first-name"
                            type="text"
                            autoComplete="given-name"
                            label="First name"
                            placeholder="Enter your first name"
                            helpBlock="Hope it is something cool"
                        />
                    </div>
                    <div className="col-md-6">
                        <InputGroup
                            id="grid-last-name"
                            type="text"
                            label="Last name"
                            autoComplete="family-name"
                            placeholder="Enter your last name"
                            helpBlock="Most likely in your passport"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <InputGroup
                            id="grid-email"
                            type="email"
                            autoComplete="email"
                            label="Email"
                            placeholder="Enter email"
                            helpBlock="Usually contains an @"
                        />
                    </div>
                    <div className="col-md-4">
                        <InputGroup
                            id="grid-new-password"
                            type="password"
                            label="Password"
                            autoComplete="new-password"
                            placeholder="Enter your desired password"
                            helpBlock="It is safe with us"
                        />
                    </div>
                    <div className="col-md-4">
                        <InputGroup
                            id="grid-repeat-password"
                            type="password"
                            label="Repeat password"
                            autoComplete="new-password"
                            placeholder="Repeat your desired password"
                            helpBlock="Definately not looking over your shoulder"
                        />
                    </div>
                </div>
            </form>
        </ComponentPreview>
    </div>
);

const UsageWithFieldsets = () => (
    <div>
        <h2 id="usage-with-fieldsets">Usage with fieldsets</h2>
        <p>Usage with fieldsets...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <form>
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
                <Button type="neutral" label="Log in" btnType="submit" />{"\n"}
            </form>
        </ComponentPreview>
        <h3>Disable a fieldset</h3>
        <p>Disable entire fieldsets with <span className="token attr-name">disabled</span> attribute...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
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
                <Button type="neutral" label="Log in" btnType="submit" />{"\n"}
            </form>
        </ComponentPreview>
    </div>
);

const StaticText = () => (
    <div>
        <h2 id="static-text">Static text</h2>
        <p>Static text...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <FormControlText label="Company" text="PayEx" />
            <FormControlText label="Employee" text="Bob Corlsan" />
        </ComponentPreview>
    </div>
);

const Checkboxes = () => (
    <div>
        <h2 id="checkboxes">Checkboxes</h2>
        <p>Checkboxes...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <Checkbox label="Bread" id="checkbox-example-1" />
            <Checkbox label="Milk" id="checkbox-example-2" checked />
        </ComponentPreview>
    </div>
);

const DisabledCheckboxes = () => (
    <div>
        <h2 id="disabled-checkboxes">Disabled checkboxes</h2>
        <p>Disabled checkboxes...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <Checkbox label="Bread" id="checkbox-disabled-example-1" disabled />
            <Checkbox label="Milk" id="checkbox-disabled-example-2" disabled checked />
        </ComponentPreview>
    </div>
);

const RadioButtons = () => (
    <div>
        <h2 id="radio-buttons">Radio buttons</h2>
        <p>Radio buttons...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <Radio label="Hamburgers" id="radio-example-1" name="radio-example" />
            <Radio label="Pizza" id="radio-example-2" name="radio-example" checked />
        </ComponentPreview>
    </div>
);

const DisabledRadioButtons = () => (
    <div>
        <h2 id="disabled-radio-buttons">Disabled radio buttons</h2>
        <p>Disabled radio buttons...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <Radio label="Hamburgers" id="radio-disabled-example-1" name="radio-disabled-example" disabled />
            <Radio label="Pizza" id="radio-disabled-example-2" name="radio-disabled-example" disabled checked />
        </ComponentPreview>
    </div>
);

const Toggleboxes = () => (
    <div>
        <h2 id="toggleboxes">Toggleboxes</h2>
        <p>Toggleboxes...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <Togglebox id="togglebox-example-1" label="Enable overdrive" />
            <Togglebox id="togglebox-example-2" label="Enable superpowers" checked />
        </ComponentPreview>
    </div>
);

const DisabledToggleboxes = () => (
    <div>
        <h2 id="disabled-toggleboxes">Disabled toggleboxes</h2>
        <p>Disabled toggleboxes...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <Togglebox id="togglebox-disabled-example-1" label="Enable overdrive" disabled />
            <Togglebox id="togglebox-disabled-example-2" label="Enable superpowers" disabled checked />
        </ComponentPreview>
    </div>
);

const RangeSlider = () => (
    <div>
        <h2 id="rangeslider">Rangeslider</h2>
        <p>Rangeslider...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <Rangeslider min={0} max={200} step={1} value={100} valueLabel={true} valueLabelPrefix="$" valueLabelPostfix="%" />
        </ComponentPreview>
    </div>
);

const FormsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Forms...</p>
        <Overview />
        <FormGrid />
        <UsageWithFieldsets />
        <StaticText />
        <Checkboxes />
        <DisabledCheckboxes />
        <RadioButtons />
        <DisabledRadioButtons />
        <Toggleboxes />
        <DisabledToggleboxes />
        <RangeSlider />
    </div>
);

class Forms extends Component {
    componentDidMount () {
        rangeslider.init();
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

/* for testing */
export { Overview, FormGrid, UsageWithFieldsets, StaticText, Checkboxes, DisabledCheckboxes, RadioButtons, DisabledRadioButtons, Toggleboxes, DisabledToggleboxes, FormsText };
