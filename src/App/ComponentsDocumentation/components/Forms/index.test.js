import React from "react";
import { shallow } from "enzyme";

import Forms, { Overview, FormGrid, Validation, UsageWithFieldsets, StaticText, Dropdown, Checkboxes, RadioButtons, Toggleboxes, RangeSlider, DisabledFormComponents, JavascriptMethods } from "./index";

describe("Documentation: Forms", () => {
    it("is defined", () => {
        expect(Forms).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Forms />);

        expect(wrapper).toMatchSnapshot();
        expect(console.warn).toHaveBeenCalled();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });

        it("form prevents default", () => {
            const wrapper = shallow(<Overview />);
            const submitEvent = { preventDefault: jest.fn() };

            wrapper.find("form").simulate("submit", submitEvent);
            expect(submitEvent.preventDefault).toHaveBeenCalled();
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FormGrid", () => {
        it("is defined", () => {
            expect(FormGrid).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FormGrid />);

            expect(wrapper).toMatchSnapshot();
        });

        it("form prevents default", () => {
            const wrapper = shallow(<FormGrid />);
            const submitEvent = { preventDefault: jest.fn() };

            wrapper.find("form").simulate("submit", submitEvent);
            expect(submitEvent.preventDefault).toHaveBeenCalled();
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Validation", () => {
        it("is defined", () => {
            expect(Validation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Validation />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("UsageWithFieldsets", () => {
        it("is defined", () => {
            expect(UsageWithFieldsets).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<UsageWithFieldsets />);

            expect(wrapper).toMatchSnapshot();
        });

        it("form prevents default", () => {
            const wrapper = shallow(<UsageWithFieldsets />);
            const forms = wrapper.find("form");
            const submitEvent = { preventDefault: jest.fn() };

            forms.forEach(form => form.simulate("submit", submitEvent));
            expect(submitEvent.preventDefault).toHaveBeenCalled();
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("StaticText", () => {
        it("is defined", () => {
            expect(StaticText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<StaticText />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Dropdown", () => {
        it("is defined", () => {
            expect(Dropdown).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Dropdown />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Checkboxes", () => {
        it("is defined", () => {
            expect(Checkboxes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Checkboxes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("RadioButtons", () => {
        it("is defined", () => {
            expect(RadioButtons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<RadioButtons />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Toggleboxes", () => {
        it("is defined", () => {
            expect(Toggleboxes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Toggleboxes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("RangeSlider", () => {
        it("is defined", () => {
            expect(RangeSlider).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<RangeSlider />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DisabledFormComponents", () => {
        it("is defined", () => {
            expect(DisabledFormComponents).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DisabledFormComponents />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("JavascriptMethods", () => {
        it("is defined", () => {
            expect(JavascriptMethods).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<JavascriptMethods />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
