import React from "react";
import renderer from "react-test-renderer";

import Sidebar, {
	Overview,
	DeveloperDocumentation,
	SetActiveState,
	RemoveActiveState,
	InitScrollListener,
	RemoveScrollListener,
} from "./index";

describe("Components: Sidebar", () => {
	it("is defined", () => {
		expect(Sidebar).toBeDefined();
	});

	it.skip("renders", () => {
		const wrapper = renderer.create(<Sidebar />);

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

	describe("DeveloperDocumentation", () => {
		it("is defined", () => {
			expect(DeveloperDocumentation).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<DeveloperDocumentation />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("SetActiveState", () => {
		it("is defined", () => {
			expect(SetActiveState).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<SetActiveState />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("RemoveActiveState", () => {
		it("is defined", () => {
			expect(RemoveActiveState).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<RemoveActiveState />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("InitScrollListener", () => {
		it("is defined", () => {
			expect(InitScrollListener).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<InitScrollListener />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("RemoveScrollListener", () => {
		it("is defined", () => {
			expect(RemoveScrollListener).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<RemoveScrollListener />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
