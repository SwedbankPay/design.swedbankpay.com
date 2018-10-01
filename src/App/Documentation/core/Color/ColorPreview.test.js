import React from "react";
import { shallow } from "enzyme";

import ColorPreview from "./ColorPreview";

describe("Core: Color", () => {
    it("is defined", () => {
        expect(ColorPreview).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ColorPreview name="test" hex="#test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<p>test</p>)).toBeTruthy();
        expect(wrapper.contains(<p>#test</p>)).toBeTruthy();
        expect(wrapper.html()).toContain("bg-test");
    });
});
