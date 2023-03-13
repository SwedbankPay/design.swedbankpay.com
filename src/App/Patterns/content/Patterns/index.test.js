import React from "react";
import renderer from "react-test-renderer";
import Patterns, { Overview } from "./index";

describe("Patterns", () => {
    it("is defined", () => {
        expect(Patterns).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<Patterns />);

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
});
