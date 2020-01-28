import React from "react";
import { shallow } from "enzyme";

import Sidebar, { Overview } from "./index";

describe("Components: Sidebar", () => {
    it("is defined", () => {
        expect(Sidebar).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Sidebar />);

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
