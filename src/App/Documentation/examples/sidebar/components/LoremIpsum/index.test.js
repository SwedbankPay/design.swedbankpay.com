import React from "react";
import { shallow } from "enzyme";

import LoremIpsum from "./index";

describe("Examples: Sidebar -LoremIpsum", () => {
    it("is defined", () => {
        expect(LoremIpsum).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<LoremIpsum />);

        expect(wrapper).toMatchSnapshot();
    });
});
