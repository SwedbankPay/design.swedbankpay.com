import React from "react";
import { shallow } from "enzyme";

import ColorPreview from "./index";

describe("Component: ColorPreview", () => {
    it("is defined", () => {
        expect(ColorPreview).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ColorPreview name="test" hex="#test" color="black" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<small>Hex color code: #test</small>");
        expect(wrapper.html()).toContain("fill=\"#test\"");
    });
});
