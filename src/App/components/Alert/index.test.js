import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Alert from "./index";

describe("Component: Alert", () => {
	it("is defined", () => {
		expect(Alert).toBeDefined();
	});

	it("prop type is marked as required", () => {
		console.error = jest.fn();

		render(<Alert />);
		expect(console.error).toHaveBeenCalled();

		const componentForSnap = renderer.create(<Alert />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an alert with the correct type recieved from its props", () => {
		const { container } = render(<Alert type="test" />);

		expect(container.querySelector("div")).toHaveClass("alert-test");

		const componentForSnap = renderer.create(<Alert type="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an alert with icon", () => {
		const { container } = render(<Alert type="test" icon="test" />);

		expect(container.querySelectorAll("i").length).toBe(1);
		expect(container.querySelector("i")).toHaveClass("at-test");
		// checks icon is hidden for screen-readers
		expect(container.querySelector("i")).toHaveAttribute("aria-hidden", "true");

		const componentForSnap = renderer.create(<Alert type="test" icon="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an alert without an icon if no icon prop is provided", () => {
		const { container } = render(<Alert type="test" />);

		expect(container.querySelector("i")).toHaveTextContent("");

		const componentForSnap = renderer.create(<Alert type="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an alert with a close-button", () => {
		render(<Alert type="test" close />);

		expect(screen.getByRole("button")).toHaveAttribute("data-alert-close");

		const componentForSnap = renderer.create(<Alert type="test" close />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an alert without a close-button if no close prop is provided", () => {
		const { container } = render(<Alert type="test" />);

		expect(container.querySelector("button")).toBe(null);

		const componentForSnap = renderer.create(<Alert type="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an alert with text", () => {
		render(<Alert type="test" text={<p>test</p>} />);

		expect(screen.getByText("test")).toBeInTheDocument();

		const componentForSnap = renderer.create(
			<Alert type="test" text={<p>test</p>} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an alert without text if no text prop is provided", () => {
		render(<Alert type="test" />);

		expect(screen.queryByText("test")).not.toBeInTheDocument();

		const componentForSnap = renderer.create(<Alert type="test" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
