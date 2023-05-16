import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Login, {
	Overview,
	ContentGuidelines,
	DeveloperDocumentation,
} from "./index";

describe("Forms: index", () => {
	it("is defined", () => {
		expect(Login).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

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

	describe("ContentGuidelines", () => {
		it("is defined", () => {
			expect(ContentGuidelines).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(
				<BrowserRouter>
					<ContentGuidelines />
				</BrowserRouter>
			);

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
});
