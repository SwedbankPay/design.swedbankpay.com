import React from "react";
import renderer from "react-test-renderer";

import SkipLink from "./index";

describe("Component: SkipLink", () => {
	it("is defined", () => {
		expect(SkipLink).toBeDefined();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(<SkipLink />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
