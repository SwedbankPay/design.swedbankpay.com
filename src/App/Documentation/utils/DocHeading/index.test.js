import React from "react";
import { shallow } from "enzyme";

import DocHeading from "./index";

describe("Utilities: DocHeading", () => {
    it("is defined", () => {
        expect(DocHeading).toBeDefined();
    });

    it("renders heading and updates document title", () => {
        const location = { pathname: "test" };

        const wrapper = shallow(
            <DocHeading.WrappedComponent location={location} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<h2 class=\"h1\">Test</h2>");
        expect(document.title).toEqual("Test | Swedbank Pay DesignGuide");
    });

    it("correctly formats title", () => {
        const location = { pathname: "test-test" };

        const wrapper = shallow(
            <DocHeading.WrappedComponent location={location} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<h2 class=\"h1\">Test test</h2>");
        expect(document.title).toEqual("Test test | Swedbank Pay DesignGuide");
    });
});

