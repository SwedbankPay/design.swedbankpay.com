import React from "react";
import renderer from "react-test-renderer";
import Utilities from "./index";

describe("Utilities: index", () => {
    it("is defined", () => {
        expect(Utilities).toBeDefined();
    });

    it.skip("renders", () => {
        const utilities = renderer.create(<Utilities/>);

        expect(utilities.toJSON()).toMatchSnapshot();
    });
});
