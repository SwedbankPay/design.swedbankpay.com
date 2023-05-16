import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Checkbox from "./Checkbox";

describe("Component: Checkbox -", () => {
	it("is defined", () => {
		expect(Checkbox).toBeDefined();
	});

	it("renders", () => {
		render(<Checkbox />);

		expect(screen.getByRole("checkbox")).toBeTruthy();

		const componentForSnap = renderer.create(<Checkbox />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with the specified id", () => {
		render(<Checkbox id="test" />);

		expect(screen.getByRole("checkbox")).toHaveAttribute("id", "test");

		const componentForSnap = renderer.create(<Checkbox id="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with the specified id and label", () => {
		const { container } = render(<Checkbox id="test-id" label="test label" />);

		expect(screen.getByRole("checkbox")).toHaveAttribute("id", "test-id");
		expect(screen.getByLabelText("test label")).toHaveAttribute(
			"id",
			"test-id"
		);
		expect(container.querySelector("label")).toHaveAttribute("for", "test-id");

		const componentForSnap = renderer.create(
			<Checkbox id="test" label="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with the disabled attribute", () => {
		render(<Checkbox disabled />);

		expect(screen.getByRole("checkbox")).toBeDisabled();

		const componentForSnap = renderer.create(<Checkbox disabled />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with the checked attribute", () => {
		render(<Checkbox checked />);

		expect(screen.getByRole("checkbox")).toBeChecked();

		const componentForSnap = renderer.create(<Checkbox checked />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders checkbox group", () => {
		const options = [
			{
				id: "radio-example-1",
				label: "Checkbox label",
			},
			{
				id: "radio-example-2",
				label: "Checkbox label",
			},
			{
				id: "radio-example-3",
				label: "Checkbox label",
			},
		];

		render(<Checkbox group options={options} />);

		expect(screen.getAllByRole("checkbox")).toHaveLength(3);

		const componentForSnap = renderer.create(
			<Checkbox group options={options} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders checkbox group with groupTitle", () => {
		const options = [
			{
				id: "radio-example-1",
				label: "Checkbox label",
			},
			{
				id: "radio-example-2",
				label: "Checkbox label",
			},
			{
				id: "radio-example-3",
				label: "Checkbox label",
			},
		];

		render(<Checkbox group groupTitle="Group title" options={options} />);

		expect(screen.getByRole("group")).toHaveTextContent("Group title");

		const componentForSnap = renderer.create(
			<Checkbox group groupTitle="Group title" options={options} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders checkbox group with error", () => {
		const options = [
			{
				id: "radio-example-1",
				label: "Checkbox label",
			},
			{
				id: "radio-example-2",
				label: "Checkbox label",
			},
			{
				id: "radio-example-3",
				label: "Checkbox label",
			},
		];

		render(<Checkbox group errorMessage="error" options={options} />);

		expect(
			screen.getByRole("group").querySelector(".help-block")
		).toHaveTextContent("error");

		const componentForSnap = renderer.create(
			<Checkbox group errorMessage="error" options={options} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders checkbox group with disabled state", () => {
		const options = [
			{
				id: "radio-example-1",
				label: "Checkbox label",
			},
			{
				id: "radio-example-2",
				label: "Checkbox label",
			},
			{
				id: "radio-example-3",
				label: "Checkbox label",
			},
		];

		render(<Checkbox group disabled options={options} />);

		expect(screen.getByRole("group")).toBeDisabled();

		const componentForSnap = renderer.create(
			<Checkbox group disabled options={options} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
