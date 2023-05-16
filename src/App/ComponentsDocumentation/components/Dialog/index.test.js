import React from "react";
import renderer from "react-test-renderer";

import Dialog, { HowItWorks, Example, JavascriptMethods } from "./index";

describe("Documentation: Dialog", () => {
	it("is defined", () => {
		expect(Dialog).toBeDefined();
	});

	it.skip("renders", () => {
		const wrapper = renderer.create(<Dialog />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("HowItWorks", () => {
		it("is defined", () => {
			expect(HowItWorks).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<HowItWorks />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("Example", () => {
		it("is defined", () => {
			expect(Example).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<Example />);

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
