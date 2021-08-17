import React from "react";
import { shallow } from "enzyme";

import Customers from "./index";

import { actionList } from "@src/scripts/main";

describe("Examples: Customers", () => {
    it("is defined", () => {
        expect(Customers).toBeDefined();
    });

    it("renders", () => {
        /*
            The Customers component calls dg.actionList.init(). Mocking the topbarscript
            to avoid a warning message.
        */
        actionList.init = jest.fn();

        const wrapper = shallow(<Customers test />);

        expect(wrapper).toMatchSnapshot();
    });
});
