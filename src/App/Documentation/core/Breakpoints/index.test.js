import React from "react";
import { shallow } from "enzyme";

import Breakpoints, { Overview, BreakpointsText } from "./index";

describe("Core: Breakpoints", () => {
    it("is defined", () => {
        expect(Breakpoints).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Breakpoints />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Overview />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("BreakpointsText", () => {
        it("is defined", () => {
            expect(BreakpointsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <BreakpointsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
