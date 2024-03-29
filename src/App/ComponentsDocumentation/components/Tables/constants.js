import React from "react";
import Tag from "@components/CodeTags";
import Table from "@components/Table";
import ActionList from "@components/ActionList";

const Buttons = ({ actionList, favBtn, deleteBtn }) => (
	<span className="button-container">
		{actionList ? (
			<ActionList items={[]} />
		) : (
			<>
				<button className="table-button">
					<i className="at-pencil small" aria-hidden="true"></i>
				</button>
				{deleteBtn ? (
					<button className="btn btn-secondary">Delete</button>
				) : (
					<button className="table-button">
						<i className="at-trash small" aria-hidden="true"></i>
					</button>
				)}
				{favBtn && (
					<button className="table-button">
						<i className="at-plus-heart small" aria-hidden="true"></i>
					</button>
				)}
			</>
		)}
	</span>
);

export const showcaseTableObj = (buttons) => {
	const tableData = {
		thead: [{ content: "#" }, { content: "Name" }, { content: "Status" }],
		tbody: [],
	};

	const array = ["McGregor", "Sean O'Malley", "Bisping", "Mike Perry"];
	const status = ["success", "danger", "neutral", "inactive"];

	array.map((name, i) => {
		tableData.tbody.push({
			tr: [
				{ content: i + 1, th: true },
				{ content: name },
				{
					content: (
						<span className={`status status-${status[i]}`}>
							{status[i].charAt(0).toUpperCase() + status[i].slice(1)}
						</span>
					),
				},
			],
		});
	});

	if (buttons) {
		tableData.thead.push({ content: "Edit", classname: "no-sort align-right" });
		tableData.tbody.map((object) => object.tr.push({ content: <Buttons /> }));
	}

	return tableData;
};

export const tableShowcase = {
	id: "overviewTables",
	elements: [
		{
			component: <Table tableData={showcaseTableObj()} caption="Employees" />,
			options: {
				checkbox: [
					{
						id: "table_addons",
						title: "Add on",
						inputs: [
							{
								id: "hover_effect",
								name: "Hover effect",
								value: {
									hover: true,
								},
							},
							{
								id: "column_divider",
								name: "Column dividers",
								value: {
									divided: true,
								},
							},
							{
								id: "table_buttons",
								name: "Buttons",
								value: {
									tableData: showcaseTableObj(true),
								},
							},
							{
								id: "sorting",
								name: "Sorting",
								value: {
									sortable: true,
								},
							},
						],
					},
				],
				radio: [
					{
						id: "table_color",
						title: "Color",
						values: [
							{
								name: "Striped",
								value: {
									plain: false,
								},
							},
							{
								name: "Plain",
								value: {
									plain: true,
								},
							},
						],
					},
					{
						id: "table_style",
						title: "Style",
						values: [
							{
								name: "Default",
								value: {
									condensed: false,
								},
							},
							{
								name: "Condensed",
								value: {
									condensed: true,
								},
							},
						],
					},
				],
			},
			title: "Table",
			description: (
				<p>
					The table component should be preceded by either a{" "}
					<Tag type="primary" code="<caption>" /> or a heading that introduces
					the content of the table. The table color can either be striped or
					plain with borders, and there is also a condensed version of the table
					with more narrow rows. Column dividers can be added to make the
					content easier to read vertically. Adding a row hover state can help
					the user visually scan the data in a row, even if the row is not
					interactive - this is especially helpful in large tables. When you
					need to use sorting on your table, you can do it in one or more
					columns, by ascending (A-Z, 0-9) or descending (Z-A, 9-0) order.
				</p>
			),
		},
	],
};

const array = ["Text", "Text", "Text", "Text"];

export const alignmentTable = (alignRight) => {
	const tableData = {
		thead: [
			{ content: "Column 1" },
			{ content: "Column 2", classname: alignRight ? "align-right" : null },
		],
		tbody: [],
	};

	array.map((content) => {
		tableData.tbody.push({
			tr: [{ content }, { content: "4 500,00 SEK", classname: "align-right" }],
		});
	});

	return tableData;
};

export const consistencyTable = (chaos) => {
	const tableData = {
		thead: [],
		tbody: [],
	};

	for (let i = 0; i < 4; i++) {
		i === 3
			? tableData.thead.push({
					content: "Buttons",
					classname: chaos ? null : "align-right",
			  })
			: tableData.thead.push({ content: `Column ${i + 1}` });

		tableData.tbody.push({
			tr: [
				{ content: "Text" },
				{ content: "Text" },
				{ content: "Text" },
				{ content: <Buttons />, classname: "align-right" },
			],
		});
	}

	if (chaos) {
		const classArray = ["text-center", "text-end", ""];

		tableData.tbody.map((obj) =>
			obj.tr.map(
				(obj) =>
					(obj.classname =
						classArray[Math.floor(Math.random() * 3).toString()]),
			),
		);
	}

	return tableData;
};

export const buttonTypesTable = (buttonType) => {
	const tableData = {
		thead: [
			{ content: "Column 1" },
			{ content: "Column 2", classname: "align-right" },
		],
		tbody: [],
	};

	const attrs = {
		deleteBtn: buttonType === "delete" ? true : null,
		actionList: buttonType === "actionList" ? true : null,
		favBtn: buttonType === "favBtn" ? true : null,
	};

	array.map((content) => {
		tableData.tbody.push({
			tr: [
				{ content },
				{ content: <Buttons {...attrs} />, classname: "align-right" },
			],
		});
	});

	return tableData;
};
