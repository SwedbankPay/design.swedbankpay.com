import React from "react";
import { shallow } from "enzyme";
import Steps, { BasicSteps, VerticalSteps, ClickableSteps } from "./index";

describe("Documentation: Progress Steps", () => {
    it("is defined", () => {
        expect(Steps).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Steps />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("BasicSteps", () => {
        it("is defined", () => {
            expect(BasicSteps).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicSteps />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("VerticalSteps", () => {
        it("is defined", () => {
            expect(VerticalSteps).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<VerticalSteps />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ClickableSteps", () => {
        it("is defined", () => {
            expect(ClickableSteps).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ClickableSteps />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
