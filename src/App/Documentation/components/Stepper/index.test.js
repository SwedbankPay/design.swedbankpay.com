import React from "react";
import { shallow } from "enzyme";
import Stepper, { BasicStepper, VerticalStepper, ClickableStepper } from "./index";

describe("Documentation: Stepper", () => {
    it("is defined", () => {
        expect(Stepper).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Stepper />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("BasicSteps", () => {
        it("is defined", () => {
            expect(BasicStepper).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicStepper />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("VerticalSteps", () => {
        it("is defined", () => {
            expect(VerticalStepper).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<VerticalStepper />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ClickableSteps", () => {
        it("is defined", () => {
            expect(ClickableStepper).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ClickableStepper />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
