import React from "react";
import { shallow } from "enzyme";

import ColorDisplay from "./index";

describe("Component: ColorDisplay", () => {
    it("is defined", () => {
        expect(ColorDisplay).toBeDefined();
    });

    it("renders ColorDisplay", () => {
        const mockColor = {
            name: "Yellow",
            hex: "#FDC129"
        };

        const mockColorDisplayElement = {
            id: "test",
            colorList: [mockColor, mockColor],
            head: "Test Head",
            description: <p>This is a description</p>
        };

        const wrapper = shallow(<ColorDisplay {...mockColorDisplayElement}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<h2 id=\"test\">Test Head</h2>");
        expect(wrapper.html()).toContain("<p>This is a description</p>");
        expect(wrapper.html()).toContain("<small>Hex color code: #FDC129</small>");
    });

});
