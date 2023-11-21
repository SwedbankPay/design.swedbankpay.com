import React from "react";
import renderer from "react-test-renderer";

import Color, {
	Lead,
	ColorContrast,
	SBTextColors,
	SBBackgroundColors,
	SBSystemColors,
	MainColors,
} from "./index";

describe("Core: Color", () => {
	it("is defined", () => {
		expect(Color).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(<Color />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("Lead", () => {
		it("is defined", () => {
			expect(Lead).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<Lead />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("CommunicationColors", () => {
		it("is defined", () => {
			expect(ColorContrast).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<ColorContrast />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("SwedbankPay TextColors", () => {
		it("is defined", () => {
			expect(SBTextColors).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<SBTextColors />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("SwedbankPay BackgroundColors", () => {
		it("is defined", () => {
			expect(SBBackgroundColors).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<SBBackgroundColors />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("SwedbankPay SystemColors", () => {
		it("is defined", () => {
			expect(SBSystemColors).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<SBSystemColors />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("MainColors", () => {
		it("is defined", () => {
			expect(MainColors).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<MainColors />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
