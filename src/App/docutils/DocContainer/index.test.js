import React from "react";
import { shallow } from "enzyme";

import DocContainer from "./index";

import { sidebar } from "@src/scripts/main";

describe("Utilities: DocContainer", () => {
    sidebar.populateSidebarTertiary = jest.fn();
    sidebar.initScrollListener = jest.fn();

    it("is defined", () => {
        expect(DocContainer).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<DocContainer>Component</DocContainer>);

        expect(wrapper).toMatchSnapshot();
    });
});
