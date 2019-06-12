import React from "react";
import { shallow } from "enzyme";

import ColorPreview from "./ColorPreview";

describe("Core: Color", () => {
    it("is defined", () => {
        expect(ColorPreview).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ColorPreview name="test" hex="#test" color="black" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("test (#test)");
        expect(wrapper.html()).toContain("background-color:#test");
    });
});
