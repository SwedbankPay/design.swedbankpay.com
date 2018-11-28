import React from "react";
import { shallow } from "enzyme";

import Forms, { Overview, FormGrid, Validation, UsageWithFieldsets, StaticText, Checkboxes, DisabledCheckboxes, RadioButtons, DisabledRadioButtons, Toggleboxes, DisabledToggleboxes, RangeSlider, DisabledRangeSlider } from "./index";

describe("Documentation: Forms", () => {
    it("is defined", () => {
        expect(Forms).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Forms />);

        expect(wrapper).toMatchSnapshot();
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

    describe("Checkboxes", () => {
        it("is defined", () => {
            expect(Checkboxes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Checkboxes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DisabledCheckboxes", () => {
        it("is defined", () => {
            expect(DisabledCheckboxes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DisabledCheckboxes />);

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

    describe("DisabledRadioButtons", () => {
        it("is defined", () => {
            expect(DisabledRadioButtons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DisabledRadioButtons />);

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

    describe("DisabledToggleboxes", () => {
        it("is defined", () => {
            expect(DisabledToggleboxes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DisabledToggleboxes />);

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

    describe("DisabledRangeSlider", () => {
        it("is defined", () => {
            expect(DisabledRangeSlider).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DisabledRangeSlider />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
