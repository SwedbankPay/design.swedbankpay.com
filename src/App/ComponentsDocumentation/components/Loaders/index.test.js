import React from "react";
import { shallow } from "enzyme";

import Loaders, { BasicUsage, CenteredLoader, Sizes, MutedLoader } from "./index";

describe("Documentation: Loaders", () => {
    it("is defined", () => {
        expect(Loaders).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Loaders />);

        expect(wrapper).toMatchSnapshot();
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

    describe("CenteredLoader", () => {
        it("is defined", () => {
            expect(CenteredLoader).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CenteredLoader />);

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

    describe("Muted Loader", () => {
        it("is defined", () => {
            expect(MutedLoader).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MutedLoader />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
