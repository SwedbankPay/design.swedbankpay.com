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

    it("renders colorDisplay with subLists when subListNames provided", () => {
        const mockColor1 = {
            name: "Yellow",
            hex: "#FDC129",
            inSubLists: ["Communication color"]
        };
        const mockColor2 = {
            name: "Brown",
            hex: "#512B2B",
            inSubLists: ["Text color"]
        };
        const mockColor3 = {
            name: "Brown",
            hex: "#512B2B",
            inSubLists: ["Text color"]
        };

        const mockColorDisplayElement = {
            id: "test",
            colorList: [mockColor1, mockColor2, mockColor3],
            head: "Test Head",
            description: <p>This is a description</p>,
            subListNames: ["Communication color", "Text color"]
        };

        const wrapper = shallow(<ColorDisplay {...mockColorDisplayElement} />);
        const colorLists = wrapper.find(".list.color-preview");

        expect(wrapper).toMatchSnapshot();
        expect(colorLists.length).toEqual(mockColorDisplayElement.subListNames.length);
        expect(wrapper.contains(<h3>Communication color</h3>)).toEqual(true);
        expect(wrapper.contains(<h3>Text color</h3>)).toEqual(true);
        expect(wrapper.html()).toContain("<small>Hex color code: #FDC129</small>");
        expect(wrapper.html()).toContain("<small>Hex color code: #512B2B</small>");
    });
});
