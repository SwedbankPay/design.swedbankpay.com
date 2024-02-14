import React from "react";
import Sidebar from "@components/Sidebar";

export const SidebarNavList = [
	{
		title: "Home Page",
		icon: <i className="at-home" aria-hidden="true"></i>,
	},
	{
		title: "Get Started",
		icon: <i className="at-rocket-launch" aria-hidden="true"></i>,
		children: [
			{
				icon: <i className="at-vision" aria-hidden="true"></i>,
				title: "Accessibility",
			},
			{
				icon: <i className="at-paintbrush-paint-tool" aria-hidden="true"></i>,
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
				icon: <i className="at-grid" aria-hidden="true"></i>,
				title: "Grid",
			},
			{
				icon: <i className="at-move-arrow-left-right" aria-hidden="true"></i>,
				title: "Spacing",
			},
		],
	},
	{
		title: "Identity",
		icon: <i className="at-dna-science" aria-hidden="true"></i>,
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
		icon: <i className="at-home" aria-hidden="true"></i>,
	},
	{
		title: "Get started",
		icon: <i className="at-launch-rocket" aria-hidden="true"></i>,
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
		icon: <i className="at-coins" aria-hidden="true"></i>,
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
