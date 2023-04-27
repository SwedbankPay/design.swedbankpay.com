import React from "react";
import renderer from "react-test-renderer";
import Logotype, {
	Overview,
	LogoBlack,
	LogoWhite,
	SpacingZone,
	MisuseLogo,
	LogotypeBackgrounds,
	Favicon,
	LogoPayex,
} from "./index";

describe("Core: Logotype", () => {
	it("is defined", () => {
		expect(Logotype).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(<Logotype />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("Overview", () => {
		it("is defined", () => {
			expect(Overview).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<Overview />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("LogoPayex", () => {
		it("is defined", () => {
			expect(LogoPayex).toBeDefined();
		});
	});

	describe("LogoBlack", () => {
		it("is defined", () => {
			expect(LogoBlack).toBeDefined();
		});
	});

	describe("LogoWhite", () => {
		it("is defined", () => {
			expect(LogoWhite).toBeDefined();
		});
	});

	describe("SpacingZone", () => {
		it("is defined", () => {
			expect(SpacingZone).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<SpacingZone />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("MisuseLogo", () => {
		it("is defined", () => {
			expect(MisuseLogo).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<MisuseLogo />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("LogotypeBackgrounds", () => {
		it("is defined", () => {
			expect(LogotypeBackgrounds).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<LogotypeBackgrounds />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("Favicon", () => {
		it("is defined", () => {
			expect(Favicon).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<Favicon />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
