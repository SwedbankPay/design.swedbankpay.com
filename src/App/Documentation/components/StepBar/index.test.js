import React from "react";
import { shallow } from "enzyme";
import { StepBar, BasicStepBar, StepBarText } from "./index";

describe("Documentation: StepBar", () => {
    it("is defined", () => {
        expect(StepBar).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <StepBar />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Basic StepBar", () => {
        it("is defined", () => {
            expect(BasicStepBar).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <BasicStepBar />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("StepBar Text", () => {
        it("is defined", () => {
            expect(StepBarText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <StepBarText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
