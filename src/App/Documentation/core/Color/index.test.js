import React from "react";
import { shallow } from "enzyme";

import Color, { MainColors, AlertColors, Grayscale } from "./index";

describe("Core: Color", () => {
    it("is defined", () => {
        expect(Color).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Color />);

        expect(wrapper).toMatchSnapshot();
    });

    it("MainColors renders", () => {
        const wrapper = shallow(<MainColors />);

        expect(wrapper).toMatchSnapshot();
    });

    it("AlertColors renders", () => {
        const wrapper = shallow(<AlertColors />);

        expect(wrapper).toMatchSnapshot();
    });

    it("Grayscale renders", () => {
        const wrapper = shallow(<Grayscale />);

        expect(wrapper).toMatchSnapshot();
    });
});
