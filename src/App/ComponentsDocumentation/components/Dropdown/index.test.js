import React from "react";
import { shallow } from "enzyme";

import Dropdown, { Overview } from "./index";

describe("Documentation: Dropdown", () => {
    it("is defined", () => {
        expect(Dropdown).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Dropdown />);

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
