import React from "react";
import { shallow } from "enzyme";

import Topbar, { Overview, FixedTopbar, DeprecatedAlert } from "./index";

describe("Components: Topbar", () => {
    it("is defined", () => {
        expect(Topbar).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Topbar />);

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

    describe("FixedTopbar", () => {
        it("is defined", () => {
            expect(FixedTopbar).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FixedTopbar />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
