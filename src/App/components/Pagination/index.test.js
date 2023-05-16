import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Pagination from "./index";

describe("Component: Pagination -", () => {
	it("is defined", () => {
		expect(Pagination).toBeDefined();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={1} id="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("throws error if initialized without id prop", () => {
		console.error = jest.fn();

		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={1} />
		);

		expect(console.error).toHaveBeenCalled();

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("does not throw error if initialized with id prop", () => {
		console.error = jest.fn();

		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={1} id="does-not-throw-error" />
		);

		expect(console.error).not.toHaveBeenCalled();

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with an li with active class", () => {
		const { container } = render(
			<Pagination length={10} currentActive={4} id="test" />
		);

		expect(container.querySelectorAll(".active")).toHaveLength(1);

		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={4} id="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	// FIXME: is this test any useful ? we're creating the component with props and we're checking there is those props?
	it.skip("receives correct properties", () => {
		render(<Pagination length={10} currentActive={5} id="test" />);

		expect(wrapper.prop("length")).toEqual(10);
		expect(wrapper.prop("currentActive")).toEqual(5);
		expect(wrapper.prop("id")).toEqual("test");

		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={5} id="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders only li elements inside ul element", () => {
		render(<Pagination length={10} currentActive={4} id="tets" />);

		expect(
			[...screen.getByRole("list").children].every(
				(elmt) => elmt.tagName === "LI"
			)
		).toBeTruthy();

		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={4} id="tets" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with correct number of list elements. It should always be 7 (max number of places)", () => {
		const { rerender } = render(
			<Pagination length={8} currentActive={2} id={"test-pagination"} />
		);

		expect(screen.getAllByRole("listitem").length).toBe(7);

		rerender(
			<Pagination length={100} currentActive={2} id={"test-pagination2"} />
		);
		expect(screen.getAllByRole("listitem").length).toBe(7);

		const componentForSnap1 = renderer.create(
			<Pagination length={8} currentActive={2} id={"test-pagination"} />
		);

		expect(componentForSnap1.toJSON()).toMatchSnapshot();

		const componentForSnap2 = renderer.create(
			<Pagination length={100} currentActive={2} id={"test-pagination2"} />
		);

		expect(componentForSnap2.toJSON()).toMatchSnapshot();
	});

	it("renders four arrows", () => {
		render(<Pagination length={8} currentActive={2} id={"test-pagination"} />);

		expect(screen.getAllByRole("button")).toHaveLength(4);
		expect(
			screen
				.getAllByRole("button")
				.filter((btn) => btn.firstElementChild.tagName === "I")
		).toHaveLength(4);

		const componentForSnap = renderer.create(
			<Pagination length={8} currentActive={2} id={"test-pagination"} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with one ellipsis", () => {
		render(<Pagination length={10} currentActive={2} id={"test-pagination"} />);

		expect(
			screen
				.getAllByRole("listitem")
				.filter(
					(elmt) =>
						elmt.firstElementChild.tagName === "SPAN" &&
						elmt.firstElementChild.textContent === "..."
				)
		).toHaveLength(1);

		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={2} id={"test-pagination"} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with two ellipsis", () => {
		render(<Pagination length={10} currentActive={5} id={"test-pagination"} />);

		expect(
			screen
				.getAllByRole("listitem")
				.filter(
					(elmt) =>
						elmt.firstElementChild.tagName === "SPAN" &&
						elmt.firstElementChild.textContent === "..."
				)
		).toHaveLength(2);

		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={5} id={"test-pagination"} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders the compact view with the compact class", () => {
		render(
			<Pagination
				length={10}
				currentActive={5}
				id={"test-pagination"}
				compact={true}
			/>
		);

		expect(screen.queryByRole("list")).not.toBeInTheDocument();
		expect(
			screen.getByRole("navigation").querySelectorAll("span.compact")
		).toHaveLength(1);
		expect(
			screen.getByRole("navigation").querySelectorAll("button.arrow-start")
		).toHaveLength(1);
		expect(
			screen
				.getByRole("navigation")
				.querySelectorAll("button.arrow-start.d-sm-none")
		).toHaveLength(0);
		expect(
			screen.getByRole("navigation").querySelectorAll("button.arrow-end")
		).toHaveLength(1);
		expect(
			screen
				.getByRole("navigation")
				.querySelectorAll("button.arrow-end.d-sm-none")
		).toHaveLength(0);

		const componentForSnap = renderer.create(
			<Pagination
				length={10}
				currentActive={5}
				id={"test-pagination"}
				compact={true}
			/>
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders the default view as long view", () => {
		render(<Pagination length={10} currentActive={5} id={"test-pagination"} />);

		expect(screen.getByRole("list")).toBeInTheDocument();
		expect(
			screen.getByRole("navigation").querySelectorAll("span.mobile")
		).toHaveLength(1);
		expect(
			screen
				.getByRole("navigation")
				.querySelectorAll("button.arrow-start.d-sm-none")
		).toHaveLength(1);
		expect(
			screen
				.getByRole("navigation")
				.querySelectorAll("button.arrow-end.d-sm-none")
		).toHaveLength(1);

		const componentForSnap = renderer.create(
			<Pagination length={10} currentActive={5} id={"test-pagination"} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
