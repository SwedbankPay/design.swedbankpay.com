import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dialog from "./index";

describe("Component: Dialog -", () => {
	it("is defined", () => {
		expect(Dialog).toBeDefined();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(<Dialog />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with the passed ID", () => {
		render(<Dialog diaId="my-id" isOpen />);

		expect(screen.getByRole("dialog")).toHaveAttribute("id", "my-id");

		const componentForSnap = renderer.create(<Dialog />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with the passed header", () => {
		render(<Dialog diaHeader="My heading" isOpen />);

		expect(screen.getByRole("heading")).toHaveTextContent("My heading");

		const componentForSnap = renderer.create(<Dialog diaHeader="My heading" />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	it("renders with the passed children", () => {
		const { container } = render(
			<Dialog>
				<p>My paragraph</p>
			</Dialog>,
		);

		expect(container.querySelector("p")).toHaveTextContent("My paragraph");

		const componentForSnap = renderer.create(
			<Dialog>
				<p>My paragraph</p>
			</Dialog>,
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
