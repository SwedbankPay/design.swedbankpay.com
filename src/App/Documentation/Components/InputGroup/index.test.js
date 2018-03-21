import React from "react";
import { shallow } from "enzyme";

import InputGroup from "./index";
import { BasicExample, CheckboxesAndRadios, InputGroupText } from "./index";

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

    describe("CheckboxesAndRadios", () => {
        it("is defined", () => {
            expect(CheckboxesAndRadios).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <CheckboxesAndRadios />
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
