import React from "react";
import Togglebox from "@components/FormComponents/Togglebox";
import Checkbox from "@components/FormComponents/Checkbox";
import Radio from "@components/FormComponents/Radio";
import Button from "@components/Button";
import { Link } from "react-router-dom";

export const toggleboxShowCase = {
	id: "no-tabs",
	elements: [
		{
			component: <Togglebox label="Label" id="togglebox-example" />,
			options: {
				radio: [
					{
						id: "label_position",
						title: "Label position",
						values: [
							{
								name: "Left",
								value: {
									labelTop: false,
								},
							},
							{
								name: "Top",
								value: {
									labelTop: true,
								},
							},
						],
					},
					{
						id: "state_radio",
						title: "State modifiers",
						values: [
							{
								name: "Enabled",
								value: {
									disabled: false,
								},
							},
							{
								name: "Disabled",
								value: {
									disabled: true,
								},
							},
						],
					},
				],
			},
			title: "Togglebox",
			description:
				"Toggleboxes have two states: on and off. Each of these have default, hover, focus and disabled states. A togglebox must always be accompanied by a label, on the left side or on the top, that clearly conveys what option a user will turn on or off.",
		},
	],
};

export const howToUse = [
	{
		success: (
			<>
				<span className="h4 d-inline-block mb-3">
					Do you have any credit cards
				</span>
				<Radio
					type="radio"
					label="Yes"
					id="do-example"
					name="do-example"
					checked
				/>
				<Radio type="radio" label="No" id="do-example-1" name="do-example" />
			</>
		),
		error: (
			<>
				<p>
					<b>Do you have any credit cards</b>
				</p>
				<Togglebox id="ex2" label="Yes" />
			</>
		),
		text: (
			<p>
				Instead of using a togglebox for answering yes/no questions it is better
				to use <Link to="/components/radio-button">radio buttons</Link>.
			</p>
		),
	},
	{
		success: (
			<>
				<Checkbox label="I accept the terms and conditions" id="example-3" />
				<div className="d-flex justify-content-end mt-4">
					<Button size="sm" type="link" label="Cancel" />
					<Button size="sm" type="primary" label="Submit" />
				</div>
			</>
		),
		error: (
			<>
				<Togglebox label="I accept the terms and conditions" id="example-4" />
				<div className="d-flex justify-content-end mt-4">
					<Button size="sm" type="link" label="Cancel" />
					<Button size="sm" type="primary" label="Submit" />
				</div>
			</>
		),
		text: (
			<p>
				Instead of using a togglebox for actions that won’t happen until a
				submit button is pressed it is better to use a{" "}
				<Link to="/components/checkbox">checkbox</Link>.
			</p>
		),
	},
	{
		success: (
			<>
				<span className="h4 d-inline-block mb-2">Preferences</span>
				<Togglebox label="Show pending payments" id="example-5" checked />
				<Togglebox label="Show completed payments" id="example-6" />
			</>
		),
		error: (
			<>
				<span className="h4 d-inline-block mb-2">Preferences</span>
				<Checkbox label="Show pending payments" id="example-7" checked />
				<Checkbox label="Show completed payments" id="example-8" />
			</>
		),
		text: (
			<p>
				Do use toggleboxes for on/off preferences of features or behaviour,
				don’t use checkboxes.
			</p>
		),
	},
];
