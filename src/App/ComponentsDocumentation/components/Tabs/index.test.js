import React from "react";
import renderer from "react-test-renderer";

import Tabs, {
	Overview,
	ContentGuidelines,
	DeveloperDocumentation,
} from "./index";

describe("Components: Tabs", () => {
	it("is defined", () => {
		expect(Tabs).toBeDefined();
	});

	it.skip("renders", () => {
		const wrapper = renderer.create(<Tabs />);

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

		it.skip("renders", () => {
			const wrapper = renderer.create(<DeveloperDocumentation />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
