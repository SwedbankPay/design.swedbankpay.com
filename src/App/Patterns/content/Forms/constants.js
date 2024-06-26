import React from "react";
import { Link } from "react-router-dom";
import Button from "@components/Button";
import Checkbox from "@components/FormComponents/Checkbox";
import InputGroup from "@components/InputGroup";
import Links from "@components/Link";
import ProgressSteps from "@components/Steps";
import RadioButton from "@components/FormComponents/Radio";

const steps = [
	{
		title: "Step one",
		subtitle: "Authentication",
		completed: true,
	},
	{
		title: "Step two",
		ongoing: true,
		selected: true,
	},
	{
		title: "Step three",
	},
	{
		title: "Step four",
	},
];

const radioOptions = [
	{
		label: "Option 1",
		id: "options-1",
		checked: true,
	},
	{
		label: "Option 2",
		id: "options-2",
	},
	{
		label: "Option 3",
		id: "options-3",
	},
];

export const formsShowCase = {
	id: "overview-forms",
	tabsId: "overview-forms-tabs",
	hideOptions: true,
	elements: [
		{
			tab: "Form",
			component: (
				<div className="col-md-10 col-12">
					<form>
						<fieldset>
							<legend>
								<span className="h2">Contact us</span>
							</legend>
							<div className="col-12 col-sm-9 px-0">
								<InputGroup
									id="form-email-example"
									type="email"
									label="E-mail"
									autoComplete="email"
								/>
								<InputGroup
									type="select"
									id="form-select-example"
									label="Subject"
									placeholder="Select a subject"
									selectOptions={["Subject 1", "Subject 2", "Subject 3"]}
								/>
							</div>
							<InputGroup
								id="form-textarea-example"
								type="textarea"
								label="Message"
							/>
							<Checkbox
								id="forms-template-checkbox-example"
								label={
									<>
										I have read and accept Swedbank Pays&#39;s&nbsp;
										<Links linkText="privacy policy" rightIcon="launch" />
									</>
								}
							/>
							{"\n"}
							<Button type="primary" label="Send message" className="mt-3" />
						</fieldset>
					</form>
				</div>
			),
			title: "Form",
			description:
				"This in an example of a single page contact form using a collection of components including input fields, select list, checkbox and button.",
		},
		{
			tab: "Multi-step form",
			component: (
				<div className="col-md-10 col-12">
					<form>
						<ProgressSteps steps={steps} />
						<fieldset>
							<legend>
								<span className="h2">Step two</span>
							</legend>
							<div className="row mb-2">
								<InputGroup
									id="multi-form-example-1"
									type="text"
									label="Label"
									className="col-12 col-sm-6"
								/>
								<InputGroup
									id="multi-form-example-2"
									type="text"
									label="Label"
									className="col-12 col-sm-6"
								/>
							</div>
							<InputGroup
								id="multi-form-example-3"
								type="text"
								label="Label"
								className="mb-4"
							/>
							<RadioButton
								group
								groupTitle="Input label"
								options={radioOptions}
								name="multi-step-radio-example"
								className="mb-4"
							/>
							<div className="d-flex justify-content-between pt-2">
								<Button type="secondary" icon="arrow_back" label="Back" />
								<Button type="primary" label="Next step" />
							</div>
						</fieldset>
					</form>
				</div>
			),
			title: "Multi-step form",
			description:
				"This in an example of a multi-page form using a collection of components including a stepper, input fields, radio buttons and buttons.",
		},
	],
};

export const guidelinesElementsList = [
	{
		element: "Headings",
		text: "A title should be used to describe the form and section headings to describe sections within the form.",
	},
	{
		element: "Labels",
		text: "Input labels help users understand what information to provide in the corresponding input.",
	},
	{
		element: "Input fields",
		text: (
			<>
				<Link to="/components/input-field">Input fields</Link> enable users to
				input free-form text.
			</>
		),
	},
	{
		element: "Data inputs",
		text: (
			<>
				Information can be entered a variety of non-free form input field,{" "}
				<Link to="/components/checkbox">checkboxes</Link>,{" "}
				<Link to="/components/radio-button">radio button</Link>,{" "}
				<Link to="/components/select">select</Link>,{" "}
				<Link to="/components/datepickers">date pickers</Link>,{" "}
				<Link to="/components/togglebox">toggle-box</Link> and{" "}
				<Link to="/components/rangeslider">rangesliders</Link>.
			</>
		),
	},
	{
		element: "Hints",
		text: "Provides in-context guidance for the user through an always visible hint text.",
	},
	{
		element: "Buttons",
		text: (
			<>
				<Link to="/components/buttons">Buttons</Link> allows users to submit or
				exit a form, use a primary button for the main action, secondary button
				for secondary actions and a tertiary button to cancel.
			</>
		),
	},
];
