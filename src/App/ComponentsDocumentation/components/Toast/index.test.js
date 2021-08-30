import React from "react";
import { shallow } from "enzyme";

import Toast, { Overview, PremadeToasts, Options, CustomHtml } from "./index";

import { toast } from "@src/scripts/main";

// Can't use aliases in jest mock it seems, but this automocks the toast import [THN]
jest.mock("../../../../scripts/main");

describe("Components: Toast", () => {
    beforeEach(() => {
        toast.mockClear();
    });

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

        it("calls toast on click", () => {
            const wrapper = shallow(<Overview />);
            const btn = wrapper.find("button");

            btn.simulate("click");

            expect(wrapper).toMatchSnapshot();
            expect(toast).toHaveBeenCalled();
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

        it("calls toast on click", () => {
            const wrapper = shallow(<PremadeToasts />);
            const btns = wrapper.find("button");

            btns.forEach(btn => btn.simulate("click"));

            expect(wrapper).toMatchSnapshot();
            expect(toast).toHaveBeenCalledTimes(btns.length);
        });
    });

    describe("CustomHtml", () => {
        it("is defined", () => {
            expect(CustomHtml).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CustomHtml />);

            expect(wrapper).toMatchSnapshot();
        });

        it("calls toast on click", () => {
            const wrapper = shallow(<CustomHtml />);
            const btn = wrapper.find("button");

            btn.simulate("click");

            expect(wrapper).toMatchSnapshot();
            expect(toast).toHaveBeenCalled();
        });
    });
});
