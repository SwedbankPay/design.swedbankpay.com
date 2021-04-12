import React from "react";
import { shallow } from "enzyme";

import Togglebox from "./Togglebox";

describe("Component: Togglebox -", () => {
    it("is defined", () => {
        expect(Togglebox).toBeDefined();
    });

    it("renders without label", () => {
        const wrapper = shallow(<Togglebox />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("togglebox");
        expect(wrapper.html()).not.toContain("label");
    });

    it("renders with id and label", () => {
        const wrapper = shallow(<Togglebox id="test" label="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("togglebox");
        expect(wrapper.html()).toContain("label");
        expect(wrapper.html()).toContain("id=\"test\"");
        expect(wrapper.html()).toContain("for=\"test\"");
    });

    it("renders disabled", () => {
        const wrapper = shallow(<Togglebox disabled />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("togglebox");
        expect(wrapper.html()).toContain("disabled");
    });

    it("renders checked", () => {
        const wrapper = shallow(<Togglebox checked />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("togglebox");
        expect(wrapper.html()).toContain("checked");
    });
});
