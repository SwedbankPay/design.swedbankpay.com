import React from "react";
import { shallow } from "enzyme";

import Borders, { Overview } from "./index";

describe("Utilities: Borders", () => {
    it("is defined", () => {
        expect(Borders).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Borders />);

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
