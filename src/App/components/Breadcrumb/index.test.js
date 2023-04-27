import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Breadcrumb from "./index";

describe("Component: Breadcrumb", () => {
	it("is defined", () => {
		expect(Breadcrumb).toBeDefined();
	});

	it("renders with default items when no items is provided through items prop", () => {
		const { container } = render(<Breadcrumb />);

		expect(container.querySelector("ol")).toHaveClass("breadcrumb");
		expect(screen.getAllByRole("listitem").length).toBe(4);
		expect(screen.getAllByRole("link").length).toBe(4);
		expect(screen.getAllByRole("link")[0]).toHaveTextContent("Home");

		const componentForSnap = renderer.create(<Breadcrumb />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders breadcrumb with the provided items in the items prop", () => {
		const items = [{ title: "test" }];

		const { container } = render(<Breadcrumb items={items} />);

		expect(container.querySelector("ol")).toHaveClass("breadcrumb");
		expect(screen.getAllByRole("listitem").length).toBe(1);
		expect(screen.queryAllByRole("link").length).toBe(0);
		expect(screen.getByRole("listitem")).toHaveTextContent(items[0].title);

		const componentForSnap = renderer.create(<Breadcrumb items={items} />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders breadcrumb with the provided items wrapped in anchor tags when href is provided in the items prop", () => {
		const items = [
			{
				title: "test",
				href: "www.example.com",
			},
		];

		const { container } = render(<Breadcrumb items={items} />);

		expect(container.querySelector("ol")).toHaveClass("breadcrumb");
		expect(screen.getAllByRole("listitem").length).toBe(1);
		expect(screen.getByRole("listitem")).toHaveTextContent(items[0].title);
		expect(screen.getAllByRole("link").length).toBe(1);
		expect(screen.getByRole("link")).toHaveAttribute("href", items[0].href);

		const componentForSnap = renderer.create(<Breadcrumb items={items} />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders multiple breadcrumbs when provided in the items prop", () => {
		const items = [
			{ title: "test #1" },
			{ title: "test #2" },
			{ title: "test #3" },
			{ title: "test #4" },
		];

		const { container } = render(<Breadcrumb items={items} />);

		expect(container.querySelector("ol")).toHaveClass("breadcrumb");
		expect(screen.getAllByRole("listitem").length).toBe(4);
		expect(screen.queryAllByRole("link").length).toBe(0);
		items.map((item, i) =>
			expect(screen.getAllByRole("listitem")[i]).toHaveTextContent(item.title)
		);

		const componentForSnap = renderer.create(<Breadcrumb items={items} />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
