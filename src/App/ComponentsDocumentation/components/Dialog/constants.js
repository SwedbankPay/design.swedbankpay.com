import React from "react";
import DialogComponent from "@components/Dialog";

const DialogExample = ({ size, hasDividers, hasGrayBg, slidesFromBottom }) => (
	<>
		<button
			className="btn btn-primary"
			type="button"
			data-dialog-open="demo-dialog"
		>
			{"\n"}Open dialog{"\n"}
		</button>
		<DialogComponent
			diaHeader="Delete"
			diaId="demo-dialog"
			size={size}
			hasDividers={hasDividers}
			slidesFromBottom={slidesFromBottom}
			hasGrayBg={hasGrayBg}
		>
			<p className="mb-0">
				You’re about to permanently delete <i>German Swashbuckle (456)?</i>
			</p>
		</DialogComponent>
	</>
);

export const dialogShowcase = {
	id: "overview-dialog",
	hideOptions: false,
	elements: [
		{
			tab: "Dialog modern 🌟",
			component: <DialogExample />,
			options: {
				checkbox: [
					{
						title: "",
						inputs: [
							{
								id: "checkbox-dialog",
								name: "Has dividers",
								value: {
									hasDividers: true,
								},
							},
						],
					},
				],
				radio: [
					{
						id: "dialog_size_radio",
						title: "Dialog size",
						values: [
							{
								id: "radio-size-md",
								name: "Medium (default)",
								value: {
									size: "medium",
								},
							},
							{
								id: "radio-size-lg",
								name: "Large",
								value: {
									size: "large",
								},
							},
						],
					},
					{
						id: "dialog_slides_from_bottom_radio",
						title: "Slides in animation direction",
						values: [
							{
								id: "radio-slide-bottom",
								name: "From the bottom (default)",
								value: {
									slidesFromBottom: true,
								},
							},
							{
								id: "radio-slides-right",
								name: "From the right",
								value: {
									slidesFromBottom: false,
								},
							},
						],
					},
					{
						id: "dialog_bg_color_radio",
						title: "modal background color",
						values: [
							{
								id: "radio-bg-white",
								name: "White bg (default)",
								value: {
									hasGrayBG: false,
								},
							},
							{
								id: "radio-bg-gray",
								name: "Gray bg",
								value: {
									hasGrayBg: true,
								},
							},
						],
					},
				],
			},
			title: "Dialog",
			description:
				"The new dialog component leverages the new native <dialog> element. This way we get A11y & some scripts for free",
		},
	],
};
