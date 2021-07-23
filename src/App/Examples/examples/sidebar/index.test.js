import React from "react";
import { shallow } from "enzyme";

import Sidebar from "./index";

import { sidebar } from "@src/scripts/main";

describe("Examples: Sidebar", () => {
    it("is defined", () => {
        expect(Sidebar).toBeDefined();
    });

    it("renders", () => {
        sidebar.init = jest.fn();
        sidebar.initScrollListener = jest.fn();
        sidebar.setActiveState = jest.fn();

        const wrapper = shallow(<Sidebar />);

        expect(wrapper).toMatchSnapshot();
    });
});
