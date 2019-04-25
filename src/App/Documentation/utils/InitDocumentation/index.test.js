import React from "react";
import { shallow } from "enzyme";

import InitDocumentation from "./index";

describe("Utilities: InitDocumentation", () => {
    it("is defined", () => {
        expect(InitDocumentation).toBeDefined();
    });

    it("renders with the correct component name", () => {
        const wrapper = shallow(<InitDocumentation componentName="Test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("test")).toEqual(true);
    });

    it("renders with a default component name set to Component", () => {
        const wrapper = shallow(<InitDocumentation />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("component")).toEqual(true);
    });

    test.todo("write test for scriptName prop");
});

