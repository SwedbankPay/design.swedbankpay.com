import React from "react";
import { shallow } from "enzyme";

import InputGroup from "./index";
import { BasicExample, Demo, InputGroupText } from "./index";

describe("Documentation: InputGroup", () => {
    it("is defined", () => {
        expect(InputGroup).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <InputGroup />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("BasicExample", () => {
        it("is defined", () => {
            expect(BasicExample).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <BasicExample />
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

    describe("InputGroupText", () => {
        it("is defined", () => {
            expect(InputGroupText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <InputGroupText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
