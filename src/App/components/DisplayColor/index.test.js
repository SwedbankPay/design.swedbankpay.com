import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DisplayColor from "./index";

describe("DisplayColor", () => {
	it("is defined", () => {
		expect(DisplayColor).toBeDefined();
	});

	it("renders with required props", () => {
		const colors = {
			hex: "#FDC129",
			rgb: "253, 193, 41",
		};

		render(<DisplayColor {...colors} />);

		const componentForSnap = renderer.create(<DisplayColor {...colors} />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("alert if required properties is not provided", () => {
		const colors = {
			fontColor: "2F2424",
			border: "has-border",
		};

		console.error = jest.fn();

		render(<DisplayColor {...colors} />);

		expect(console.error).toHaveBeenCalled();
	});

	it("renders with optional props", () => {
		const colors = {
			hex: "#FDC129",
			rgb: "253, 193, 41",
			fontColor: "2F2424",
			border: "has-border",
		};

		render(<DisplayColor {...colors} />);

		const componentForSnap = renderer.create(<DisplayColor {...colors} />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
