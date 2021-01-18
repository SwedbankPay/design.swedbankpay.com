import React from "react";
import { shallow } from "enzyme";

import DisplayColor from "./index";

describe("DisplayColor", () => {
    it("is defined", () => {
        expect(DisplayColor).toBeDefined();
    });

    it("renders with required props", () => {
        const colors =
            {
                hex: "#FDC129",
                rgb: "253, 193, 41"
            };

        const wrapper = shallow(<DisplayColor {...colors}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("alert if required properties is not provided", () => {
        const colors =
            {
                fontColor: "512B2B",
                width: "w-50"
            };

        console.error = jest.fn();

        shallow(<DisplayColor {...colors}/>);

        expect(console.error).toHaveBeenCalled();
    });

    it("renders with optional props", () => {
        const colors =
            {
                hex: "#FDC129",
                rgb: "253, 193, 41",
                fontColor: "512B2B",
                width: "w-50"
            };

        const wrapper = shallow(<DisplayColor {...colors}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
