import React from "react";
import { shallow } from "enzyme";

import Imagery, { ImageLibrary, ImageSizes, FocalPoints, UsingImagery } from "./index";

describe("Core: Imagery", () => {
    it("is defined", () => {
        expect(Imagery).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Imagery />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("ImageLibrary", () => {
        it("is defined", () => {
            expect(ImageLibrary).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ImageLibrary />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ImageSizes", () => {
        it("is defined", () => {
            expect(ImageSizes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ImageSizes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FocalPoints", () => {
        it("is defined", () => {
            expect(FocalPoints).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FocalPoints />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("UsingImagery", () => {
        it("is defined", () => {
            expect(UsingImagery).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<UsingImagery />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
