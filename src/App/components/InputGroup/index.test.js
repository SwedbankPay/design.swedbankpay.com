import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import InputGroup from "./index";

describe("Component: InputGroup -", () => {
	it("is defined", () => {
		expect(InputGroup).toBeDefined();
	});

	it("throws an error if type prop is not provided", () => {
		console.error = jest.fn();

		const componentForSnap = renderer.create(<InputGroup />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
		expect(console.error).toHaveBeenCalled();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(<InputGroup type="typetest" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("throws an error if addOnType prop has an invalid value", () => {
		const testValues = ["button", "icon", "", "invalid", "test", "text"];

		console.error = jest.fn();
		testValues.forEach((testValue) => {
			const componentForSnap = renderer.create(
				<InputGroup type="typetest" addOnType={testValue} />
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
		expect(console.error).toHaveBeenCalledTimes(3);
	});

	it("renders a form-group with a label if prop label is provided", () => {
		const { container } = render(
			<InputGroup type="typetest" label="this is a text in a label" />
		);

		// FIXME: the input are not linked to the label if no id is passed. Once on React18 switch to useId to have default
		expect(container.querySelector("label")).toHaveTextContent(
			"this is a text in a label"
		);

		const componentForSnap = renderer.create(
			<InputGroup type="typetest" label="this is a text in a label" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders div with class .input-group when prefixValue or postfixValue is provided", () => {
		const { container: containerPrefix } = render(
			<InputGroup
				type="typetest"
				prefixType="button"
				prefixValue="button text"
				prefixBtnColor="primary"
			/>
		);

		expect(containerPrefix.querySelector(".input-group")).toBeTruthy();

		const { container: containerPostfix } = render(
			<InputGroup type="typetest" postfixValue="testvalue" />
		);

		expect(containerPostfix.querySelector(".input-group")).toBeTruthy();
	});

	it("does not render div with class .input-group when prefixValue or postfixValue are not provided", () => {
		const { container } = render(
			<InputGroup type="typetest" label="this is a text in a label" />
		);

		expect(container.querySelector(".input-group")).toBeNull();
	});

	it("renders a form-group with a prefix icon if prop prefixValue equals icon", () => {
		const { container } = render(
			<InputGroup type="typetest" addOnType="icon" prefixValue="home" />
		);

		expect(container.querySelector(".input-group-addon i")).toHaveClass(
			"material-icons"
		);

		const icon = container.querySelector(".input-group-addon i.material-icons");

		expect(icon).toHaveTextContent("home");

		const componentForSnap = renderer.create(
			<InputGroup type="typetest" addOnType="icon" prefixValue="home" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders a form-group with a text-area if type equals textarea", () => {
		render(<InputGroup type="textarea" />);

		expect(screen.getByRole("textbox")).toBeInTheDocument();

		const componentForSnap = renderer.create(<InputGroup type="textarea" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders a form-group with a select field with given values if type equals select", () => {
		const selectOptions = ["Bounty hunter", "Smuggler", "Jedi"];

		render(<InputGroup type="select" selectOptions={selectOptions} />);

		const selectElement = screen.getByRole("combobox");

		expect(selectElement).toHaveClass("form-control");

		selectOptions.forEach((value) => {
			expect(
				[...selectElement.querySelectorAll("option")].some(
					(optionValue) => optionValue.value === value
				)
			).toBeTruthy();
		});

		const componentForSnap = renderer.create(
			<InputGroup type="select" selectOptions={selectOptions} />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders a form-group with a help block", () => {
		const { container } = render(
			<InputGroup type="typetest" helpBlock="testvalue" />
		);

		expect(container.querySelector(".hint-text")).toBeTruthy();

		const componentForSnap = renderer.create(
			<InputGroup type="typetest" helpBlock="testvalue" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
