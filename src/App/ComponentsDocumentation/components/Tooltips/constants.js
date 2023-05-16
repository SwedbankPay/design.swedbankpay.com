import React from "react";
import TooltipComponent from "@components/Tooltips";

const Tooltip = ({ position }) => (
	<TooltipComponent position={position} icon="edit" text="Edit" />
);

export const tooltipShowCase = {
	id: "overviewTooltips",
	elements: [
		{
			component: <Tooltip />,
			options: {
				radio: [
					{
						title: "Orientation",
						values: [
							{
								id: "top",
								name: "Top",
								default: true,
								value: {
									position: "top",
								},
							},
							{
								id: "bottom",
								name: "Bottom",
								value: {
									position: "bottom",
								},
							},
							{
								id: "left",
								name: "Left",
								value: {
									position: "left",
								},
							},
							{
								id: "right",
								name: "Right",
								value: {
									position: "right",
								},
							},
						],
					},
				],
			},
			title: "Tooltip",
			description: (
				<p>
					Tooltips can be useful when the the interface is space-constrained.
					However when there are sufficient space within the design it is always
					preferred to explore other design options to keep content visible by
					default as tooltips can be hard to spot, require more effort from the
					user, block parts of the interface and may be cropped on smaller
					screens.{" "}
				</p>
			),
		},
	],
};
