import React from "react";
import renderer from "react-test-renderer";
import LoadingComponent from "./index";

describe("App utils: LoadingComponent", () => {
	it("is defined", () => {
		expect(LoadingComponent).toBeDefined();
	});

	it("renders", () => {
		const loadingComponent = renderer.create(<LoadingComponent />).toJSON();

		expect(loadingComponent).toMatchSnapshot();
	});
});
