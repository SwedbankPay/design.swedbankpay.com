import React from "react";
import renderer from "react-test-renderer";

import Imagery, {
	ImageLibrary,
	ImageSizes,
	FocalPoints,
	UsingImagery,
	AltTextAndCaptions,
} from "./index";

describe("Core: Imagery", () => {
	it("is defined", () => {
		expect(Imagery).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(<Imagery />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("ImageLibrary", () => {
		it("is defined", () => {
			expect(ImageLibrary).toBeDefined();
		});
	});

	describe("ImageSizes", () => {
		it("is defined", () => {
			expect(ImageSizes).toBeDefined();
		});
	});

	describe("FocalPoints", () => {
		it("is defined", () => {
			expect(FocalPoints).toBeDefined();
		});
	});

	describe("UsingImagery", () => {
		it("is defined", () => {
			expect(UsingImagery).toBeDefined();
		});
	});

	describe("AltTextAndCaptions", () => {
		it("is defined", () => {
			expect(AltTextAndCaptions).toBeDefined();
		});
	});
});
