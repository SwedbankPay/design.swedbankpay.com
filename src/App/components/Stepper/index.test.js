import React from "react";
import { shallow, mount } from "enzyme";

import Stepper from "./index";

describe("Component: Stepper", () => {
    const steps = [
        {
            title: "Step one",
            completed: true,
            clickable: true
        },
        {
            title: "Step two",
            ongoing: true,
            clickable: true
        },
        {
            title: "Step three",
            clickable: true
        },
        {
            title: "Step four",
            selected: true
        },
        {
            title: "Step Five"
        },
        {
            title: "Step Six"
        }
    ];

    const simpleSteps = [
        {
            title: "one step"
        },
        {
            title: "two steps"
        },
        {
            title: "three steps for testing"
        }
    ];

    it("is defined", () => {
        expect(Stepper).toBeDefined();
    });

    it("renders with default items if no props are provided", () => {
        const wrapper = shallow(<Stepper />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("stepper");
    });

    it("renders with given items if prop Stepper is given", () => {
        const wrapper = mount(<Stepper steps={simpleSteps} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("three steps for testing");
    });

    it("renders in vertical mode if prop vertical is provided", () => {
        const wrapper = shallow(<Stepper vertical />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("stepper-vertical");
    });

    it("renders clickable Stepper", () => {
        const wrapper = mount(<Stepper steps={steps} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".stepper a").length).toBeGreaterThan(0);
    });
});
