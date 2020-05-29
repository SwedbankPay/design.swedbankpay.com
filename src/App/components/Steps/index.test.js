import React from "react";
import { shallow, mount } from "enzyme";

import Steps from "./index";

describe("Component: Steps", () => {
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
        expect(Steps).toBeDefined();
    });

    it("renders with default items if no props are provided", () => {
        const wrapper = shallow(<Steps />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("steps");
    });

    it("renders with given items if prop Steps is given", () => {
        const wrapper = mount(<Steps steps={simpleSteps} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("three steps for testing");
    });

    it("renders in vertical mode if prop vertical is provided", () => {
        const wrapper = shallow(<Steps vertical />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("steps-vertical");
    });

    it("renders clickable Steps", () => {
        const wrapper = mount(<Steps steps={steps} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".steps a").length).toBeGreaterThan(0);
    });
});
