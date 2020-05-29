import React from "react";
import { shallow } from "enzyme";

import DeprecatedComponentAlert from "./index";

describe("Utilities: DeprecatedComponentAlert", () => {
    it("is defined", () => {
        expect(DeprecatedComponentAlert).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<DeprecatedComponentAlert />);

        expect(wrapper).toMatchSnapshot();
    });
});
