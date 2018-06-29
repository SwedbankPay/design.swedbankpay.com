import React from "react";
import { shallow } from "enzyme";

import Visibility, { Intro, VisibilityText } from "./index";

describe("Utilities: Visibility", () => {
    it("is defined", () => {
        expect(Visibility).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Visibility />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Intro", () => {
        it("is defined", () => {
            expect(Intro).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Intro />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("VisibilityText", () => {
        it("is defined", () => {
            expect(VisibilityText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <VisibilityText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
