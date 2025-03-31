import React from "react";
import Alert from "@components/Alert";

const titleBuilder = (type, titleOnOwnLine = false) => {
	const title = type === "feedback" ? "Done!" : `${type} title:`;

	if (!titleOnOwnLine) {
		return (
			<p>
				<b>{title}</b> Input informative alert message here, provide link to
				solution or more info when <a href="#">possible</a>.
			</p>
		);
	} else {
		return (
			<>
				<p>
					<b>{title}</b>
					<br />
					Form was sent! Great job!
				</p>
			</>
		);
	}
};

export const alertsShowCase = {
	id: "overviewAlert",
	tabsId: "overviewAlertTabs",
	elements: [
		{
			tab: "Danger",
			component: (
				<Alert
					type="danger"
					icon="swepay-icon-error-triangle-filled"
					text={titleBuilder("Danger", false)}
				/>
			),
			options: {
				checkbox: [
					{
						title: "Options",
						inputs: [
							{
								id: "close_button",
								name: "Close button",
								value: {
									close: true,
								},
							},
						],
					},
				],
			},
			title: "Danger alert",
			description:
				"Use this alert to let the user know that something went wrong. The message should clearly state the problem and if possible provide information on how to fix it.",
		},
		{
			tab: "Warning",
			component: (
				<Alert
					type="warning"
					icon="swepay-icon-warning-triangle-filled"
					text={titleBuilder("Warning", false)}
				/>
			),
			options: {
				checkbox: [
					{
						title: "Options",
						inputs: [
							{
								id: "close_button",
								name: "Close button",
								value: {
									close: true,
								},
							},
						],
					},
				],
			},
			title: "Warning error",
			description:
				"Use this alert to help users avoid errors and warn against decisions that might have unexpected results",
		},
		{
			tab: "Informative",
			component: (
				<Alert
					type="informative"
					icon="swepay-icon-info-circle-filled"
					text={titleBuilder("Informative", false)}
				/>
			),
			options: {
				checkbox: [
					{
						title: "Options",
						inputs: [
							{
								id: "close_button",
								name: "Close button",
								value: {
									close: true,
								},
							},
						],
					},
				],
			},
			title: "Informative alert",
			description:
				"Use this alert to communicate additional information to the user that may not be tied to their current action or task.	",
		},
		{
			tab: "Success",
			component: (
				<Alert
					type="success"
					icon="swepay-icon-check-circle-filled-customizable"
					text={titleBuilder("Success", false)}
				/>
			),
			options: {
				checkbox: [
					{
						title: "Options",
						inputs: [
							{
								id: "close_button",
								name: "Close button",
								value: {
									close: true,
								},
							},
						],
					},
				],
			},
			title: "Success alert",
			description:
				"Use this alert to let the user know that an action or event has happened successfully. Success alerts are not a common use case for alert messages.",
		},
		{
			tab: "Feedback",
			component: <Alert type="feedback" text={titleBuilder("Done", true)} />,
			options: {
				checkbox: [
					{
						title: "Options",
						inputs: [
							{
								id: "close_button",
								name: "Close button",
								value: {
									close: true,
								},
							},
						],
					},
				],
			},
			title: "Feedback message",
			description:
				"Use this variant to provide quick, light feedback to users after completing a task, sharing helpful tips, instructions, or other non-critical information. It offers a more relaxed communication style, distinct from traditional alert types like success, warning, info, or danger.",
		},
	],
};
