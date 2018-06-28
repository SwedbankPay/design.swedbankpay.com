import React from "react";
import { shallow } from "enzyme";

import { Chrome, Edge, Firefox, InternetExplorer, Opera, Safari } from "./BrowserIcons";

describe("BrowserSupport: BrowserIcons", () => {
    describe("Chrome: ", () => {
        it("is defined", () => {
            expect(Chrome).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Chrome />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Edge: ", () => {
        it("is defined", () => {
            expect(Edge).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Edge />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Firefox: ", () => {
        it("is defined", () => {
            expect(Firefox).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Firefox />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("InternetExplorer: ", () => {
        it("is defined", () => {
            expect(InternetExplorer).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <InternetExplorer />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Opera: ", () => {
        it("is defined", () => {
            expect(Opera).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Opera />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Safari: ", () => {
        it("is defined", () => {
            expect(Safari).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Safari />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
