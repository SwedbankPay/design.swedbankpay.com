import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dropdown from "./index";

describe("Component: Dropdown -", () => {
	it("is defined", () => {
		expect(Dropdown).toBeDefined();
	});

	it("renders", () => {
		render(<Dropdown title="Test" />);

		const componentForSnap = renderer.create(<Dropdown title="Test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders error state with the error icon and an error text", () => {
		const { container } = render(
			<Dropdown errorMessage="test error message" />,
		);

		expect(container.querySelector(".help-block")).toHaveTextContent(
			"test error message",
		);
		expect(container.querySelector(".help-block i")).toHaveClass(
			"swepay-icon-error-triangle-filled small",
		);
		expect(container.querySelector(".help-block i")).toHaveTextContent("");

		const componentForSnap = renderer.create(
			<Dropdown errorMessage="test error message" />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders, when passing no label nor icon props, a toggle button set as secondary button with a chevron icon", () => {
		render(<Dropdown />);

		expect(screen.getByRole("button")).toHaveClass("dropdown-toggle");
		expect(screen.getByLabelText("dropdown button")).toHaveClass(
			"dropdown-toggle",
		);
		expect(screen.getByRole("button")).toHaveTextContent("Default label");
		expect(screen.getByRole("button").querySelector("i")).toHaveClass(
			"swepay-icon-chevron-down",
		);
		expect(screen.getByRole("button").querySelector("i")).toHaveTextContent("");
		expect(screen.getByRole("button").querySelector("i")).toHaveAttribute(
			"aria-hidden",
			"true",
		);

		const componentForSnap = renderer.create(<Dropdown />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders the toggle button, when passing with specific label and custom icon props", () => {
		render(<Dropdown label="Filter" isIconButton={false} icon="icon-test" />);

		expect(screen.getByRole("button")).toHaveClass("dropdown-toggle");
		expect(screen.getByLabelText("dropdown button")).toHaveClass(
			"dropdown-toggle",
		);
		expect(screen.getByRole("button")).toHaveTextContent("Filter");
		expect(screen.getByRole("button").querySelector("i")).toHaveTextContent("");
		expect(screen.getByRole("button").querySelector("i")).toHaveAttribute(
			"aria-hidden",
			"true",
		);
		expect(screen.getByRole("button").querySelector("i")).toHaveClass(
			"icon-test",
		);

		const componentForSnap = renderer.create(
			<Dropdown label="Filter" isIconButton={false} icon="icon-test" />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	describe("renders the toggle button with the icon being either before or after", () => {
		it("the icon is after the text", () => {
			render(<Dropdown label="Filter" isIconButton={false} icon="icon-test" />);

			expect(
				screen.getByRole("button").children[0].tagName.toLowerCase(),
			).not.toBe("i");

			const componentForSnap = renderer.create(
				<Dropdown label="Filter" isIconButton={false} icon="icon-test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
		it("the icon is before the text", () => {
			render(
				<Dropdown
					label="Filter"
					isIconButton={false}
					icon="icon-test"
					iconAfter={false}
				/>,
			);
			expect(screen.getByRole("button").children[0].tagName.toLowerCase()).toBe(
				"i",
			);

			const componentForSnap = renderer.create(
				<Dropdown
					label="Filter"
					isIconButton={false}
					icon="icon-test"
					iconAfter={false}
				/>,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
	});

	describe("the toggle icon btn with and without a passed icon", () => {
		it("renders the toggle btn as icon btn with no icon passed has a default of the three vertical dots icon", () => {
			render(<Dropdown label="Filter" isIconButton={true} />);

			expect(screen.getByRole("button").querySelector("i")).toHaveClass(
				"at-dots-vertical",
			);
			expect(screen.getByRole("button").querySelector("i")).toHaveTextContent(
				"",
			);

			const componentForSnap = renderer.create(
				<Dropdown label="Filter" isIconButton={true} />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders the toggle btn as icon btn with the icon passed as props", () => {
			render(<Dropdown label="Filter" isIconButton={true} icon="sort" />);

			expect(screen.getByRole("button").querySelector("i")).toHaveClass("sort");
			expect(screen.getByRole("button").querySelector("i")).toHaveTextContent(
				"",
			);

			const componentForSnap = renderer.create(
				<Dropdown label="Filter" isIconButton={true} icon="sort" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
	});

	it("renders children components passed as content prop inside the menu list", () => {
		const checkboxListContent = (
			<a href="#">
				<i className="at-bookmark-star" aria-hidden="true"></i>
				Edit
			</a>
		);

		const { container } = render(
			<Dropdown
				label="Sort"
				isIconButton={true}
				icon="sort"
				content={checkboxListContent}
				largePadding={true}
			/>,
		);

		expect(container.querySelector(".dropdown-menu a")).toHaveTextContent(
			"Edit",
		);
		expect(container.querySelector(".dropdown-menu a i")).toHaveClass(
			"at-bookmark-star",
		);
		expect(container.querySelector(".dropdown-menu a i")).toHaveTextContent("");

		const componentForSnap = renderer.create(
			<Dropdown
				label="Sort"
				isIconButton={true}
				icon="sort"
				content={checkboxListContent}
				largePadding={true}
			/>,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
