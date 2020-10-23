import React from "react";
import { shallow } from "enzyme";

import Link from "./index";

describe("Component: Link", () => {
    it("is defined", () => {
        expect(Link).toBeDefined();
    });

    it("calls console.error when linkText is not provided", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Link />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders with provided linkText and no icons when only linkText is provided", () => {
        const wrapper = shallow(<Link linkText="Link" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("Link")).toBeTruthy();
        expect(wrapper.html()).not.toContain("<i class=\"material-icons\" aria-hidden=\"true\">");
    });

    it("renders with left icon when leftIcon is provided", () => {
        const icon = "chevron_left";
        const wrapper = shallow(<Link linkText="Link" leftIcon={icon} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain(`<i class="material-icons" aria-hidden="true">${icon}</i>`);
        expect(wrapper.html()).toContain("ml-2");
    });

    it("renders with right icon when rightIcon is provided", () => {
        const icon = "chevron_right";
        const wrapper = shallow(<Link linkText="Link" rightIcon={icon} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain(`<i class="material-icons" aria-hidden="true">${icon}</i>`);
        expect(wrapper.html()).toContain("mr-2");
    });
});
