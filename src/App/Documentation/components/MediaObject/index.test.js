import React from "react";
import { shallow } from "enzyme";

import MediaObject, { Overview, MediaAlignment, MediaObjectText } from "./index";

describe("Documentation: MediaObject", () => {
    it("is defined", () => {
        expect(MediaObject).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <MediaObject />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Overview />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("MediaAlignment", () => {
        it("is defined", () => {
            expect(MediaAlignment).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <MediaAlignment />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("MediaObjectText", () => {
        it("is defined", () => {
            expect(MediaObjectText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <MediaObjectText />
            );

            expect(wrapper).toMatchSnapshot();
        });

    });
});
