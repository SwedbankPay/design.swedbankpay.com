import React from "react";
import { shallow } from "enzyme";

import Utilities, { MenuOverview } from "./index";

describe("Utilities: Utilities", () => {
    it("is defined", () => {
        expect(Utilities).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Utilities />);

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
