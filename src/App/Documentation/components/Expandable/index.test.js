import React from "react";
import { shallow } from "enzyme";

import Expandable, { Overview, Accordion } from "./index";

describe("Components: Expandable", () => {
    it("is defined", () => {
        expect(Expandable).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Expandable />);

        expect(wrapper).toMatchSnapshot();
    });

    // describe("Overview", () => {
    //     it("is defined", () => {
    //         expect(Overview).toBeDefined();
    //     });

    //     it("renders", () => {
    //         const wrapper = shallow(<Overview />);

    //         expect(wrapper).toMatchSnapshot();
    //     });
    // });

    // describe("Accordion", () => {
    //     it("is defined", () => {
    //         expect(Accordion).toBeDefined();
    //     });

    //     it("renders", () => {
    //         const wrapper = shallow(<Accordion />);

    //         expect(wrapper).toMatchSnapshot();
    //     });
    // });

    test.todo("Expandable tests");
});
