import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Utilities from "./index";

describe("Utilities: index", () => {
	it("is defined", () => {
		expect(Utilities).toBeDefined();
	});

	it("renders", () => {
		const utilities = renderer.create(
			<BrowserRouter>
				<Utilities />
			</BrowserRouter>
		);

		expect(utilities.toJSON()).toMatchSnapshot();
	});
});
