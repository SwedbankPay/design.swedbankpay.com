import React from "react";
import renderer from "react-test-renderer";

import Footer from "./index";

describe("Component: Footer -", () => {
	it("is defined", () => {
		expect(Footer).toBeDefined();
	});

	it("renders", () => {
		const componentForSnap = renderer.create(<Footer />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
