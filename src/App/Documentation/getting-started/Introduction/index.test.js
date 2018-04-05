import React from "react";
import { shallow } from "enzyme";

import Introduction from "./index";

describe("GettingStarted: Introduction", () => {
    it("is defined", () => {
        expect(Introduction).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Introduction />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
