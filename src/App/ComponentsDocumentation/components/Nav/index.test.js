import React from "react";
import renderer from "react-test-renderer";

import Nav, { StandardNav, WithIconsOnly, JavascriptMethods } from "./index";

describe("Component: Nav", () => {
	it("is defined", () => {
		expect(Nav).toBeDefined();
	});

	it.skip("renders", () => {
		const wrapper = renderer.create(<Nav />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("StandardNav", () => {
		it("is defined", () => {
			expect(StandardNav).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<StandardNav />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("WithIconsOnly", () => {
		it("is defined", () => {
			expect(WithIconsOnly).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<WithIconsOnly />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("JavascriptMethods", () => {
		it("is defined", () => {
			expect(JavascriptMethods).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<JavascriptMethods />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
