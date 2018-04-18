import React from "react";
import { shallow } from "enzyme";

import Modal from "./index";

describe("Component: Modal - ", () => {

    it("is defined", () => {
        expect(Modal).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Modal type="default" size="large" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("modal");
        expect(wrapper.html()).toContain("modal-default");
        expect(wrapper.html()).toContain("modal-large");
    });

    it("prop type is marked as required", () => {
        console.error = jest.fn();
        const wrapper = shallow(
            <Modal size="large" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("modal-large");
        expect(console.error).toHaveBeenCalled();
    });

    it("prop size is marked as required", () => {
        console.error = jest.fn();
        const wrapper = shallow(
            <Modal type="default" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("modal-default");
        expect(console.error).toHaveBeenCalled();
    });

    it("prop type is is an enum which requires value 'brand' or 'default'", () => {
        console.error = jest.fn();
        const wrapper = shallow(
            <Modal type="test" size="large" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("prop size is is an enum which requires value 'small', 'medium' or 'large'", () => {
        console.error = jest.fn();
        const wrapper = shallow(
            <Modal type="default" size="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("prop footerAlignment is an enum requires value 'centered' or 'right'", () => {
        console.error = jest.fn();

        const wrapper = shallow(
            <Modal footerAlignment="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders with class 'static' when prop isStatic is true", () => {
        const wrapper = shallow(
            <Modal isStatic={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("static");
    });

    it("renders with class 'fade' when prop fade is true", () => {
        const wrapper = shallow(
            <Modal fade={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("fade");
    });

    it("renders with class 'in' when prop visible is true", () => {
        const wrapper = shallow(
            <Modal visible={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("in");
    });

    it("renders without header when prop title is missing", () => {
        const wrapper = shallow(
            <Modal />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("header");
        expect(wrapper.html()).not.toContain("modal-title");
    });

    it("renders with a header without subtitle when prop title is provided and prop subTitle is missing", () => {
        const wrapper = shallow(
            <Modal title="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("header");
        expect(wrapper.html()).toContain("modal-title");
        expect(wrapper.html()).not.toContain("modal-sub-title");
    });

    it("renders with a header and subtitle when prop title and subTitle is provided", () => {
        const wrapper = shallow(
            <Modal title="test" subTitle="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("header");
        expect(wrapper.html()).toContain("modal-title");
        expect(wrapper.html()).toContain("modal-sub-title");
    });

    it("renders a header tag with subtitle but without title when prop subTitle is provided but title is not", () => {
        const wrapper = shallow(
            <Modal subTitle="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("header");
        expect(wrapper.html()).not.toContain("modal-title");
        expect(wrapper.html()).toContain("modal-sub-title");
    });

    it("renders a footer when prop footerText is provided", () => {
        const wrapper = shallow(
            <Modal footerText="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("footer");
    });

    it("renders a footer with alignment when prop footerText and footerAlignment is provided", () => {
        const wrapper = shallow(
            <Modal footerText="test" footerAlignment="centered" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("footer");
        expect(wrapper.html()).toContain("modal-footer-centered");
    });

    it("renders a button component when prop button is true", () => {
        const wrapper = shallow(
            <Modal button={true} id="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("button");
        expect(wrapper.html()).toContain("data-modal-open");
    });
});
