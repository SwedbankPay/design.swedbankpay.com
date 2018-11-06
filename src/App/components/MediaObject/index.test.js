import React from "react";
import { shallow } from "enzyme";

import MediaObject from "./index";

describe("Component: MediaObject - ", () => {
    it("is defined", () => {
        expect(MediaObject).toBeDefined();
    });

    it("throws an error if heading is not defined", () => {
        console.error = jest.fn();

        const wrapper = shallow(<MediaObject />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders", () => {
        const wrapper = shallow(<MediaObject heading="render-test"/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders a small MediaObject", () => {
        const wrapper = shallow(<MediaObject heading="render-test" size="sm" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("h4");
        expect(wrapper.hasClass("media-sm")).toEqual(true);
    });

    it("renders a large MediaObject", () => {
        const wrapper = shallow(<MediaObject heading="render-test" size="lg" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("h2");
        expect(wrapper.hasClass("media-lg")).toEqual(true);
    });

    it("renders a muted MediaObject", () => {
        const wrapper = shallow(<MediaObject heading="render-test" muted />);
        const mediaHeader = wrapper.find("h3");

        expect(wrapper).toMatchSnapshot();
        expect(mediaHeader.hasClass("text-muted")).toEqual(true);
    });

    it("renders a MediaObject with an icon", () => {
        const wrapper = shallow(<MediaObject heading="render-test" icon="home"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("i")).toHaveLength(1);
    });
});
