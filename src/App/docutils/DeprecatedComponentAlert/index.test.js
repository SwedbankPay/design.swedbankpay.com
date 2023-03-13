import React from "react";
import renderer from "react-test-renderer";

import DeprecatedComponentAlert from "./index";

describe("Utilities: DeprecatedComponentAlert", () => {
    it("is defined", () => {
        expect(DeprecatedComponentAlert).toBeDefined();
    });

    it("renders", () => {
        const wrapper = renderer.create(<DeprecatedComponentAlert />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
