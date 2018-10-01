import React from "react";
import { shallow } from "enzyme";

import Toast, { Overview, Options, PremadeToasts, ToastText } from "./index";

describe("Components: Toast", () => {
    it("is defined", () => {
        expect(Toast).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Toast />);

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

    describe("Options", () => {
        it("is defined", () => {
            expect(Options).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Options />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PremadeToasts", () => {
        it("is defined", () => {
            expect(PremadeToasts).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PremadeToasts />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ToastText", () => {
        it("is defined", () => {
            expect(ToastText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ToastText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
