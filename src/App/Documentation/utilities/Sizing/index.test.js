import React from "react";
import { shallow } from "enzyme";

import Sizing from "./index";

describe("Utilities: Sizing", () => {
    it("is defined", () => {
        expect(Sizing).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Sizing />);

        expect(wrapper).toMatchSnapshot();
    });
});
