import React from "react";
import { mount } from "enzyme";

import DocContainer from "./index";

describe("Utilities: DeprecatedComponentAlert", () => {
    it("is defined", () => {
        expect(DocContainer).toBeDefined();
    });

    it("renders", () => {
        const wrapper = mount(<DocContainer>Component</DocContainer>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with a table of contents(doctoc) if prop docToc is given", () => {
        const wrapper = mount(<DocContainer docToc>Component</DocContainer>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("doc-toc");
    });
});
