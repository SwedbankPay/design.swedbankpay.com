import React from "react";
import { shallow } from "enzyme";

import Loader from "./index";

describe("Component: Loader - ", () => {
    it("is defined", () => {
        expect(Loader).toBeDefined();
    });

    it("prop size is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(
            <Loader />
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders a default loader with the specified size when prop size is provided", () => {
        const wrapper = shallow(
            <Loader size="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("loader loader-test");
        expect(wrapper.html()).toContain("loader-icon");
    });

    it("renders a muted loader with the specified size when prop size and muted is provided", () => {
        const wrapper = shallow(
            <Loader size="test" muted={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("loader loader-test loader-muted");
        expect(wrapper.html()).toContain("loader-icon");
    });

    it("renders a loader with the specified size and class in when prop size and visible is provided", () => {
        const wrapper = shallow(
            <Loader size="test" visible={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("loader loader-test in");
        expect(wrapper.html()).toContain("loader-icon");
    });
});
