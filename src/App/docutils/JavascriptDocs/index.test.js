import React from "react";
import renderer from "react-test-renderer";
import JavascriptDocs, { OpenDocs, CloseDocs } from "./index";

describe("Utilities: JavascriptDocs", () => {
	const componentName = "test";

	it("is defined", () => {
		expect(JavascriptDocs).toBeDefined();
	});

	describe("OpenDocs", () => {
		it("is defined", () => {
			expect(OpenDocs).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(
				<OpenDocs componentName={componentName} />
			);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("CloseDocs", () => {
		it("is defined", () => {
			expect(CloseDocs).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(
				<CloseDocs componentName={componentName} />
			);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
