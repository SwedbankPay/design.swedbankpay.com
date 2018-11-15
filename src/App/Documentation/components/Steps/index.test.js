import React from "react";
import { shallow } from "enzyme";
import Steps, { BasicSteps, StepsText } from "./index";

describe("Documentation: Steps", () => {
    it("is defined", () => {
        expect(Steps).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Steps />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Basic Steps", () => {
        it("is defined", () => {
            expect(BasicSteps).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <BasicSteps />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Steps Text", () => {
        it("is defined", () => {
            expect(StepsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <StepsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
