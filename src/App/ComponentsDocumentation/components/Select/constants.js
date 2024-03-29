import React from "react";
import InputGroup from "@components/InputGroup";
import Radio from "@components/FormComponents/Radio";
import { Datepicker } from "@components/FormComponents";
import { Link } from "react-router-dom";

export const selectOverview = {
	id: "no-tabs",
	elements: [
		{
			component: (
				<InputGroup
					id="select-showcase-example"
					type="select"
					label="Label"
					placeholder="Select option"
					selectOptions={["Blueberry", "Blackberry", "Berryberry"]}
				/>
			),
			options: {
				checkbox: [
					{
						title: "Label add on",
						inputs: [
							{
								id: "hint_text_select",
								name: "Hint text",
								value: {
									helpBlock: "Hint text",
									hintTextId: "select-hint-text-example",
								},
							},
						],
					},
				],
				radio: [
					{
						id: "state_radio",
						title: "State modifiers",
						values: [
							{
								name: "Default",
								value: {
									disabled: false,
								},
							},
							{
								name: "Error",
								value: {
									errorMessage: "Descriptive helpful error message.",
									error: true,
									required: true,
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
			title: "Select",
			description:
				"The select component looks similar to an input field but works differently. When activated it expands and displays a list of selectable options.",
		},
	],
};

export const whenToUse = {
	lead: "The select component should be used sparsely, often times there are better and more intuitive ways to present choices for the user.",
	content: [
		{
			correct: (
				<div className="mb-1">
					<p className="mb-2">Background color</p>
					<Radio
						id="radio-example-1"
						label="Blue"
						name="radio-example"
						checked
					/>
					<Radio id="radio-example-2" label="Red" name="radio-example" />
				</div>
			),
			selectOptions: ["Blue", "Red"],
			placeholder: "Select color",
			label: "Background color",
			text: (
				<p className="mb-4">
					In the example above, when there are very few choices, they should not
					be hidden inside a select list as this makes it harder for user to get
					an overview. Use{" "}
					<Link to="/components/radio-button">radio buttons</Link> instead.
				</p>
			),
		},
		{
			correct: (
				<Datepicker
					id="datepicker-example"
					label="Birthday"
					prefixType="icon"
					prefixValue="event"
					placeholder="YYYY-MM-DD"
				/>
			),
			selectOptions: [...Array(32).keys()].slice(1),
			placeholder: "Select day",
			label: "Day",
			text: (
				<p className="mb-4">
					Instead of using a dropdown input for selecting a day of the month. It
					is better to use a{" "}
					<Link to="/components/datepickers">datepicker</Link> to let user
					select the right date faster.
				</p>
			),
		},
		{
			correct: (
				<InputGroup
					id="select-do-example"
					type="text"
					label="Number of drinks"
					placeholder="4"
				/>
			),
			selectOptions: [1, 2, 3, 4],
			placeholder: "Select number",
			label: "Number of drinks",
			text: (
				<p className="mb-4">
					Instead of using a dropdown input that will force the user to choose
					from a set of predefined options it is sometimes better to use an{" "}
					<Link to="/components/input-field">input field</Link> where the user
					can type their answer.
				</p>
			),
		},
	],
};
