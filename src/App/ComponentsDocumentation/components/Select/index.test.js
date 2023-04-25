import React from "react";
import renderer from "react-test-renderer";

import Select, {
	Overview,
	WhenToUse,
	ContentGuidelines,
	DeveloperDocumentation,
} from "./index";

describe("Component: Select", () => {
	it("is defined", () => {
		expect(Select).toBeDefined();
	});

	it.skip("renders", () => {
		const wrapper = renderer.create(<Select />);

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

	describe("When to use", () => {
		it("is defined", () => {
			expect(WhenToUse).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<WhenToUse />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("ContentGuidelines", () => {
		it("is defined", () => {
			expect(ContentGuidelines).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<ContentGuidelines />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("DeveloperDocumentation", () => {
		it("is defined", () => {
			expect(DeveloperDocumentation).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<DeveloperDocumentation />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
