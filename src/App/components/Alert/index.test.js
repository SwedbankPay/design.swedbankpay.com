import React from "react";
import { shallow } from "enzyme";

import Alert from "./index";

describe("Component: Alert", () => {
    it("is defined", () => {
        expect(Alert).toBeDefined();
    });

    it("prop type is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Alert />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders an alert with the correct type recieved from its props", () => {
        const wrapper = shallow(<Alert type="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("alert-test");
    });

    it("renders an alert with icon", () => {
        const wrapper = shallow(<Alert type="test" icon="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons alert-icon" aria-hidden="true">test</i>)).toEqual(true);
    });

    it("renders an alert without an icon if no icon prop is provided", () => {
        const wrapper = shallow(<Alert type="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons alert-icon" aria-hidden="true">test</i>)).toEqual(false);
    });

    it("renders an alert with a close-button", () => {
        const wrapper = shallow(<Alert type="test" close />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("data-alert-close");
    });

    it("the close-button prevents default", () => {
        const wrapper = shallow(<Alert type="test" close />);
        const eventHandler = { preventDefault: jest.fn() };
        const closeBtn = wrapper.find("[data-alert-close]");

        expect(wrapper).toMatchSnapshot();

        closeBtn.simulate("click", eventHandler);

        expect(eventHandler.preventDefault).toHaveBeenCalled();
    });

    it("renders an alert without a close-button if no close prop is provided", () => {
        const wrapper = shallow(<Alert type="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons" data-alert-close="" aria-hidden="true">close</i>)).toEqual(false);
    });

    it("renders an alert with text", () => {
        const wrapper = shallow(<Alert type="test" text={<p>test</p>} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<p>test</p>)).toEqual(true);
    });

    it("renders an alert without text if no text prop is provided", () => {
        const wrapper = shallow(<Alert type="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<p>test</p>)).toEqual(false);
    });
});

