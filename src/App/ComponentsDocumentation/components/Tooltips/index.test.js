import React from "react";
import { shallow } from "enzyme";

import Tooltip, { Overview } from "./index";

describe("Components: Tooltip", () => {
    it("is defined", () => {
        expect(Tooltip).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Tooltip />);

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
