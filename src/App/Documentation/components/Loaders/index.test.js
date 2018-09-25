import React from "react";
import { shallow } from "enzyme";

import Loaders, { BasicUsage, Sizes, MutedLoader, StaticHtml, UsageWithJavascript, LoadersText } from "./index";

describe("Documentation: Loaders", () => {
    it("is defined", () => {
        expect(Loaders).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Loaders />
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

    describe("Sizes", () => {
        it("is defined", () => {
            expect(Sizes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Sizes />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Muted Loader", () => {
        it("is defined", () => {
            expect(MutedLoader).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <MutedLoader />
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

    describe("Loaders Text", () => {
        it("is defined", () => {
            expect(LoadersText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <LoadersText />
            );

            expect(wrapper).toMatchSnapshot();
        });

    });

    describe("Static Html", () => {
        it("is defined", () => {
            expect(StaticHtml).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <StaticHtml />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
