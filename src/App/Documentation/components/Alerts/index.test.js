import React from "react";
import { shallow } from "enzyme";

import Alerts from "./index";
import { BasicUsage, AlertWithLink, AlertWithIcon, ClosingTheAlert, ExtendedUsage, UsageWithJavascript, AlertsText } from "./index";

describe("Documentation: Alerts", () => {
    it("is defined", () => {
        expect(Alerts).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Alerts />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Basic Usage", () => {
        it("is defined", () => {
            expect(BasicUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <BasicUsage />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Alert With Link", () => {
        it("is defined", () => {
            expect(AlertWithLink).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <AlertWithLink />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Alert With Icon", () => {
        it("is defined", () => {
            expect(AlertWithIcon).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <AlertWithIcon />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Closing The Alert", () => {
        it("is defined", () => {
            expect(ClosingTheAlert).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <ClosingTheAlert />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Extended Usage", () => {
        it("is defined", () => {
            expect(ExtendedUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <ExtendedUsage />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Usage With Javascript", () => {
        it("is defined", () => {
            expect(UsageWithJavascript).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <UsageWithJavascript />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Alerts Text", () => {
        it("is defined", () => {
            expect(AlertsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <AlertsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
