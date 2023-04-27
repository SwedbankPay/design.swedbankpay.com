import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Core from "./index";

describe("Core: index", () => {
	it("is defined", () => {
		expect(Core).toBeDefined();
	});

	it("renders", () => {
		const core = renderer.create(
			<BrowserRouter>
				<Core />
			</BrowserRouter>
		);

		expect(core.toJSON()).toMatchSnapshot();
	});
});
