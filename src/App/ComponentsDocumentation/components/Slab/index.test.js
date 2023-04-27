import React from "react";
import renderer from "react-test-renderer";

import Slab, { OverviewSlab, SlabArrow } from "./index";

describe("Components: Slab", () => {
	it("is defined", () => {
		expect(Slab).toBeDefined();
	});

	it.skip("renders", () => {
		console.warn = jest.fn();

		const wrapper = renderer.create(<Slab />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("OverviewSlab", () => {
		it("is defined", () => {
			expect(OverviewSlab).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<OverviewSlab />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("SlabArrow", () => {
		it("is defined", () => {
			expect(SlabArrow).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<SlabArrow />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
