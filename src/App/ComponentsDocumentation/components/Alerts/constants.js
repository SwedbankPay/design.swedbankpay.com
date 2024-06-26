import React from "react";
import Alert from "@components/Alert";

const titleBuilder = (type) => (
	<p>
		<b>{type} title:</b> Input informative alert message here, provide link to
		solution or more info when <a href="#">possible</a>.
	</p>
);

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
					text={titleBuilder("Danger")}
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
					text={titleBuilder("Warning")}
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
					text={titleBuilder("Informative")}
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
					icon="swepay-icon-check-circle-filled"
					text={titleBuilder("Success")}
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
	],
};
