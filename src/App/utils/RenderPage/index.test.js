import React from "react";
import { shallow } from "enzyme";

import RenderPage from "./index";

// TODO: Write more tests
describe("Utilities: RenderPage", () => {
    it("is defined", () => {
        expect(RenderPage).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<RenderPage path="/test" initPath="test/test" />);

        expect(wrapper).toMatchSnapshot();
    });
});
