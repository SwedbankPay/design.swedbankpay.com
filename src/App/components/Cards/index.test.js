import React from "react";
import { shallow } from "enzyme";

import Cards from "./index";

describe("Component: Cards - ", () => {
    it("is defined", () => {
        expect(Cards).toBeDefined();
    });

    it("throws an error if type does not match proptypes", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Cards type="error" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with correct type", () => {
        const wrapper = shallow(<Cards type="secondary"/>);

        expect(wrapper.html()).toContain("cards-secondary");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a title", () => {
        const wrapper = shallow(<Cards type="secondary" titleTxt="Card title goes here"/>);

        expect(wrapper.html()).toContain("h4");
        expect(wrapper.find(".h4").text()).toEqual("Card title goes here");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders an image", () => {
        const wrapper = shallow(<Cards type="secondary" imgSrc="url.address" />);

        expect(wrapper.find("img").prop("src")).toEqual("url.address");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders an icon when icon is provided", () => {
        const wrapper = shallow(<Cards type="secondary" icon={<>01</>} />);

        expect(wrapper.html()).toContain("cards-icon");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a text in card-body", () => {
        const wrapper = shallow(<Cards type="secondary" text="Text that goes in card body" />);

        expect(wrapper.find(".cards-content").text()).toContain("Text that goes in card body");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a child object", () => {
        const wrapper = shallow(<Cards>This is child text</Cards>);

        expect(wrapper.html()).toContain("This is child text");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a wide card when wide is true", () => {
        const wrapper = shallow(<Cards type="secondary" wide/>);

        expect(wrapper.html()).toContain("cards-wide");
        expect(wrapper).toMatchSnapshot();
    });
});
