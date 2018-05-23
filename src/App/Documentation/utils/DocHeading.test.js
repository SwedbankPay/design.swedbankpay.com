// import React from "react";
// import { shallow } from "enzyme";

import DocHeading from "./DocHeading";

describe("Utilities: DocHeading", () => {
    it("is defined", () => {
        expect(DocHeading).toBeDefined();
    });

    // it("renders heading and updates document title", () => {
    //     const location = { pathname: "test" };

    //     const wrapper = shallow(
    //         <DocHeading location={location} />
    //     );

    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.contains(<h1>Test</h1>)).toEqual(true);
    //     expect(document.title).toEqual("Test | PayEx DesignGuide");
    // });

    // it("correctly formats title", () => {
    //     const location = { pathname: "test-test" };

    //     const wrapper = shallow(
    //         <DocHeading location={location} />
    //     );

    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.contains(<h1>Test test</h1>)).toEqual(true);
    //     expect(document.title).toEqual("Test test | PayEx DesignGuide");
    // });
});

