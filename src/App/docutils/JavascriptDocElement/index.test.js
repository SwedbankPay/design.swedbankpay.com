import React from "react";
import renderer from "react-test-renderer";

import JavascriptDocElement from "./index";

describe("Utilities: JavascriptDocElement", () => {
	it("is defined", () => {
		expect(JavascriptDocElement).toBeDefined();
	});

	it("renders", () => {
		const mockCode = <>test code</>;
		const mockDescription = <>test description</>;
		const wrapper = renderer.create(
			<JavascriptDocElement code={mockCode} description={mockDescription} />
		);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});
});
