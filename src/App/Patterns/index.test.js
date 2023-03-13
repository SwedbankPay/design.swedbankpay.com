import React from "react";
import renderer from "react-test-renderer";
import Patterns from "./index";

describe("Patterns: index", () => {
    it("is defined", () => {
        expect(Patterns).toBeDefined();
    });

    it.skip("renders", () => {
        const patterns = renderer.create(<Patterns />);

        expect(patterns.toJSON()).toMatchSnapshot();
    });
});
