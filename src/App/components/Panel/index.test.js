import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Panel from "./index";

describe("Component: Panel -", () => {
	it("is defined", () => {
		expect(Panel).toBeDefined();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(<Panel />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders without header when prop title is missing", () => {
		render(<Panel />);

		expect(screen.queryByRole("banner")).not.toBeInTheDocument();
		expect(screen.queryByRole("heading")).not.toBeInTheDocument();

		const componentForSnap = renderer.create(<Panel />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with a header without subtitle when prop title is provided and prop subTitle is missing", () => {
		render(<Panel title="test" />);

		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(screen.getByRole("heading")).toBeInTheDocument();
		expect(screen.getByRole("heading")).toHaveClass("panel-title");
		expect(screen.getByRole("heading")).toHaveTextContent("test");
		expect(
			screen.getByRole("banner").querySelectorAll("p.panel-sub-title")
		).toHaveLength(0);

		const componentForSnap = renderer.create(<Panel title="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with a header and subtitle when prop title and subTitle is provided", () => {
		render(<Panel title="test" subTitle="test" />);

		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(screen.getByRole("heading")).toBeInTheDocument();
		expect(screen.getByRole("heading")).toHaveClass("panel-title");
		expect(screen.getByRole("heading")).toHaveTextContent("test");
		expect(
			screen.getByRole("banner").querySelectorAll("p.panel-sub-title")
		).toHaveLength(1);

		const componentForSnap = renderer.create(
			<Panel title="test" subTitle="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders without panel-body when prop bodyContent is not provided", () => {
		const { container } = render(<Panel />);

		expect(container.querySelectorAll("section .panel-body")).toHaveLength(0);

		const componentForSnap = renderer.create(<Panel />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with panel-body when prop bodyContent is provided", () => {
		const bodyContent = [
			"Your main panel content is put here.",
			"Some more content over here.",
			"And one more line, just to be safe.",
		];

		const { container } = render(<Panel bodyContent={bodyContent} />);

		expect(container.querySelectorAll("section .panel-body")).toHaveLength(1);
		expect(
			[...container.querySelectorAll("section .panel-body p")].some(
				(txt) => txt.textContent === "Your main panel content is put here."
			)
		).toBeTruthy();

		const componentForSnap = renderer.create(
			<Panel bodyContent={bodyContent} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders without a footer when prop footerText is not provided", () => {
		render(<Panel />);

		expect(screen.queryByRole("contentinfo")).not.toBeInTheDocument();

		const componentForSnap = renderer.create(<Panel />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with a footer when prop footerText is provided", () => {
		render(<Panel footerText="test" />);

		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
		expect(
			screen.getByRole("contentinfo").querySelector("p")
		).toHaveTextContent("test");

		const componentForSnap = renderer.create(<Panel footerText="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class 'panel-bottomless when prop removeBottomPadding is true", () => {
		const { container } = render(<Panel removeBottomPadding />);

		expect(container.querySelector("section")).toHaveClass("panel-bottomless");

		const componentForSnap = renderer.create(<Panel removeBottomPadding />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class 'panel-no-padding' when prop removeAllPadding  is true", () => {
		const { container } = render(<Panel removeAllPadding />);

		expect(container.querySelector("section")).toHaveClass("panel-no-padding");

		const componentForSnap = renderer.create(<Panel removeAllPadding />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with class 'panel-half-padding' when prop halfPadding is true", () => {
		const { container } = render(<Panel halfPadding />);

		expect(container.querySelector("section")).toHaveClass(
			"panel-half-padding"
		);

		const componentForSnap = renderer.create(<Panel halfPadding />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("prop type is an enum with set values", () => {
		console.error = jest.fn();

		const componentForSnap = renderer.create(<Panel type="test" />);

		expect(console.error).toHaveBeenCalled();

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
