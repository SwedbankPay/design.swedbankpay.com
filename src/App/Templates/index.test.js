import React from "react";
import { shallow } from "enzyme";

import Templates from "./index";

describe("Templates: index", () => {
    it("is defined", () => {
        expect(Templates).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Templates />);

        expect(wrapper).toMatchSnapshot();
    });
});
