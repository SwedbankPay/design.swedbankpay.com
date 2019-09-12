import React from "react";
import { shallow } from "enzyme";

import ColorDisplay from "./index";

describe("Core: Color", () => {
    it("is defined", () => {
        expect(ColorDisplay).toBeDefined();
    });

    it("ColorDisplay renders", () => {
        const mockColor = {
            name: "Yellow",
            hex: "#FDC129"
        };

        const mockColorDisplayElement = {
            id: "test",
            colorList: [mockColor, mockColor],
            head: "Test Head",
            description: null
        };

        const wrapper = shallow(<ColorDisplay {...mockColorDisplayElement}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
