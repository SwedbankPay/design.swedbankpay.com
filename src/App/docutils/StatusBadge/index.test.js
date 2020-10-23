import React from "react";
import { shallow } from "enzyme";

import StatusBadge from "./index";

describe("Utilities: StatusBadge", () => {
    it("is defined", () => {
        expect(StatusBadge).toBeDefined();
    });

    it("prints error if type is not provided", () => {
        console.error = jest.fn();

        const wrapper = shallow(<StatusBadge />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders new status badge when type is 'new'", () => {
        const wrapper = shallow(<StatusBadge type="new" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("status-badge-new");
    });

    it("renders updated status badge when type is 'updated'", () => {
        const wrapper = shallow(<StatusBadge type="updated" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("status-badge-updated");
    });

    it("renders remove status badge when type is 'remove'", () => {
        const wrapper = shallow(<StatusBadge type="remove" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("status-badge-remove");
    });

    it("renders javascript status badge when type is 'javascript'", () => {
        const wrapper = shallow(<StatusBadge type="javascript" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("status-badge-javascript");
    });
});
