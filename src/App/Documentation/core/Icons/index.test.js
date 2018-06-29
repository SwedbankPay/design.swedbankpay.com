import React from "react";
import { shallow } from "enzyme";

import Icons, { Usage, IconsText } from "./index";

describe("Core: Icons", () => {
    it("is defined", () => {
        expect(Icons).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Icons />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Usage", () => {
        it("is defined", () => {
            expect(Usage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Usage />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("IconsText", () => {
        it("is defined", () => {
            expect(IconsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <IconsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
