import React from "react";

const Slab = ({ darkShadow, noShadow }) => (
	<div
		id="slab-doc"
		className={`slab${darkShadow ? " dark" : ""}${noShadow ? " flat" : ""}`}
	/>
);

export const overviewSlabs = {
	id: "overviewSlabs",
	elements: [
		{
			component: <Slab />,
			options: {
				radio: [
					{
						id: "shadow-type",
						title: "Shadow type",
						values: [
							{
								name: "Drop shadow 15%",
								value: {
									darkShadow: false,
									noShadow: false,
								},
							},
							{
								name: "Drop shadow 25%",
								value: {
									darkShadow: true,
									noShadow: false,
								},
							},
							{
								name: "Without shadow",
								value: {
									darkShadow: false,
									noShadow: true,
								},
							},
						],
					},
				],
			},
			title: "Overview slabs",
			description:
				"The slab component is a content frame that is used as a graphic element background in order to display different types of content on its surface. By adding drop shadows it gets more noticeable and adds depth and emphasis to the design, creating an image of floating UI elements.",
		},
	],
};
