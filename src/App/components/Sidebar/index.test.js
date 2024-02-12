import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Sidebar from "./index";

describe("Component: Sidebar", () => {
	it("is defined", () => {
		expect(Sidebar).toBeDefined();
	});

	it("renders", () => {
		const navList = [
			{
				title: "Home Page",
				icon: <i className="at-home" aria-hidden="true"></i>,
			},
			{
				title: "Get Started",
				icon: <i className="at-electric-lightbulb" aria-hidden="true"></i>,
				children: [
					{
						icon: <i className="at-wheelchair" aria-hidden="true"></i>,
						title: "Accessibility",
					},
					{
						icon: <i className="at-colors" aria-hidden="true"></i>,
						title: "Colors",
						children: [
							{
								title: "Primary colors",
							},
							{
								title: "Secondary colors",
								group: true,
								children: [
									{
										title: "Children 1",
									},
									{
										title: "Children 2",
									},
								],
							},
						],
					},
				],
			},
		];

		render(<Sidebar id="sidebar-1" navList={navList} extendedSidebar={true} />);

		expect(
			screen
				.getAllByRole("listitem")
				.filter((elmt) => elmt.classList.contains("main-nav-li")),
		).toHaveLength(2);
		expect(
			screen
				.getAllByRole("listitem")
				.filter((elmt) => elmt.classList.contains("secondary-nav-li")),
		).toHaveLength(2);

		const componentForSnap = renderer.create(
			<Sidebar id="sidebar-1" navList={navList} extendedSidebar={true} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders one level when one level is provided", () => {
		const navList = [
			{
				title: "Home Page",
				icon: <i className="at-home" aria-hidden="true"></i>,
			},
			{
				title: "Get Started",
				icon: <i className="at-electric-lightbulb" aria-hidden="true"></i>,
			},
		];

		render(<Sidebar id="test" navList={navList} />);

		const mainNavUl = screen.getByRole("list");

		expect(mainNavUl).toHaveClass("main-nav-ul");
		expect(mainNavUl.querySelectorAll(".main-nav-li")).toHaveLength(2);
		expect(mainNavUl.querySelectorAll(".sidebar-secondary-nav")).toHaveLength(
			0,
		);

		const componentForSnap = renderer.create(
			<Sidebar id="test" navList={navList} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders two levels when two levels is provided", () => {
		const navList = [
			{
				title: "Get Started",
				icon: <i className="at-electric-lightbulb" aria-hidden="true"></i>,
				children: [
					{
						icon: <i className="at-wheelchair" aria-hidden="true"></i>,
						title: "Accessibility",
					},
					{
						icon: <i className="at-colors" aria-hidden="true"></i>,
						title: "Colors",
					},
				],
			},
		];

		render(<Sidebar id="test" navList={navList} />);

		expect(
			screen
				.getAllByRole("list")
				.filter((elmt) => elmt.classList.contains("main-nav-ul")),
		).toHaveLength(1);

		const mainNavUl = screen
			.getAllByRole("list")
			.filter((elmt) => elmt.classList.contains("main-nav-ul"))[0];

		expect(mainNavUl.querySelectorAll(".sidebar-secondary-nav")).toHaveLength(
			1,
		);
		expect(mainNavUl.querySelectorAll(".secondary-nav-ul")).toHaveLength(1);
		expect(mainNavUl.querySelectorAll(".secondary-nav-li")).toHaveLength(2);

		const componentForSnap = renderer.create(
			<Sidebar id="test" navList={navList} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders three levels when three levels is provided", () => {
		const navList = [
			{
				title: "Get Started",
				icon: <i className="at-electric-lightbulb" aria-hidden="true"></i>,
				children: [
					{
						title: "Accessibility",
						group: true,
						children: [
							{
								title: "Primary colors",
							},
						],
					},
				],
			},
		];

		render(<Sidebar id="test" navList={navList} />);

		const mainNavUl = screen
			.getAllByRole("list")
			.filter((elmt) => elmt.classList.contains("main-nav-ul"))[0];

		expect(mainNavUl.querySelectorAll(".secondary-nav-ul")).toHaveLength(1);
		expect(mainNavUl.querySelectorAll("ul > li")).toHaveLength(3);
		expect(mainNavUl.querySelectorAll(".nav-leaf")).toHaveLength(1);

		const componentForSnap = renderer.create(
			<Sidebar id="test" navList={navList} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders four levels when four levels is provided", () => {
		const navList = [
			{
				title: "Get Started",
				icon: <i className="at-electric-lightbulb" aria-hidden="true"></i>,
				children: [
					{
						icon: <i className="at-wheelchair" aria-hidden="true"></i>,
						title: "Accessibility",
						children: [
							{
								title: "Primary colors",
								group: true,
								children: [
									{
										title: "Children 1",
									},
								],
							},
						],
					},
				],
			},
		];

		const { container } = render(
			<Sidebar id="test" navList={navList} extendedSidebar={true} />,
		);

		expect(
			screen
				.getAllByRole("list")
				.map((elmt) => elmt.querySelectorAll(":scope > li")),
		).toHaveLength(4);
		expect(container.querySelectorAll(".nav-leaf")).toHaveLength(1);

		const componentForSnap = renderer.create(
			<Sidebar id="test" navList={navList} extendedSidebar={true} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders five levels when four levels is provided", () => {
		const navList = [
			{
				title: "Get Started",
				icon: <i className="at-electric-lightbulb" aria-hidden="true"></i>,
				children: [
					{
						icon: <i className="at-wheelchair" aria-hidden="true"></i>,
						title: "Accessibility",
						children: [
							{
								title: "Primary colors",
								children: [
									{
										title: "Children 2",
										group: true,
										children: [
											{
												title: "Gran children 1",
											},
										],
									},
								],
							},
						],
					},
				],
			},
		];

		const { container } = render(
			<Sidebar id="test" navList={navList} extendedSidebar={true} />,
		);

		expect(
			screen
				.getAllByRole("list")
				.map((elmt) => elmt.querySelectorAll(":scope > li")),
		).toHaveLength(5);
		expect(container.querySelectorAll(".nav-leaf")).toHaveLength(1);

		const componentForSnap = renderer.create(
			<Sidebar id="test" navList={navList} extendedSidebar={true} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders 10 levels when four levels is provided", () => {
		const navList = [
			{
				title: "Level 1",
				icon: <i className="at-electric-lightbulb" aria-hidden="true"></i>,
				children: [
					{
						icon: <i className="at-wheelchair" aria-hidden="true"></i>,
						title: "Level 2",
						children: [
							{
								title: "Level 3",
								children: [
									{
										title: "Level 4",
										children: [
											{
												title: "Level 5",
												children: [
													{
														title: "Level 6",
														children: [
															{
																title: "Level 7",
																children: [
																	{
																		title: "Level 8",
																		children: [
																			{
																				title: "Level 9",
																				group: true,
																				children: [
																					{
																						title: "Level 10",
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
										],
									},
								],
							},
						],
					},
				],
			},
		];

		const { container } = render(
			<Sidebar id="test" navList={navList} extendedSidebar={true} />,
		);

		expect(
			screen
				.getAllByRole("list")
				.map((elmt) => elmt.querySelectorAll(":scope > li")),
		).toHaveLength(10);
		expect(container.querySelectorAll(".nav-leaf")).toHaveLength(1);

		const componentForSnap = renderer.create(
			<Sidebar id="test" navList={navList} extendedSidebar={true} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class .sidebar-topbar-sticky when sticky is provided", () => {
		const navList = [
			{
				title: "Home page",
				icon: <i className="at-wheelchair" aria-hidden="true"></i>,
			},
			{
				title: "Get Started",
				icon: <i className="at-electric-lightbulb" aria-hidden="true"></i>,
				children: [
					{
						icon: <i className="at-wheelchair" aria-hidden="true"></i>,
						title: "Accessibility",
					},
					{
						icon: <i className="at-colors" aria-hidden="true"></i>,
						title: "Colors",
						children: [
							{
								title: "Primary colors",
							},
							{
								title: "Secondary colors",
								children: [
									{
										title: "Children 1",
									},
									{
										title: "Children 2",
									},
								],
							},
						],
					},
				],
			},
		];

		const { container } = render(
			<Sidebar id="sidebar" navList={navList} sticky />,
		);

		expect(container.querySelector(".sidebar")).toHaveClass(
			"sidebar-topbar-sticky",
		);
	});
});
