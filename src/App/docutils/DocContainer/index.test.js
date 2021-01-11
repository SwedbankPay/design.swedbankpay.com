import React from "react";
import { shallow } from "enzyme";

import DocContainer from "./index";

const { sidebar } = window.dg;

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
