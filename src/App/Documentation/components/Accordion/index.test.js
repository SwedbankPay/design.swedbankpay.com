import React from "react";
import { shallow } from "enzyme";

import Accordion, { Overview } from "./index";

describe("Components: Accordion", () => {
    it("is defined", () => {
        expect(Accordion).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Accordion />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
