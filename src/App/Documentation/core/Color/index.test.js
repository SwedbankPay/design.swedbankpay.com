import React from "react";
import { shallow } from "enzyme";

import Color, { ColorPalette } from "./index";

describe("Core: Color", () => {
    it("is defined", () => {
        expect(Color).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Color />);

        expect(wrapper).toMatchSnapshot();
    });

    it("ColorPalette renders", () => {
        const wrapper = shallow(<ColorPalette />);

        expect(wrapper).toMatchSnapshot();
    });
});
