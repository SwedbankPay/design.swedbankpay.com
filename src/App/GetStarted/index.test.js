import React from "react";
import { shallow } from "enzyme";

import GetStarted from "./index";

describe("GetStarted: index", () => {
    it("is defined", () => {
        expect(GetStarted).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<GetStarted />);

        expect(wrapper).toMatchSnapshot();
    });
});
