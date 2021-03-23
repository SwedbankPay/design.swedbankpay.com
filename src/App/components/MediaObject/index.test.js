import React from "react";
import { shallow } from "enzyme";

import MediaObject from "./index";

describe("Component: MediaObject -", () => {
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

    it("renders an icon", () => {
        const wrapper = shallow(<MediaObject heading="render-test" icon="home" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("i")).toHaveLength(1);
    });

    it("renders an image", () => {
        const wrapper = shallow(<MediaObject heading="render-test" imgUrl="https://via.placeholder.com/48x48" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("img")).toHaveLength(1);
    });

    it("renders MediaObject with class media-right", () => {
        const wrapper = shallow(<MediaObject heading="render-test" icon="home" mediaRight />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.hasClass("media-right")).toEqual(true);
    });

    it("renders a <small> text", () => {
        const wrapper = shallow(<MediaObject heading="render-test" textSmall text="small text" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("small")).toHaveLength(1);
        expect(wrapper.html()).toContain("small text");
    });

    it("renders a muted MediaObject", () => {
        const wrapper = shallow(<MediaObject heading="render-test" icon="home" muted />);
        const mediaHeader = wrapper.find("h3");

        expect(wrapper).toMatchSnapshot();
        expect(mediaHeader.hasClass("text-muted")).toEqual(true);
        expect(wrapper.find("i").hasClass("text-muted")).toEqual(true);
    });

    it("renders MediaObject with class media-sm", () => {
        const wrapper = shallow(<MediaObject heading="render-test" size="sm" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("h4");
        expect(wrapper.hasClass("media-sm")).toEqual(true);
    });

    it("renders MediaObject with class media-lg", () => {
        const wrapper = shallow(<MediaObject heading="render-test" size="lg" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("h2");
        expect(wrapper.hasClass("media-lg")).toEqual(true);
    });
});
