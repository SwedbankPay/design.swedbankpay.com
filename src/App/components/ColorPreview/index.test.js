import React from "react";
import { shallow } from "enzyme";

import ColorPreview from "./index";

describe("Component: ColorPreview", () => {
    it("is defined", () => {
        expect(ColorPreview).toBeDefined();
    });

    it("renders, without RGB and CMYK when not provided", () => {
        const wrapper = shallow(<ColorPreview name="test" hex="#test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<small>Hex color code: #test</small>)).toBeTruthy();
        expect(wrapper.contains(<small>RGB color code: test,test,test</small>)).toBeFalsy();
        expect(wrapper.contains(<small>CMYK color code: test/test/test/test</small>)).toBeFalsy();
        expect(wrapper.html()).toContain("fill=\"#test\"");
    });

    it("renders, with RGB and CMYK when provided", () => {
        const mockElement = {
            name: "test",
            hex: "#test",
            rgb: "test,test,test",
            cmyk: "test/test/test/test"
        };
        const wrapper = shallow(<ColorPreview {...mockElement} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<small>Hex color code: #test</small>)).toBeTruthy();
        expect(wrapper.contains(<small>RGB color code: test,test,test</small>)).toBeTruthy();
        expect(wrapper.contains(<small>CMYK color code: test/test/test/test</small>)).toBeTruthy();
        expect(wrapper.html()).toContain("fill=\"#test\"");
    });

});
