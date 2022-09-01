import React from "react";
import { shallow } from "enzyme";

import Home from "./index";

describe("Home: index", () => {
    it("is defined", () => {
        expect(Home).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Home />);

        expect(wrapper).toMatchSnapshot();
    });
});
