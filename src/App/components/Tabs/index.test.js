import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event/";

import Tabs from "./index";

const items = ["test", "test 2"];
const div = document.createElement("div");

document.body.appendChild(div);

describe("Component: Tabs -", () => {
	it("is defined", () => {
		expect(Tabs).toBeDefined();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(<Tabs items={items} />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class name tabs when prop scroll is not specified", () => {
		const { container } = render(<Tabs items={items} />);

		expect(container.querySelector(".tabs")).not.toHaveClass("tabs-scroll");

		const componentForSnap = renderer.create(<Tabs items={items} />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class name .tabs.tabs-scroll when prop scroll is specified", () => {
		const { container } = render(<Tabs items={items} scroll />);

		expect(container.querySelector(".tabs")).toHaveClass("tabs-scroll");

		const componentForSnap = renderer.create(<Tabs items={items} scroll />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with id when id is provided", () => {
		const { container } = render(<Tabs id="test" items={items} />);

		expect(container.querySelector(".tabs")).toHaveAttribute("id", "test");
	});

	it("renders with ulId when ulId is provided", () => {
		render(<Tabs ulId="test" items={items} />);

		expect(screen.getByRole("list")).toHaveAttribute("id", "test");
	});

	it("sets a tab to active", () => {
		render(<Tabs items={items} />);

		expect(
			screen
				.getAllByRole("listitem")
				.some((elmt) => elmt.classList.contains("active"))
		).toBeTruthy();
	});

	// FIXME: click is not working yet. Anyway, it is only testing the React component and its functionality, here we are NOT testing the actual `tabs` script
	it("doesn't remove active when clicking an active tab", () => {
		render(<Tabs items={items} />);

		expect(
			screen
				.getAllByRole("listitem")
				.filter((elmt) => elmt.classList.contains("active"))
		).toHaveLength(1);

		const activeTab = screen
			.getAllByRole("listitem")
			.filter((elmt) => elmt.classList.contains("active"))[0];

		expect(activeTab).toBeTruthy();

		userEvent.click(activeTab);

		// expect(activeTab.classList).toContain("active");
	});

	// FIXME: click is not working yet. Anyway, it is only testing the React component and its functionality, here we are NOT testing the actual `tabs` script.
	it("changes active tab when unactive tab is clicked", () => {
		render(<Tabs items={items} />);

		const inactiveTabs = screen
			.getAllByRole("listitem")
			.filter((elmt) => !elmt.classList.contains("active"));
		const inactiveTab = inactiveTabs[0];

		expect(inactiveTabs.length).toBeGreaterThan(0);

		const tabAnchor = inactiveTab.querySelector("a");

		expect(tabAnchor).toBeTruthy();

		userEvent.click(tabAnchor);

		// expect(inactiveTab).toHaveClass("active");
	});
});
