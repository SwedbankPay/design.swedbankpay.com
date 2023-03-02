import React from "react";
import renderer from "react-test-renderer";

import ExperimentalComponentAlert from "./index";

describe("Utilities: ExperimentalComponentAlert", () => {
    it("is defined", () => {
        expect(ExperimentalComponentAlert).toBeDefined();
    });

    it("renders", () => {
        const wrapper = renderer.create(<ExperimentalComponentAlert />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
