import React from "react";
import { shallow } from "enzyme";

import Forms from "./index";
import { Usage, Demo, FormsText } from "./index";

describe("Documentation: Forms", () => {
    it("is defined", () => {
        expect(Forms).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Forms />
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

    describe("Demo", () => {
        it("is defined", () => {
            expect(Demo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Demo />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FormsText", () => {
        it("is defined", () => {
            expect(FormsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <FormsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
