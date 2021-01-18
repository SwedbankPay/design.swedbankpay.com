import React from "react";
import { shallow } from "enzyme";

import Icons, { MaterialIcons, CardIcons, PaymentIcons, Flags } from "./index";

describe("Core: Iconography", () => {
    it("is defined", () => {
        expect(Icons).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Icons />);

        expect(wrapper).toMatchSnapshot();
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

    describe("CardIcons", () => {
        it("is defined", () => {
            expect(CardIcons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CardIcons />);

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
