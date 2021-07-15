import React from "react";
import { shallow } from "enzyme";

import Datepicker from "./Datepicker";

describe("Component: Datepicker -", () => {
    it("is defined", () => {
        expect(Datepicker).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Datepicker />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("data-datepicker");
    });

    it("renders with the form-group and label", () => {
        const wrapper = shallow(<Datepicker label="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("form-group");
        expect(wrapper.html()).toContain("<label>test</label>");
    });
});
