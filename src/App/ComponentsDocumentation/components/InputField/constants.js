import React from "react";
import InputGroup from "@components/InputGroup";

const InputOptions = () => ({
	checkbox: [
		{
			title: "Label add on",
			inputs: [
				{
					id: "hint_text",
					name: "Hint text",
					value: {
						helpBlock: "Hint text",
						hintTextId: "hint-text-example-id",
					},
				},
			],
		},
	],
	radio: [
		{
			id: "fix_radio",
			title: "Prefix/Postfix",
			values: [
				{
					name: "None",
					value: {
						type: "text",
					},
				},
				{
					name: "Prefix - Icon",
					value: {
						type: "email",
						addOnType: "icon",
						prefixValue: "at-envelope small",
					},
				},
				{
					name: "Postfix - Text",
					value: {
						addOnType: "text",
						postfixValue: "kr",
						postfix: true,
					},
				},
			],
		},
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
					name: "Success",
					value: {
						success: true,
					},
				},
				{
					name: "Error",
					value: {
						errorMessage: "Descriptive helpful error message.",
						error: true,
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
});

export const inputShowCase = {
	id: "no-tabs",
	tabsId: "overviewInputFieldTabs",
	elements: [
		{
			tab: "Input field",
			component: (
				<InputGroup
					placeholder="Placeholder text"
					type="text"
					label="Label"
					id="input-showcase-example"
				/>
			),
			options: InputOptions(),
			title: "Input field",
			description: (
				<>
					<p>
						Use an input field when the expected user input is a single line of
						text like name, email or credit card number.
					</p>
					<p>Prefix/postfix can be used for faster communication.</p>
				</>
			),
		},
		{
			tab: "Text area",
			component: (
				<InputGroup
					type="textarea"
					placeholder="Placeholder text"
					label="Label"
				/>
			),
			options: {
				checkbox: [
					{
						title: "Label add on",
						inputs: [
							{
								id: "hint_text_textarea",
								name: "Hint text",
								value: {
									helpBlock: "Hint text",
									hintTextId: "hint-text-text-area-example",
								},
							},
						],
					},
				],
				radio: [
					{
						id: "state_radio_textarea",
						title: "State modifiers",
						values: [
							{
								name: "Default",
								value: {
									disabled: false,
								},
							},
							{
								name: "Success",
								value: {
									success: true,
								},
							},
							{
								name: "Error",
								value: {
									errorMessage: "Descriptive helpful error message.",
									error: true,
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
			title: "Text area",
			description:
				"Use a Text area when the expected user input is more than one sentence.",
		},
	],
};
