import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconPreview from "./index";

describe("Component: IconPreview -", () => {
	it("is defined", () => {
		expect(IconPreview).toBeDefined();
	});

	it("renders", () => {
		render(<IconPreview name="amex" type="payment-icon" />);

		const componentForSnap = renderer.create(
			<IconPreview name="amex" type="payment-icon" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("prop name is marked as required", () => {
		console.error = jest.fn();

		render(<IconPreview type="payment-icon" />);

		expect(console.error).toHaveBeenCalled();

		const componentForSnap = renderer.create(
			<IconPreview type="payment-icon" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it.skip("prop type has specific allowed values", () => {
		console.error = jest.fn();

		render(
			<div>
				<IconPreview type="material-icons" />
				<IconPreview type="payment-icon" />
				<IconPreview type="flag-icon" />
			</div>
		);

		expect(console.error).not.toHaveBeenCalled();

		render(<IconPreview type="invalid_value" />);

		expect(console.error).toHaveBeenCalled();

		const allowedSizesComponentForSnap = renderer.create(
			<div>
				<IconPreview type="material-icons" />
				<IconPreview type="payment-icon" />
				<IconPreview type="flag-icon" />
			</div>
		);

		expect(allowedSizesComponentForSnap.toJSON()).toMatchSnapshot();

		const illegalSizeComponentForSnap = renderer.create(
			<IconPreview type="payment-icon" />
		);

		expect(illegalSizeComponentForSnap.toJSON()).toMatchSnapshot();
	});

	it.skip("prop size is an enum with specified allowed values", () => {
		console.error = jest.fn();

		render(
			<div>
				<IconPreview size="tiny" type="material-icons" name="visa" />
				<IconPreview size="small" type="payment-icon" name="amex" />
				<IconPreview size="medium" type="payment-icon" name="diners" />
				<IconPreview size="large" type="payment-icon" name="mastercard" />
				<IconPreview size="huge" type="payment-icon" name="mobilepay" />
			</div>
		);

		expect(console.error).not.toHaveBeenCalled();

		render(<IconPreview name="amex" size="test" type="payment-icon" />);

		expect(console.error).toHaveBeenCalled();

		const allowedSizesComponentForSnap = renderer.create(
			<div>
				<IconPreview size="tiny" type="material-icons" name="visa" />
				<IconPreview size="small" type="payment-icon" name="amex" />
				<IconPreview size="medium" type="payment-icon" name="diners" />
				<IconPreview size="large" type="payment-icon" name="mastercard" />
				<IconPreview size="huge" type="payment-icon" name="mobilepay" />
			</div>
		);

		expect(allowedSizesComponentForSnap.toJSON()).toMatchSnapshot();

		const illegalSizeComponentForSnap = renderer.create(
			<IconPreview name="amex" size="test" type="payment-icon" />
		);

		expect(illegalSizeComponentForSnap.toJSON()).toMatchSnapshot();
	});

	it.skip("renders a material icon when type is equal to material-icons", () => {
		const { container } = render(
			<IconPreview name="android" type="material-icons" />
		);

		expect(container.querySelector("i")).toHaveClass("material-icons");
		expect(container.querySelector("i")).toHaveAttribute("aria-hidden", "true");
		expect(container.querySelector("i")).toHaveTextContent("android");

		const componentForSnap = renderer.create(
			<IconPreview name="android" type="material-icons" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it.skip("renders correct icon when prop name is provided", () => {
		const { container } = render(
			<IconPreview name="amex" type="payment-icon" />
		);

		expect(container.querySelector("i")).toHaveClass(
			"payment-icon payment-icon-amex"
		);
		expect(container.querySelector("i")).toHaveAttribute("aria-hidden", "true");
		expect(container.querySelector("i")).not.toHaveTextContent();

		const componentForSnap = renderer.create(
			<IconPreview name="amex" type="payment-icon" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it.skip("renders correct size when prop size is provided", () => {
		const { container } = render(
			<IconPreview name="amex" size="large" type="payment-icon" />
		);

		expect(container.querySelector("i")).toHaveClass(
			"payment-icon payment-icon-large payment-icon-amex"
		);
		expect(container.querySelector("i")).toHaveAttribute("aria-hidden", "true");
		expect(container.querySelector("i")).not.toHaveTextContent();

		const componentForSnap = renderer.create(
			<IconPreview name="amex" size="large" type="payment-icon" />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it.skip("renders icon with custom when prop className is provided", () => {
		const { container } = render(
			<IconPreview
				name="amex"
				type="payment-icon"
				className="test test2 test-3"
			/>
		);

		expect(container.querySelector("i")).toHaveClass(
			"payment-icon payment-icon-amex test test2 test-3"
		);
		expect(container.querySelector("i")).toHaveAttribute("aria-hidden", "true");
		expect(container.querySelector("i")).not.toHaveTextContent();

		const componentForSnap = renderer.create(
			<IconPreview
				name="amex"
				type="payment-icon"
				className="test test2 test-3"
			/>
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it.skip("renders a preview wrapper around the <i> tag when prop preview is true", () => {
		const { container } = render(
			<IconPreview name="amex" type="payment-icon" preview />
		);

		expect(container.querySelector(".icon-preview > i")).toBeTruthy();

		const componentForSnap = renderer.create(
			<IconPreview name="amex" type="payment-icon" preview />
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it.skip("renders a preview wrapper around material-icon when prop previewSize is true", () => {
		const { container } = render(
			<IconPreview
				name="android"
				type="material-icons"
				size="large"
				previewSize
			/>
		);

		expect(container.querySelector(".icon-preview > i")).toBeTruthy();

		const componentForSnap = renderer.create(
			<IconPreview
				name="android"
				type="material-icons"
				size="large"
				previewSize
			/>
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
