import React from "react";
import renderer from "react-test-renderer";

import Core from "./index";

describe("Core: index", () => {
    it("is defined", () => {
        expect(Core).toBeDefined();
    });

    it.skip("renders", () => {
        const core = renderer.create(<Core />);

        expect(core.toJSON()).toMatchSnapshot();
    });
});
