import React from "react";
import renderer from "react-test-renderer";

import Color, {
	Lead,
	ColorContrast,
	TextColors,
	BackgroundColors,
	BrownScaleColors,
	SystemColors,
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

	describe("TextColors", () => {
		it("is defined", () => {
			expect(TextColors).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<TextColors />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("BackgroundColors", () => {
		it("is defined", () => {
			expect(BackgroundColors).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<BackgroundColors />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("SystemColors", () => {
		it("is defined", () => {
			expect(SystemColors).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<SystemColors />);

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
