import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Link from "./index";

describe("Component: Link", () => {
	it("is defined", () => {
		expect(Link).toBeDefined();
	});

	it("calls console.error when linkText is not provided", () => {
		console.error = jest.fn();

		const componentForSnap = renderer.create(<Link />);

		expect(console.error).toHaveBeenCalled();
		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with provided linkText and no icons when only linkText is provided", () => {
		render(<Link linkText="Link" />);

		expect(screen.getByRole("link")).toBeTruthy();
		expect(screen.getByRole("link").querySelector("i")).toBeNull();

		const componentForSnap = renderer.create(<Link linkText="Link" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with left icon when leftIcon is provided", () => {
		const icon = "swepay-icon-chevron-left";

		render(<Link linkText="Link" leftIcon={icon} />);

		expect(screen.getByRole("link").querySelector("i")).toHaveClass(
			"swepay-icon-chevron-left",
		);
		expect(screen.getByRole("link").querySelector("i")).toHaveAttribute(
			"aria-hidden",
			"true",
		);
		expect(screen.getByRole("link").querySelector("i")).toHaveTextContent("");
		expect(screen.getByRole("link").querySelector("span")).toHaveClass("ml-2");

		const componentForSnap = renderer.create(
			<Link linkText="Link" leftIcon={icon} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with right icon when rightIcon is provided", () => {
		const icon = "swepay-icon-chevron-right";

		render(<Link linkText="Link" rightIcon={icon} />);

		expect(screen.getByRole("link").querySelector("i")).toHaveClass(
			"swepay-icon-chevron-right",
		);
		expect(screen.getByRole("link").querySelector("i")).toHaveAttribute(
			"aria-hidden",
			"true",
		);
		expect(screen.getByRole("link").querySelector("i")).toHaveTextContent("");
		expect(screen.getByRole("link").querySelector("span")).toHaveClass("mr-2");

		const componentForSnap = renderer.create(
			<Link linkText="Link" rightIcon={icon} />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
