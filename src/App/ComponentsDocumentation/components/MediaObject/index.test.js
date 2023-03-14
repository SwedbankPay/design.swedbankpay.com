import React from "react";
import renderer from "react-test-renderer";

import MediaObject, { Overview, Sizes, MediaPosition } from "./index";

describe("Documentation: MediaObject", () => {
    it("is defined", () => {
        expect(MediaObject).toBeDefined();
    });

    it("renders", () => {
        const wrapper = renderer.create(<MediaObject />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Overview />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Sizes", () => {
        it("is defined", () => {
            expect(Sizes).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Sizes />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("MediaPosition", () => {
        it("is defined", () => {
            expect(MediaPosition).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<MediaPosition />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
