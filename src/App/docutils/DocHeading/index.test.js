import React from "react";
import renderer from "react-test-renderer";

import DocHeading from "./index";

const brandTitle = process.env.brandTitle;

describe("Utilities: DocHeading", () => {
	it("is defined", () => {
		expect(DocHeading).toBeDefined();
	});

	it("renders heading and updates document title", () => {
		const location = { pathname: "test" };

		const wrapper = renderer.create(
			<DocHeading locationFromJestTest={location} />
		);

		expect(wrapper.toJSON()).toMatchSnapshot();
		expect(document.title).toEqual(`Test | ${brandTitle} Design Guide`);
	});

	it("correctly formats title", () => {
		const location = { pathname: "test-test" };

		const wrapper = renderer.create(
			<DocHeading locationFromJestTest={location} />
		);

		expect(wrapper.toJSON()).toMatchSnapshot();
		expect(document.title).toEqual(`Test test | ${brandTitle} Design Guide`);
	});
});
