import React from "react";
import renderer from "react-test-renderer";

import Expandable, { Overview, ExpandableGroup } from "./index";

describe("Components: Expandable", () => {
	it("is defined", () => {
		expect(Expandable).toBeDefined();
	});

	it.skip("renders", () => {
		const wrapper = renderer.create(<Expandable />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("Overview", () => {
		it("is defined", () => {
			expect(Overview).toBeDefined();
		});

		// FIXME: skipping for now. Seems like all component Docs, since last upgrade, when using showcasePanelAdvanced it throws an error on render Overview
		it.skip("renders", () => {
			const wrapper = renderer.create(<Overview />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("ExpandableGroup", () => {
		it("is defined", () => {
			expect(ExpandableGroup).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<ExpandableGroup />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	test.todo("Expandable tests");
});
