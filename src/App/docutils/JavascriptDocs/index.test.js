import React from "react";
import { shallow } from "enzyme";

import JavascriptDocs, { OpenDocs, CloseDocs } from "./index";

jest.mock("react-router-dom");

describe("Utilities: JavascriptDocs", () => {
    const componentName = "test";

    it("is defined", () => {
        expect(JavascriptDocs).toBeDefined();
    });

    it("renders only init method", () => {
        const wrapper = shallow(<JavascriptDocs componentName={componentName} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<OpenDocs componentName={componentName} />)).toBeFalsy();
        expect(wrapper.contains(<CloseDocs componentName={componentName} />)).toBeFalsy();
    });

    it("renders init and open methods", () => {
        const wrapper = shallow(<JavascriptDocs componentName={componentName} open />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<OpenDocs componentName={componentName} />)).toBeTruthy();
        expect(wrapper.contains(<CloseDocs componentName={componentName} />)).toBeFalsy();
    });

    it("renders init and close methods", () => {
        const wrapper = shallow(
            <JavascriptDocs componentName={componentName} close />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<OpenDocs componentName={componentName} />)).toBeFalsy();
        expect(wrapper.contains(<CloseDocs componentName={componentName} />)).toBeTruthy();
    });

    it("renders init, open and close methods", () => {
        const wrapper = shallow(
            <JavascriptDocs componentName={componentName} open close />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<OpenDocs componentName={componentName} />)).toBeTruthy();
        expect(wrapper.contains(<CloseDocs componentName={componentName} />)).toBeTruthy();
    });

    describe("OpenDocs", () => {
        it("is defined", () => {
            expect(OpenDocs).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<OpenDocs componentName={componentName} />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CloseDocs", () => {
        it("is defined", () => {
            expect(CloseDocs).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CloseDocs componentName={componentName} />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});

