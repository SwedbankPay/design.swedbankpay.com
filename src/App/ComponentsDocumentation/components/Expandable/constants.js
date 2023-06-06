import React from "react";
import Expandable from "@components/Expandable";

export const items = [
	{
		id: "exp-1",
		title: "My title",
		subtitle: "My subtitle",
		content: (
			<p>
				If you want to, you can replace this text component with a local
				component to create a table or similar within the Accordion.
			</p>
		),
	},
	{
		id: "exp-2",
		title: "My title",
		subtitle: "My subtitle",
		content: (
			<p>
				If you want to, you can replace this text component with a local
				component to create a table or similar within the Accordion.
			</p>
		),
	},
	{
		id: "exp-3",
		title: "My title",
		subtitle: "My subtitle",
		content: (
			<p>
				If you want to, you can replace this text component with a local
				component to create a table or similar within the Accordion.
			</p>
		),
	},
];

const ExpandableExample = ({ icon }) => (
	<div className="d-flex flex-column align-items-stretch w-100">
		<Expandable items={items} icon={icon} />
	</div>
);

export const expandableSidebarOptions = {
	id: "no-tabs",
	elements: [
		{
			component: <ExpandableExample />,
			options: {
				checkbox: [
					{
						title: "Icon",
						inputs: [
							{
								id: "icon",
								name: "Icon",
								value: {
									icon: "credit_card",
								},
							},
						],
					},
				],
			},
		},
	],
};
