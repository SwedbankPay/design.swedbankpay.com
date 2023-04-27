import React from "react";
import renderer from "react-test-renderer";

import DocContainer from "./index";

import { sidebar } from "@src/scripts/main";

describe("Utilities: DocContainer", () => {
	sidebar.populateSidebarTertiary = jest.fn();
	sidebar.initScrollListener = jest.fn();

	it("is defined", () => {
		expect(DocContainer).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(<DocContainer>Component</DocContainer>);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});
});
