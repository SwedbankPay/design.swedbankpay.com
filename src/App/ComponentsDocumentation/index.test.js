import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import ComponentsDocumentation from "./index";

describe("ComponentsDocumentation: index", () => {
	it("is defined", () => {
		expect(ComponentsDocumentation).toBeDefined();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(
			<BrowserRouter>
				<ComponentsDocumentation />
			</BrowserRouter>
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
