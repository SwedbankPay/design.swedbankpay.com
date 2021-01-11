import React from "react";
import { shallow } from "enzyme";

import Accessibility, { Intro, AccessibleService, WcagStandard, Inclusions, DiveDeeper } from "./index";

describe("Core: Accessibility", () => {
    it("is defined", () => {
        expect(Accessibility).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Accessibility />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Intro", () => {
        it("is defined", () => {
            expect(Intro).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Intro />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AccessibleService", () => {
        it("is defined", () => {
            expect(AccessibleService).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AccessibleService />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WcagStandard", () => {
        it("is defined", () => {
            expect(WcagStandard).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<WcagStandard />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Inclusions", () => {
        it("is defined", () => {
            expect(Inclusions).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Inclusions />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DiveDeeper", () => {
        it("is defined", () => {
            expect(DiveDeeper).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DiveDeeper />);

            expect(wrapper).toMatchSnapshot();
        });
    });

});
