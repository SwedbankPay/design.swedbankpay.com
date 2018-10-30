import React from "react";
import { shallow } from "enzyme";

import Card from "./index";

describe("Component: Card - ", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it("throws an error if type does not match proptypes", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Card type="error" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name card if no type is specified", () => {
        const wrapper = shallow(<Card />);

        expect(wrapper.find(".card")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a header", () => {
        const wrapper = shallow(<Card title="Card default"/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders an image", () => {
        const wrapper = shallow(<Card imgSrc="url.address" />);

        expect(wrapper.find(".card-img")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders an icon", () => {
        const wrapper = shallow(<Card icon="home" />);

        expect(wrapper.find(".material-icons")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a highlight title", () => {
        const wrapper = shallow(<Card highlightTitle="Balance" />);

        expect(wrapper.find(".highlight-title")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a highlight subtitle", () => {
        const wrapper = shallow(<Card highlightSubTitle="remaining amount to pay" />);

        expect(wrapper.find(".highlight-subtitle")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders footer text", () => {
        const wrapper = shallow(<Card footerTxt="Footer information" />);

        expect(wrapper.find(".footer-text")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders footer link text", () => {
        const wrapper = shallow(<Card footerLinkTxt="Click this footer link" />);

        expect(wrapper.find(".footer-link")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });
});
