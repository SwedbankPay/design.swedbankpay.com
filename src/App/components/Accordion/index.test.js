import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import Accordion from "./index";

describe("Component: Accordion", () => {
	const items = [
		{
			id: "exp-1",
			title: "My title",
			content:
				"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim.",
		},
		{
			id: "exp-2",
			title: "My title",
			content:
				"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim.",
		},
		{
			id: "exp-3",
			title: "My title",
			content:
				"Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim.",
		},
	];

	it("is defined", () => {
		expect(Accordion).toBeDefined();
	});

	it("renders correctly", () => {
		const tree = renderer.create(<Accordion items={items} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("renders with correct number of accordions", () => {
		const accordions = render(<Accordion items={items} />);
		const buttons = accordions.getAllByRole("button");

		expect(buttons.length).toEqual(items.length);
	});
});
