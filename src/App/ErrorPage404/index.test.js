import React from "react";
import renderer from "react-test-renderer";

import ErrorPage404 from "./index";

describe("ErrorPage404: index", () => {
	it("is defined", () => {
		expect(ErrorPage404).toBeDefined();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(<ErrorPage404 />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
