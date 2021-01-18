import React from "react";
import { shallow } from "enzyme";

import Component, { MenuOverview } from "./index";

describe("Components: Components", () => {
    it("is defined", () => {
        expect(Component).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Component />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("MenuOverview", () => {
        it("is defined", () => {
            expect(MenuOverview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MenuOverview />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
