import React from "react";
import { mount } from "enzyme";

import DocHeading from "./index";

const brandTitle = process.env.brandTitle;

describe("Utilities: DocHeading", () => {
    it("is defined", () => {
        expect(DocHeading).toBeDefined();
    });

    it("renders heading and updates document title", () => {
        const location = { pathname: "test" };

        const wrapper = mount(
            <DocHeading.WrappedComponent locationFromJestTest={location} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<h1>Test</h1>");
        expect(document.title).toEqual(`Test | ${brandTitle} Design Guide`);
    });

    it("correctly formats title", () => {
        const location = { pathname: "test-test" };

        const wrapper = mount(
            <DocHeading.WrappedComponent locationFromJestTest={location} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<h1>Test test</h1>");
        expect(document.title).toEqual(`Test test | ${brandTitle} Design Guide`);
    });
});

