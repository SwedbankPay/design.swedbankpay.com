import React from "react";
import { shallow } from "enzyme";

import GettingStarted from "./index";

describe("GettingStarted: index", () => {
    it("is defined", () => {
        expect(GettingStarted).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<GettingStarted />);

        expect(wrapper).toMatchSnapshot();
    });
});
