import React from "react";
import { shallow } from "enzyme";

import PaymentIcons, { Overview, Sizes, Usage, PaymentIconsText } from "./index";

describe("Documentation: PaymentIcons", () => {
    it("is defined", () => {
        expect(PaymentIcons).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<PaymentIcons />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Sizes", () => {
        it("is defined", () => {
            expect(Sizes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Sizes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Usage", () => {
        it("is defined", () => {
            expect(Usage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Usage />);

            expect(wrapper).toMatchSnapshot();
        });

        it("prevents default on anchors", () => {
            const wrapper = shallow(<Usage />);
            const menuAnchors = wrapper.find(".action-menu a");
            const eventHandler = { preventDefault: jest.fn() };

            menuAnchors.forEach(anchor => anchor.simulate("click", eventHandler));
            expect(eventHandler.preventDefault).toHaveBeenCalledTimes(menuAnchors.length);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PaymentIconsText", () => {
        it("is defined", () => {
            expect(PaymentIconsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PaymentIconsText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
