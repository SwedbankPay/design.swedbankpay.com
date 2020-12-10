import React from "react";
import { shallow } from "enzyme";

import Copywriting, { Terminology, Tonality, GlossaryLinks } from "./index";

describe("Core: Accessibility", () => {
    it("is defined", () => {
        expect(Copywriting).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Copywriting />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Intro", () => {
        it("is defined", () => {
            expect(Terminology).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Terminology />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AccessibleService", () => {
        it("is defined", () => {
            expect(Tonality).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Tonality />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WcagStandard", () => {
        it("is defined", () => {
            expect(GlossaryLinks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GlossaryLinks />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
