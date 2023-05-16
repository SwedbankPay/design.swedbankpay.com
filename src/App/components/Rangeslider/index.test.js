import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Rangeslider from ".";

describe("Component: Rangeslider -", () => {
	it("is defined", () => {
		expect(Rangeslider).toBeDefined();
	});

	it("renders with a value label", () => {
		render(<Rangeslider />);

		expect(screen.getByRole("slider")).toBeInTheDocument();
		expect(screen.getByRole("status")).toHaveClass("value-label");
		expect(
			screen.getByRole("status").querySelectorAll("[data-rs-value]")
		).toHaveLength(1);

		const componentForSnap = renderer.create(<Rangeslider />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with a value label and a value label prefix", () => {
		render(<Rangeslider valueLabelPrefix="test" />);

		expect(screen.getByRole("slider")).toBeInTheDocument();
		expect(screen.getByRole("status").querySelector("span")).toHaveTextContent(
			"test"
		);
		expect(screen.getByRole("status")).toHaveClass("value-label");

		const componentForSnap = renderer.create(
			<Rangeslider valueLabelPrefix="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with a value label and a value label postfix", () => {
		render(<Rangeslider valueLabelPostfix="test" />);

		expect(screen.getByRole("slider")).toBeInTheDocument();
		expect(
			[...screen.getByRole("status").querySelectorAll("span")].filter(
				(elmt) => !elmt.dataset.rsValue
			)[0]
		).toHaveTextContent("test");
		expect(screen.getByRole("status")).toHaveClass("value-label");

		const componentForSnap = renderer.create(
			<Rangeslider valueLabelPostfix="test" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
