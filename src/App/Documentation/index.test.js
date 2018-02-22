import React from "react";
import { shallow } from "enzyme";

import Documentation from "./index";

describe("Documentation: index", () => {
    it("is defined", () => {
        expect(Documentation).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Documentation />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
