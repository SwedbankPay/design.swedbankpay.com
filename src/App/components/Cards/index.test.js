import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Cards from "./index";

// TODO: go through each change made to evaluate if necessary (both internal changes to the React component && especially externally to classes made etc), and if necessary then document it

describe("Component: Cards -", () => {
	it("is defined", () => {
		expect(Cards).toBeDefined();
	});

	it("renders a title", () => {
		render(<Cards hasTitle={true} titleTxt="Card title goes here" />);

		expect(screen.getByRole("link").getElementsByClassName("h4").length).toBe(
			1,
		);
		expect(screen.getByRole("link").querySelector(".h4")).toHaveTextContent(
			"Card title goes here",
		);

		const componentForSnap = renderer.create(
			<Cards hasTitle={true} titleTxt="Card title goes here" />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an image", () => {
		render(<Cards imgSrc="url.address" />);

		expect(screen.getByRole("img")).toHaveAttribute("src", "url.address");

		const componentForSnap = renderer.create(<Cards imgSrc="url.address" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders an icon when icon is provided", () => {
		render(<Cards iconClasses="at-home" />);

		expect(
			screen.getByRole("link").querySelectorAll("i.title-icon").length,
		).toBe(1);

		const componentForSnap = renderer.create(<Cards iconClasses="at-home" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders a text in card-body", () => {
		const { container } = render(
			<Cards hasTextContent={true} textContent="Text that goes in card body" />,
		);

		expect(container.querySelector(".card-content")).toHaveTextContent(
			"Text that goes in card body",
		);

		const componentForSnap = renderer.create(
			<Cards hasTextContent={true} textContent="Text that goes in card body" />,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders a child object", () => {
		const { container } = render(<Cards>This is child text</Cards>);

		expect(container).toHaveTextContent("This is child text");

		const componentForSnap = renderer.create(<Cards>This is child text</Cards>);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders a wide card when wide is true", () => {
		render(<Cards isWide={true} />);

		expect(screen.getByRole("link")).toHaveClass("cards-wide");

		const componentForSnap = renderer.create(<Cards isWide={true} />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
