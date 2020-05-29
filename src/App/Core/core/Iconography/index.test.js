import React from "react";
import { shallow } from "enzyme";

import Icons, { MaterialIcons, PaymentIcons, Flags } from "./index";

describe("Core: Iconography", () => {
    it("is defined", () => {
        expect(Icons).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Icons />);

        expect(wrapper).toMatchSnapshot();
        expect(console.warn).toHaveBeenCalled();
    });

    describe("MaterialIcons", () => {
        it("is defined", () => {
            expect(MaterialIcons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MaterialIcons />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PaymentIcons", () => {
        it("is defined", () => {
            expect(PaymentIcons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PaymentIcons />);

            expect(wrapper).toMatchSnapshot();
        });

        it("onClick prevents default", () => {
            const wrapper = shallow(<PaymentIcons />);
            const clickHandler = { preventDefault: jest.fn() };
            const onclickAnchors = wrapper.find(".action-menu a");

            onclickAnchors.forEach(anchor => anchor.simulate("click", clickHandler));
            expect(clickHandler.preventDefault).toHaveBeenCalledTimes(onclickAnchors.length);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Flags", () => {
        it("is defined", () => {
            expect(Flags).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Flags />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
