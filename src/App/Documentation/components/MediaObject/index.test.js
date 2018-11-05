import React from "react";
import { shallow } from "enzyme";

import MediaObject, { Overview, Sizes, MediaPosition, MediaObjectText } from "./index";

describe("Documentation: MediaObject", () => {
    it("is defined", () => {
        expect(MediaObject).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<MediaObject />);

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

    describe("MediaPosition", () => {
        it("is defined", () => {
            expect(MediaPosition).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MediaPosition />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("MediaObjectText", () => {
        it("is defined", () => {
            expect(MediaObjectText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MediaObjectText />);

            expect(wrapper).toMatchSnapshot();
        });

    });
});
