import React from "react";
import { shallow } from "enzyme";

import Table, { Overview } from "./index";

describe("Documentation: Table", () => {
    it("is defined", () => {
        expect(Table).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Table />);

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
