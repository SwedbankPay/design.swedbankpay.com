import React from "react";
import { shallow } from "enzyme";

import ComponentsDocumentation from "./index";

describe("ComponentsDocumentation: index", () => {
    it("is defined", () => {
        expect(ComponentsDocumentation).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ComponentsDocumentation />);

        expect(wrapper).toMatchSnapshot();
    });
});
