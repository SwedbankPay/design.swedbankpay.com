import React from "react";
import { shallow } from "enzyme";

import ProgressTracker, { BasicProgressTracker, SmallProgressTracker, DisabledProgressTracker, ProgressTrackerText } from "./index";

describe("Documentation: ProgressTracker", () => {
    it("is defined", () => {
        expect(ProgressTracker).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ProgressTracker />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Basic ProgressTracker", () => {
        it("is defined", () => {
            expect(BasicProgressTracker).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicProgressTracker />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Small ProgressTracker", () => {
        it("is defined", () => {
            expect(SmallProgressTracker).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SmallProgressTracker />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Disabled ProgressTracker", () => {
        it("is defined", () => {
            expect(DisabledProgressTracker).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DisabledProgressTracker />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ProgressTracker Text", () => {
        it("is defined", () => {
            expect(ProgressTrackerText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ProgressTrackerText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
