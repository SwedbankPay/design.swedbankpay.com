import React from "react";
import renderer from "react-test-renderer";

import Icon from "./index";

describe("Utilities: Icon", () => {
	it("is defined", () => {
		expect(Icon).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(<Icon type="test" />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});
});
