import React from "react";
import { shallow } from "enzyme";

import Patterns, { Overview } from "./index";

describe("Patterns", () => {
    it("is defined", () => {
        expect(Patterns).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Patterns />);

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
