import React from "react";
import { shallow } from "enzyme";

import Checkbox from "./Checkbox";

describe("Component: Checkbox -", () => {
    it("is defined", () => {
        expect(Checkbox).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Checkbox />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
    });

    it("renders with the specified id", () => {
        const wrapper = shallow(<Checkbox id="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.html()).toContain("id=\"test\"");
    });

    it("renders with the specified id and label", () => {
        const wrapper = shallow(<Checkbox id="test" label="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.html()).toContain("id=\"test\"");
        expect(wrapper.html()).toContain("label");
        expect(wrapper.html()).toContain("for=\"test\"");
    });

    it("renders with the disabled attribute", () => {
        const wrapper = shallow(<Checkbox disabled />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.html()).toContain("disabled");
    });

    it("renders with the checked attribute", () => {
        const wrapper = shallow(<Checkbox checked />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox");
        expect(wrapper.html()).toContain("checked");
    });

    it("renders checkbox group", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Checkbox label"
            },
            {
                id: "radio-example-2",
                label: "Checkbox label"
            },
            {
                id: "radio-example-3",
                label: "Checkbox label"
            }
        ];

        const wrapper = shallow(<Checkbox group options={options} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("checkbox-group");
    });

    it("renders checkbox group with groupTitle", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Checkbox label"
            },
            {
                id: "radio-example-2",
                label: "Checkbox label"
            },
            {
                id: "radio-example-3",
                label: "Checkbox label"
            }
        ];

        const wrapper = shallow(<Checkbox group groupTitle="Group title" options={options} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("label class=\"checkbox-label\"");
    });

    it("renders checkbox group with error", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Checkbox label"
            },
            {
                id: "radio-example-2",
                label: "Checkbox label"
            },
            {
                id: "radio-example-3",
                label: "Checkbox label"
            }
        ];

        const wrapper = shallow(<Checkbox group errorMessage="error" options={options} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("help-block");
    });

    it("renders checkbox group with disabled state", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Checkbox label"
            },
            {
                id: "radio-example-2",
                label: "Checkbox label"
            },
            {
                id: "radio-example-3",
                label: "Checkbox label"
            }
        ];

        const wrapper = shallow(<Checkbox group disabled options={options} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("disabled");
    });
});
