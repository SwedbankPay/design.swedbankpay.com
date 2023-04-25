import React from "react";
import Radio from "@components/FormComponents/Radio";

const options = [
	{
		id: "radio-example-1",
		label: "Label",
		checked: true,
	},
	{
		id: "radio-example-2",
		label: "Label",
	},
];

export const radiobuttonShowCase = {
	id: "radioShowcase",
	tabsId: "radioShowcaseTabs",
	elements: [
		{
			tab: "Primary",
			component: (
				<Radio
					groupTitle="Group legend"
					name="radio-group-example"
					options={options}
					group
				/>
			),
			options: {
				checkbox: [
					{
						title: "Label add on",
						inputs: [
							{
								id: "hint_text",
								name: "Hint text",
								value: {
									helpBlock: "Hint text",
									hintTextId: "hint-text-radio-example",
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
							{
								name: "Error",
								value: {
									errorMessage: "Descriptive helpful error message.",
								},
							},
						],
					},
				],
			},
			title: "Radio button group",
			description:
				"The radio button group has a label on top which describes the group. Each individual radio button is followed by a label which clearly describes the options. The main guideline for radio button groups is to select one of the radio buttons by default, there might however be situations where you can’t identify a default selection.",
		},
		{
			tab: "Checkmark",
			component: (
				<Radio
					groupTitle="Group legend"
					name="radio-group-example"
					options={options}
					group
					style="checkmark"
				/>
			),
			options: {
				checkbox: [
					{
						title: "Label add on",
						inputs: [
							{
								id: "hint_text",
								name: "Hint text",
								value: {
									helpBlock: "Hint text",
									hintTextId: "hint-text-radio-example",
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
							{
								name: "Error",
								value: {
									errorMessage: "Descriptive helpful error message.",
								},
							},
						],
					},
				],
			},
			title: "Checkmark buttons",
			description:
				"The checkmark buttons work just as normal radio buttons, but with a different look.",
		},
	],
};

export const doOptions = [
	{
		id: "radio-do-example-1",
		label: "Debit card",
		checked: true,
	},
	{
		id: "radio-do-example-2",
		label: "Credit card",
	},
	{
		id: "radio-do-example-3",
		label: "Gift card",
	},
];

export const dontOptions = [
	{
		id: "radio-dont-example-1",
		label: "Choose a later date for delivery",
	},
	{
		id: "radio-dont-example-2",
		label: "Instant delivery",
	},
	{
		id: "radio-dont-example-3",
		label: "4-7days delivery",
	},
];

export const ContentGuidelinesOptions = [
	{
		id: "radio-guidelines-example-1",
		label: "Label",
		checked: true,
	},
	{
		id: "radio-guidelines-example-2",
		label: "Label",
	},
	{
		id: "radio-guidelines-example-3",
		label: "Label",
	},
];

export const ErrorStateOptions = [
	{
		id: "radio-error-example-1",
		label: "Label",
	},
	{
		id: "radio-error-example-2",
		label: "Label",
	},
	{
		id: "radio-error-example-3",
		label: "Label",
	},
];
