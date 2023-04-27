import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Patterns, { Overview } from "./index";

describe("Patterns", () => {
	it("is defined", () => {
		expect(Patterns).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(
			<BrowserRouter>
				<Patterns />
			</BrowserRouter>
		);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("Overview", () => {
		it("is defined", () => {
			expect(Overview).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(
				<BrowserRouter>
					<Overview />
				</BrowserRouter>
			);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
