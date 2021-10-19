import React from "react";
import { shallow } from "enzyme";

import Patterns from "./index";

describe("Patterns: index", () => {
    it("is defined", () => {
        expect(Patterns).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Patterns />);

        expect(wrapper).toMatchSnapshot();
    });
});
