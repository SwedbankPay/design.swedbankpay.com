import React from "react";
import { shallow } from "enzyme";

import InputGroup, { BasicExample, CheckboxesAndRadios, ButtonAddons, WithSelect, WithFeedbackIcon, ValidationStates, Disabled } from "./index";

describe("Documentation: InputGroup", () => {
    it("is defined", () => {
        expect(InputGroup).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<InputGroup />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("BasicExample", () => {
        it("is defined", () => {
            expect(BasicExample).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicExample />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CheckboxesAndRadios", () => {
        it("is defined", () => {
            expect(CheckboxesAndRadios).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CheckboxesAndRadios />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ButtonAddons", () => {
        it("is defined", () => {
            expect(ButtonAddons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ButtonAddons />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WithSelect", () => {
        it("is defined", () => {
            expect(WithSelect).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<WithSelect />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WithFeedbackIcon", () => {
        it("is defined", () => {
            expect(WithFeedbackIcon).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<WithFeedbackIcon />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ValidationStates", () => {
        it("is defined", () => {
            expect(ValidationStates).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ValidationStates />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Disabled", () => {
        it("is defined", () => {
            expect(Disabled).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Disabled />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
