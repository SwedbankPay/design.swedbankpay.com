import React from "react";
import { shallow } from "enzyme";

import InputGroup from "./index";

describe("Component: InputGroup - ", () => {
    it("is defined", () => {
        expect(InputGroup).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<InputGroup type="test" />);

        expect(wrapper).toMatchSnapshot();
    });
});
