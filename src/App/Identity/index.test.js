import React from "react";
import { shallow } from "enzyme";

import Core from "./index";

describe("Core: index", () => {
    it("is defined", () => {
        expect(Core).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Core />);

        expect(wrapper).toMatchSnapshot();
    });
});
