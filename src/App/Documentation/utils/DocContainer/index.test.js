import React from "react";
import { shallow } from "enzyme";

import DocContainer from "./index";

describe("Utilities: DocContainer", () => {
    it("is defined", () => {
        expect(DocContainer).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<DocContainer>Component</DocContainer>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with a table of contents(doctoc) if prop docToc is given", () => {
        const wrapper = shallow(
            <DocContainer docToc>Component</DocContainer>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.debug()).toContain("<DocToc component={[Function: DocContent]} />");
    });
});
