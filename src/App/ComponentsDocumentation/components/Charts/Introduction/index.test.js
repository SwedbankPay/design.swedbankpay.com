import React from "react";
import renderer from "react-test-renderer";

import Introduction, { QuickStart, JavaScript } from "./index";

describe("Dashboard: Introduction", () => {
	it("is defined", () => {
		expect(Introduction).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(<Introduction />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("QuickStart", () => {
		it("is defined", () => {
			expect(QuickStart).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<QuickStart />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("JavaScript", () => {
		it("is defined", () => {
			expect(JavaScript).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<JavaScript />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
