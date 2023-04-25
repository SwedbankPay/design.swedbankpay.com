import React from "react";
import renderer from "react-test-renderer";

import Dropdown, {
	Overview,
	ContentGuidelines,
	DeveloperDocumentation,
} from "./index";

describe("Documentation: Dropdown", () => {
	it("is defined", () => {
		expect(Dropdown).toBeDefined();
	});

	it.skip("renders", () => {
		console.warn = jest.fn();

		const wrapper = renderer.create(<Dropdown />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("Overview", () => {
		it("is defined", () => {
			expect(Overview).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<Overview />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("ContentGuidelines", () => {
		it("is defined", () => {
			expect(Overview).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<ContentGuidelines />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("DeveloperDocumentation", () => {
		it("is defined", () => {
			expect(Overview).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<DeveloperDocumentation />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
