import React from "react";
import { shallow } from "enzyme";

import Tabs, { Overview } from "./index";

describe("Components: Tabs", () => {
    it("is defined", () => {
        expect(Tabs).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Tabs />);

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
