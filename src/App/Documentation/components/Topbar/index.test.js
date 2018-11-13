import React from "react";
import { shallow } from "enzyme";

import Topbar, { Overview, TopbarText, DeprecatedAlert } from "./index";

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

    describe("TopbarText", () => {
        it("is defined", () => {
            expect(TopbarText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TopbarText />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    // TODO: Remove when deprecated parts are deleted. [AW]
    describe("DeprecatedAlert", () => {
        it("is defined", () => {
            expect(DeprecatedAlert).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeprecatedAlert />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
