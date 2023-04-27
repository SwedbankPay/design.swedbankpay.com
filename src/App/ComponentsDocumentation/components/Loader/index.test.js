import React from "react";
import renderer from "react-test-renderer";

import Loaders, { Overview } from "./index";

describe("Documentation: Loaders", () => {
	it("is defined", () => {
		expect(Loaders).toBeDefined();
	});

	it.skip("renders", () => {
		const wrapper = renderer.create(<Loaders />);

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
});
