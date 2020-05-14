import React from "react";
import { shallow } from "enzyme";

import Accordion, { Overview, AccordionGroup } from "./index";

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

    describe("AccordionGroup", () => {
        it("is defined", () => {
            expect(AccordionGroup).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AccordionGroup />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
