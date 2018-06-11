import React from "react";
import { shallow } from "enzyme";

import Well, { DefaultWell, WellSizes, WellText } from "./index";

describe("Components: Well", () => {
    it("is defined", () => {
        expect(Well).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Well />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("DefaultWell", () => {
        it("is defined", () => {
            expect(DefaultWell).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <DefaultWell />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WellSizes", () => {
        it("is defined", () => {
            expect(WellSizes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <WellSizes />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WellText", () => {
        it("is defined", () => {
            expect(WellText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <WellText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
