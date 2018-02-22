import React from "react";
import { shallow } from "enzyme";

import Alert from "./index";

describe("Component: Alert", () => {
    it("is defined", () => {
        expect(Alert).toBeDefined();
    });

    it("prop type is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(
            <Alert />
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders an alert with the correct type recieved from its props", () => {
        const wrapper = shallow(
            <Alert type="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("alert-test");
    });

    it("renders an alert with icon", () => {
        const wrapper = shallow(
            <Alert type="test" icon="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons alert-icon">test</i>)).toEqual(true);
    });

    it("renders an alert without an icon if no icon prop is provided", () => {
        const wrapper = shallow(
            <Alert type="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons alert-icon">test</i>)).toEqual(false);
    });

    it("renders an alert with a close-button", () => {
        const wrapper = shallow(
            <Alert type="test" close={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons alert-close" data-close="true">close</i>)).toEqual(true);
    });

    it("renders an alert without a close-button if no close prop is provided", () => {
        const wrapper = shallow(
            <Alert type="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons alert-close" data-close="true">close</i>)).toEqual(false);
    });

    it("renders an alert with a heading", () => {
        const wrapper = shallow(
            <Alert type="test" heading="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<h3 className="alert-heading">test</h3>)).toEqual(true);
    });

    it("renders an alert without a heading if no heading prop is provided", () => {
        const wrapper = shallow(
            <Alert type="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<h3 className="alert-heading">test</h3>)).toEqual(false);
    });

    it("renders an alert with text", () => {
        const wrapper = shallow(
            <Alert type="test" text="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<p className="alert-text">test</p>)).toEqual(true);
    });

    it("renders an alert without text if no text prop is provided", () => {
        const wrapper = shallow(
            <Alert type="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<p className="alert-text">test</p>)).toEqual(false);
    });

    it("renders an alert with a link with href='#' when no linkHref prop is provided", () => {
        const wrapper = shallow(
            <Alert type="test" linkText="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<a className="alert-link" href="#">test</a>)).toEqual(true);
    });

    it("renders an alert with a link with provided href", () => {
        const wrapper = shallow(
            <Alert type="test" linkText="test" linkHref="www.example.com" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<a className="alert-link" href="www.example.com">test</a>)).toEqual(true);
    });

    it("renders an alert without a link with provided href when no linkText prop is provided", () => {
        const wrapper = shallow(
            <Alert type="test" linkHref="www.example.com" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<a className="alert-link" href="www.example.com">test</a>)).toEqual(false);
    });
});
