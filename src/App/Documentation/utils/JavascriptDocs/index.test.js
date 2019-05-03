import React from "react";
// import { Link } from "react-router-dom";
import { shallow, mount } from "enzyme";

import JavascriptDocs from "./index";

jest.mock("react-router-dom");

describe("Utilities: JavascriptDocs", () => {
    it("is defined", () => {
        expect(JavascriptDocs).toBeDefined();
    });

    it("renders only init method", () => {
        const wrapper = shallow(<JavascriptDocs componentName="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("open")).toBeFalsy();
        expect(wrapper.contains("close")).toBeFalsy();
    });

    it("renders init and open methods", () => {
        const wrapper = mount(
            <JavascriptDocs componentName="test" open />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("open")).toBeTruthy();
        expect(wrapper.contains("close")).toBeFalsy();
    });

    it("renders init and close methods", () => {
        const wrapper = mount(
            <JavascriptDocs componentName="test" close />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("open")).toBeFalsy();
        expect(wrapper.contains("close")).toBeTruthy();
    });

    it("renders init, open and close methods", () => {
        const wrapper = mount(
            <JavascriptDocs componentName="test" open close />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("open")).toBeTruthy();
        expect(wrapper.contains("close")).toBeTruthy();
    });
});

