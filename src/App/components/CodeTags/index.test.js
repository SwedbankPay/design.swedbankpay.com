import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CodeTags from "./index";

describe("Component: CodeTags", () => {
	it("is defined", () => {
		expect(CodeTags).toBeDefined();
	});

	it("renders with class code-tags-primary when primary is provided as type", () => {
		const { container } = render(<CodeTags type="primary" code="test" />);

		expect(container.querySelector("code")).toHaveClass(
			"code-tags code-tags-primary"
		);
		expect(container.querySelector("code")).toHaveTextContent("test");

		const componentForSnap = renderer.create(
			<CodeTags type="primary" code="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class code-tags-secondary when secondary is provided as type", () => {
		const { container } = render(<CodeTags type="secondary" code="test" />);

		expect(container.querySelector("code")).toHaveClass(
			"code-tags code-tags-secondary"
		);
		expect(container.querySelector("code")).toHaveTextContent("test");

		const componentForSnap = renderer.create(
			<CodeTags type="secondary" code="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("prop type is marked as required", () => {
		console.error = jest.fn();

		render(<CodeTags code="test" />);

		expect(console.error).toHaveBeenCalled();

		const componentForSnap = renderer.create(<CodeTags code="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class tag-primary when primary is provided as type", () => {
		const { container } = render(<CodeTags type="primary" text="test" />);

		expect(container.querySelector("span")).toHaveClass("tag tag-primary");
		expect(container.querySelector("span")).toHaveTextContent("test");

		const componentForSnap = renderer.create(
			<CodeTags type="primary" text="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class removable when removable is provided and renders a button", () => {
		const { container } = render(
			<CodeTags type="primary" text="test" removable />
		);

		expect(container.querySelector("span")).toHaveClass(
			"tag tag-primary removable"
		);
		expect(container.querySelector("span")).toHaveTextContent("test");
		expect(screen.getByRole("button")).toHaveClass("close-button");
		expect(screen.getByRole("button").querySelector("i")).toHaveClass(
			"material-icons m-auto"
		);
		expect(screen.getByRole("button").querySelector("i")).toHaveAttribute(
			"aria-label",
			"remove tag"
		);
		expect(screen.getByRole("button").querySelector("i")).toHaveTextContent(
			"close"
		);

		const componentForSnap = renderer.create(
			<CodeTags type="primary" text="test" removable />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
