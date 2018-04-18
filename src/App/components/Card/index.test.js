import React from "react";
import { shallow } from "enzyme";

import Card from "./index";

describe("Component: Card - ", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Card />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
