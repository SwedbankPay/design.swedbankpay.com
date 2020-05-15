import React from "react";
import { shallow } from "enzyme";

import ExperimentalComponentAlert from "./index";

describe("Utilities: ExperimentalComponentAlert", () => {
    it("is defined", () => {
        expect(ExperimentalComponentAlert).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ExperimentalComponentAlert />);

        expect(wrapper).toMatchSnapshot();
    });
});
