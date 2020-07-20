import React from "react";
import { shallow } from "enzyme";

import Alert, { ComplexAlert } from "./index";

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
        const wrapper = shallow(<Alert type="test" text="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<p>test</p>)).toEqual(true);
    });

    it("renders an alert without text if no text prop is provided", () => {
        const wrapper = shallow(<Alert type="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<p>test</p>)).toEqual(false);
    });

    it("renders the children sent to the alert component and a alert-body", () => {
        const wrapper = shallow(
            <Alert type="test" >
                <p>Alert text</p>
            </Alert>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<div className="alert-body"><p>Alert text</p></div>)).toBeTruthy();
    });
});

describe("Component: ComplexAlert", () => {
    it("is defined", () => {
        expect(ComplexAlert).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ComplexAlert />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Proptypes", () => {
        it("renders with an ID when prop id is provided", () => {
            const wrapper = shallow(<ComplexAlert id="test-alert" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("test-alert");
        });

        it("renders with the correct class when prop type is provided", () => {
            const wrapper = shallow(<ComplexAlert type="default" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("alert-default");
        });

        it("renders with an icon when prop icon is provided", () => {
            const wrapper = shallow(<ComplexAlert icon="home" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<i class=\"material-icons alert-icon\" aria-hidden=\"true\">home</i>");
        });

        it("renders with a close button when prop close is true", () => {
            const wrapper = shallow(<ComplexAlert close />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<i class=\"material-icons\" aria-hidden=\"true\">close</i>");
        });

        it("renders with the passed header text when prop headerText is provided", () => {
            const wrapper = shallow(<ComplexAlert headerText="My custom header text"/>);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<h3>My custom header text</h3>");
        });

        it("renders with the passed children when prop children is provided", () => {
            const wrapper = shallow(<ComplexAlert>Complex children...</ComplexAlert>);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<div class=\"alert-body\">Complex children...</div>");
        });
    });

    // it("close icon prevents default", () => {
    //     const eventHandler = { preventDefault: jest.fn() };
    //     const wrapper = mount(<ComplexAlert close />);
    //     const closeAnchor = wrapper.find("a[data-alert-close]");

    //     expect(wrapper).toMatchSnapshot();

    //     closeAnchor.simulate("click");

    //     expect(eventHandler.preventDefault).toHaveBeenCalled();
    // });

    test.todo("Write tests for prevent default");
});
