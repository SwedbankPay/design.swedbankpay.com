import React from "react";
import renderer from "react-test-renderer";

import Accessibility, {
	Intro,
	AccessibleService,
	WcagStandard,
	Inclusions,
	DiveDeeper,
} from "./index";

describe("Core: Accessibility", () => {
	it("is defined", () => {
		expect(Accessibility).toBeDefined();
	});

	describe("Intro", () => {
		it("is defined", () => {
			expect(Intro).toBeDefined();
		});
	});

	describe("AccessibleService", () => {
		it("is defined", () => {
			expect(AccessibleService).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<AccessibleService />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("WcagStandard", () => {
		it("is defined", () => {
			expect(WcagStandard).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<WcagStandard />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("Inclusions", () => {
		it("is defined", () => {
			expect(Inclusions).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<Inclusions />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("DiveDeeper", () => {
		it("is defined", () => {
			expect(DiveDeeper).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<DiveDeeper />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
