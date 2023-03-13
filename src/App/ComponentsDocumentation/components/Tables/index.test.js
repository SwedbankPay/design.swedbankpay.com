import React from "react";
import renderer from "react-test-renderer";

import Tables from "./index";

describe("Documentation: Tables", () => {
    it("is defined", () => {
        expect(Tables).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<Tables/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
