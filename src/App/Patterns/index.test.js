import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Patterns from "./index";

describe("Patterns: index", () => {
    it("is defined", () => {
        expect(Patterns).toBeDefined();
    });

    it("renders", () => {
        const patterns = renderer.create(<BrowserRouter>
            <Patterns />
        </BrowserRouter>);

        expect(patterns.toJSON()).toMatchSnapshot();
    });
});
