import React from "react";
import renderer from "react-test-renderer";

import Charts, {
	LineChart,
	BarChart,
	DoughnutAndPieCharts,
	MixingTypes,
	CustomColors,
	AccessibilityAlert,
} from "./index";

describe("Dashboard: Charts", () => {
	it("is defined", () => {
		expect(Charts).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(<Charts />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("LineChart", () => {
		it("is defined", () => {
			expect(LineChart).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<LineChart />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("BarChart", () => {
		it("is defined", () => {
			expect(BarChart).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<BarChart />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("DoughnutAndPieCharts", () => {
		it("is defined", () => {
			expect(DoughnutAndPieCharts).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<DoughnutAndPieCharts />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("MixingTypes", () => {
		it("is defined", () => {
			expect(MixingTypes).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<MixingTypes />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("CustomColors", () => {
		it("is defined", () => {
			expect(CustomColors).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<CustomColors />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("AccessibilityAlert", () => {
		it("is defined", () => {
			expect(AccessibilityAlert).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<AccessibilityAlert />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
