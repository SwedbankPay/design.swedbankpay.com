import React from "react";

import CodeTags from "@components/CodeTags";
import Alert from "@components/Alert";
import { toast } from "@src/scripts/main";

const Toast = ({ type, title }) => (
	<button
		className="btn btn-primary"
		type="button"
		onClick={(event) =>
			toast({
				event,
				html: `
            <p>
                <b>${title} title:</b>
                Input informative alert information here, provide <a href>link</a> to solution or more info when possible.
            </p>`,
				type,
			})
		}
	>
		Show {title} toast
	</button>
);

export const optionsTable = [
	{
		tableHead: ["Name", "Type", "Default", "Description"],
		tableBody: [
			{
				tableData: [
					"html",
					"String",
					<>
						<CodeTags type="secondary" code='""' />
					</>,
					"The HTML content of the Toast.",
				],
			},
			{
				tableData: [
					"type",
					"String",
					<>
						<CodeTags type="secondary" code='""' />
					</>,
					<>
						Alert types: <CodeTags type="secondary" code="success" />,{" "}
						<CodeTags type="secondary" code="neutral" />,{" "}
						<CodeTags type="secondary" code="warning" />,{" "}
						<CodeTags type="secondary" code="danger" />
					</>,
				],
			},
			{
				tableData: [
					"classes",
					"Array of strings",
					<>
						<CodeTags type="secondary" code="[]" />
					</>,
					"Classes to be added to the toast element.",
				],
			},
			{
				tableData: [
					"completeCallback",
					"Function",
					<>
						<CodeTags type="secondary" code="null" />
					</>,
					"Callback function called when toast is dismissed.",
				],
			},
		],
	},
];

const AlertBox = () => (
	<Alert
		id="toast-overview-alert"
		type="informative"
		icon={"info"}
		text={
			<p>
				<b>Static code example</b> The code viewer shows an example on how to
				trigger a neutral toast. Change the type for warning/danger/success.
			</p>
		}
	/>
);

export const toastShowCase = {
	id: "overviewToast",
	tabsId: "overviewToastTabs",
	hideOptions: true,
	elements: [
		{
			tab: "Neutral",
			component: <Toast type="neutral" title="Neutral" />,
			title: "Neutral toast",
			description:
				"Use this toast to inform the user about something, in some cases a link can be used to direct the user towards continued reading. For information on how to trigger a toast, read more under Developer documentation.",
		},
		{
			tab: "Success",
			component: <Toast type="success" title="Success" />,
			title: "Success toast",
			description: (
				<>
					<p>
						Use success toast to show that the action performed by the user was
						successful.
					</p>
					<AlertBox />
				</>
			),
		},
		{
			tab: "Warning",
			component: <Toast type="warning" title="Warning" />,
			title: "Warning toast",
			description: (
				<>
					<p>
						The warning toast warns the user about situations that might be
						unfavorable. Don’t use this to present critical information.
					</p>
					<AlertBox />
				</>
			),
		},
		{
			tab: "Danger",
			component: <Toast type="danger" title="Danger" />,
			title: "Danger toast",
			description: (
				<>
					<p>
						Danger toast informs the user of error and issues that may have
						occurred. They should let the user know what has happened and how
						the user can solve the issue.
					</p>
					<AlertBox />
				</>
			),
		},
	],
};
