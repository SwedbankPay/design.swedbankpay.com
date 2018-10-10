import React from "react";
import { shallow } from "enzyme";
import "prismjs";

import Attribute from "./index";

describe("Utilities: Attribute", () => {
    it("is defined", () => {
        expect(Attribute).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Attribute name="test" value="testValue" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="token attr-name">test</span>)).toEqual(true);
    });

    it("renders data attribute", () => {
        const wrapper = shallow(<Attribute name="test" value="test" data />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("data");
    });
});

