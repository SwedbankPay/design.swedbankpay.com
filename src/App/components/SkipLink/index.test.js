import React from "react";
import { shallow } from "enzyme";

import SkipLink from "./index";

describe("Component: SkipLink", () => {
    it("is defined", () => {
        expect(SkipLink).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<SkipLink/>);

        expect(wrapper).toMatchSnapshot();
    });
});
