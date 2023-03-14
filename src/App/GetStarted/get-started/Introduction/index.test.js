import React from "react";
import renderer from "react-test-renderer";

import Introduction, { GetStarted, WhatIsDG, Feedback } from "./index";

describe("GetStarted: Introduction", () => {
    it("is defined", () => {
        expect(Introduction).toBeDefined();
    });

    describe("GetStarted", () => {
        it("is defined", () => {
            expect(GetStarted).toBeDefined();
        });
    });

    describe("WhatIsDG", () => {
        it("is defined", () => {
            expect(WhatIsDG).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<WhatIsDG />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Feedback", () => {
        it("is defined", () => {
            expect(Feedback).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Feedback/>);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
