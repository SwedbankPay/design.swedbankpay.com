import React from "react";
import renderer from "react-test-renderer";

import Rangeslider, {
	Overview,
	ContentGuidelines,
	DeveloperDocumentation,
} from "./index";

describe("Component: Rangeslider", () => {
	it("is defined", () => {
		expect(Rangeslider).toBeDefined();
	});

	it.skip("renders", () => {
		const wrapper = renderer.create(<Rangeslider />);

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
