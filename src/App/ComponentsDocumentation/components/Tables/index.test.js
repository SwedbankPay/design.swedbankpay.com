import React from "react";
import { shallow } from "enzyme";

import Tables from "./index";

describe("Documentation: Tables", () => {
    it("is defined", () => {
        expect(Tables).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Tables/>);

        expect(wrapper).toMatchSnapshot();
    });
});
