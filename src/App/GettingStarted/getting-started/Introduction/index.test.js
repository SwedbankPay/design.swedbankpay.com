import React from "react";
import { shallow } from "enzyme";

import Introduction, { GetStarted, WhatIsDG, UsingDG, OpenSimpleCaring } from "./index";

describe("GettingStarted: Introduction", () => {
    it("is defined", () => {
        expect(Introduction).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Introduction />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("GetStarted", () => {
        it("is defined", () => {
            expect(GetStarted).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GetStarted />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WhatIsDG", () => {
        it("is defined", () => {
            expect(WhatIsDG).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<WhatIsDG />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("UsingDG", () => {
        it("is defined", () => {
            expect(UsingDG).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<UsingDG />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("OpenSimpleCaring", () => {
        it("is defined", () => {
            expect(OpenSimpleCaring).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<OpenSimpleCaring />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
