import React from "react";
import { shallow } from "enzyme";

import Sheet from "./index";

describe("Component: Sheet - ", () => {
    it("is defined", () => {
        expect(Sheet).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Sheet />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with a close icon", () => {
        const wrapper = shallow(<Sheet />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<i class=\"material-icons\" aria-hidden=\"true\">close</i>");
    });

    it("renders with an ID", () => {
        const wrapper = shallow(<Sheet id="demo-sheet" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("demo-sheet");
    });

    it("renders with the data-require-action attribute", () => {
        const wrapper = shallow(<Sheet requireAction />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("data-require-action");
    });

    it("does not render with data-require-action if it is set to false", () => {
        const wrapper = shallow(<Sheet requireAction={false} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("data-require-action");
    });

    it("renders with children", () => {
        const wrapper = shallow(<Sheet>Test</Sheet>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("Test");
    });
});
