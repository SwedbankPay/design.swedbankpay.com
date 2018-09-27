import React from "react";
import { shallow } from "enzyme";

import ErrorPage404 from "./index";

describe("ErrorPage404: index", () => {
    it("is defined", () => {
        expect(ErrorPage404).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ErrorPage404 />);

        expect(wrapper).toMatchSnapshot();
    });
});
