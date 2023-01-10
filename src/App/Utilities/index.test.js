import React from "react";
import { shallow } from "enzyme";

import Utilities from "./index";

describe("Utilities: index", () => {
    it("is defined", () => {
        expect(Utilities).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Utilities/>);

        expect(wrapper).toMatchSnapshot();
    });
});
