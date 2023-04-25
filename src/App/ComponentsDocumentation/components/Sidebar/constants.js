import React from "react";
import Sidebar from "@components/Sidebar";

export const SidebarNavList = [
	{
		title: "Home Page",
		icon: (
			<i className="material-icons-outlined" aria-hidden="true">
				home
			</i>
		),
	},
	{
		title: "Get Started",
		icon: (
			<i className="material-icons-outlined rotated" aria-hidden="true">
				wb_incandescent
			</i>
		),
		children: [
			{
				icon: (
					<i className="material-icons-outlined rotated" aria-hidden="true">
						accessibility
					</i>
				),
				title: "Accessibility",
			},
			{
				icon: (
					<i className="material-icons-outlined rotated" aria-hidden="true">
						palette
					</i>
				),
				title: "Colors",
				group: true,
				children: [
					{
						title: "Primary colors",
					},
					{
						title: "Secondary colors",
					},
					{
						title: "Tertiary colors",
					},
				],
			},
			{
				icon: (
					<i className="material-icons-outlined rotated" aria-hidden="true">
						grid_on
					</i>
				),
				title: "Grid",
			},
			{
				icon: (
					<i className="material-icons-outlined rotated" aria-hidden="true">
						space_bar
					</i>
				),
				title: "Spacing",
			},
		],
	},
	{
		title: "Identity",
		icon: (
			<i className="material-icons-outlined" aria-hidden="true">
				palette
			</i>
		),
		children: [
			{
				title: "Introduction",
			},
			{
				title: "Events",
				group: true,
				children: [
					{
						title: "Event 1",
					},
					{
						title: "Event 2",
					},
					{
						title: "Event 3",
					},
				],
			},
			{
				title: "Conclusion",
			},
		],
	},
];

export const SidebarNavListExtended = [
	{
		title: "Home Page",
		icon: (
			<i className="material-icons-outlined" aria-hidden="true">
				home
			</i>
		),
	},
	{
		title: "Get started",
		icon: (
			<i className="material-icons-outlined" aria-hidden="true">
				play_circle_outline
			</i>
		),
		children: [
			{
				title: "Second level (li.group)",
				group: true,
				children: [
					{
						title: "li.nav-leaf",
					},
					{
						title: "li.nav-leaf",
					},
					{
						title: "li.nav-leaf",
					},
				],
			},
			{
				title: "Second level (li.leaf)",
				children: [
					{
						title: "Third level",
					},
					{
						title: "Third level",
						children: [
							{
								title: "Fourth level",
							},
							{
								title: "Fourth level",
								children: [
									{
										title: "Fifth level",
									},
									{
										title: "Fifth level",
										group: true,
										children: [
											{
												title: "Sixth level (li.nav-leaf)",
											},
											{
												title: "Sixth level (li.nav-leaf)",
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		title: "Group",
		icon: (
			<i className="material-icons-outlined" aria-hidden="true">
				expand_circle_down
			</i>
		),
		children: [
			{
				title: "li.group",
				group: true,
				children: [
					{
						title: "li.nav-leaf",
					},
					{
						title: "li.nav-leaf",
					},
					{
						title: "li.nav-leaf",
					},
				],
			},
			{
				title: "li.group",
				group: true,
				children: [
					{
						title: "li.nav-leaf",
					},
					{
						title: "li.nav-leaf",
					},
					{
						title: "li.nav-leaf",
					},
				],
			},
		],
	},
];

export const SidebarShowcase = {
	id: "no-tabs",
	hideOptions: true,
	elements: [
		{
			component: (
				<div className="container-fluid">
					<div className="row">
						<Sidebar id="dg-sidebar" navList={SidebarNavListExtended} />
						<main className="col main-content">Main content things...</main>
					</div>
				</div>
			),
			title: "Sidebar",
			description:
				"The sidebar supports an infinite depth of levels. Be considerate of how many levels you are using in your product as deep navigation can make it hard to find content and disorient users. How many levels you need depends on your product specific use case, but with consideration of UX best practices we recommend a more flat navigation.",
		},
	],
};
