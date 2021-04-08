import React from "react";
import { shallow } from "enzyme";

import Dialog from "./index";

describe("Component: Dialog -", () => {
    it("is defined", () => {
        expect(Dialog).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Dialog />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with the passed ID", () => {
        const wrapper = shallow(<Dialog diaId="my-id"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("my-id");
    });

    it("renders with the passed header", () => {
        const wrapper = shallow(<Dialog diaHeader="My heading"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("My heading");
    });

    it("renders with the passed children", () => {
        const wrapper = shallow(<Dialog><p>My paragraph</p></Dialog>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<p>My paragraph</p>");
    });
});
