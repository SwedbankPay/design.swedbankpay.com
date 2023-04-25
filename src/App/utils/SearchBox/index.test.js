import React from "react";
import renderer from "react-test-renderer";
import { prettyDOM, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SearchBox from "./index";

describe("Utilities; SearchBox", () => {
	it("is defined", () => {
		expect(SearchBox).toBeDefined();
	});

	it("renders with no props", () => {
		const wrapper = renderer.create(<SearchBox />).toJSON();

		expect(wrapper).toMatchSnapshot();
	});

	it("renders with mobile prop", () => {
		const wrapper = renderer.create(<SearchBox mobile />).toJSON();

		expect(wrapper).toMatchSnapshot();
	});

	it("renders with props mobile and className", () => {
		const { container } = render(<SearchBox mobile className="test" />);

		expect(container.firstChild).toHaveClass("search-container test");
	});

	it.skip("renders different buttons after click in mobile version", () => {
		render(<SearchBox mobile />);

		const button = screen.getByRole("button");

		console.debug("🔥", prettyDOM(button));

		expect(button).toHaveClass("btn-primary");

		userEvent.click(button); // The component does not change after click. Should be changed to btn-secondary
	});
});

describe.skip("Search box results tests", () => {
	// We should try to make these tests work, but the same problem as above occur..
	render(<SearchBox />);

	const input = screen.getAllByRole("textbox");

	it("renders no items if search term has no matches", () => {
		fireEvent.change(input[0], { target: { value: "xxxxx" } });

		const liElements = screen.getByRole("li");

		expect(liElements.length).toBe(0);
	});

	it("renders togglebox after searching for 'gg'", () => {
		fireEvent.change(input[0], { target: { value: "gg" } });

		const liElements = screen.getByRole("li");

		expect(liElements.length).toBe(1);
		expect(liElements).toHaveText(
			'<span class="result">To<b>gg</b>lebox</span>'
		);
	});

	it("renders more than 10 li elements when search term is 'i'", () => {
		fireEvent.change(input[1], { target: { value: "i" } });

		const liElements = screen.getByRole("li");

		expect(liElements.length).toBeGreaterThan(10);
	});
});
