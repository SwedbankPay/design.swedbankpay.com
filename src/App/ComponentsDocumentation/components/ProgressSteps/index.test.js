import React from "react";
import renderer from "react-test-renderer";
import Steps, { BasicSteps, VerticalSteps, ClickableSteps } from "./index";

describe("Documentation: Progress Steps", () => {
    it("is defined", () => {
        expect(Steps).toBeDefined();
    });

    it("renders", () => {
        const wrapper = renderer.create(
            <Steps />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("BasicSteps", () => {
        it("is defined", () => {
            expect(BasicSteps).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<BasicSteps />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("VerticalSteps", () => {
        it("is defined", () => {
            expect(VerticalSteps).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<VerticalSteps />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("ClickableSteps", () => {
        it("is defined", () => {
            expect(ClickableSteps).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<ClickableSteps />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
