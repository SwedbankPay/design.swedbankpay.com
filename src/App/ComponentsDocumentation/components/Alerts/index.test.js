import React from "react";
import { shallow } from "enzyme";

import Alerts, { BasicUsage, AlertWithIcon, ClosingTheAlert, ExtendedUsage, JavascriptMethods } from "./index";

describe("Documentation: Alerts", () => {
    it("is defined", () => {
        expect(Alerts).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Alerts />);

        expect(wrapper).toMatchSnapshot();
        expect(console.warn).toHaveBeenCalled();
    });

    describe("Basic Usage", () => {
        it("is defined", () => {
            expect(BasicUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicUsage />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Alert With Icon", () => {
        it("is defined", () => {
            expect(AlertWithIcon).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AlertWithIcon />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Closing The Alert", () => {
        it("is defined", () => {
            expect(ClosingTheAlert).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ClosingTheAlert />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Extended Usage", () => {
        it("is defined", () => {
            expect(ExtendedUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ExtendedUsage />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("JavascriptMethods", () => {
        it("is defined", () => {
            expect(JavascriptMethods).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<JavascriptMethods />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
