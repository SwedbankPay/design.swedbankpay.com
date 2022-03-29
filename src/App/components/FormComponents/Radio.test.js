import React from "react";
import { shallow } from "enzyme";

import Radio from "./Radio";

describe("Component: Radio -", () => {
    it("is defined", () => {
        expect(Radio).toBeDefined();
    });

    it("renders without label", () => {
        const wrapper = shallow(<Radio />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("radio");
        expect(wrapper.html()).not.toContain("label");
    });

    it("renders with id and label", () => {
        const wrapper = shallow(<Radio id="test" label="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("radio");
        expect(wrapper.html()).toContain("id=\"test\"");
        expect(wrapper.html()).toContain("label");
        expect(wrapper.html()).toContain("for=\"test\"");
    });

    it("renders with name", () => {
        const wrapper = shallow(<Radio name="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("radio");
        expect(wrapper.html()).toContain("name=\"test\"");
    });

    it("renders disabled", () => {
        const wrapper = shallow(<Radio disabled />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("radio");
        expect(wrapper.html()).toContain("disabled");
    });

    it("renders checked", () => {
        const wrapper = shallow(<Radio checked />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("radio");
        expect(wrapper.html()).toContain("checked");
    });

    it("renders radio group", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Radio label"
            },
            {
                id: "radio-example-2",
                label: "Radio label"
            }
        ];
        const wrapper = shallow(<Radio group options={options}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("radio");
        expect(wrapper.html()).toContain("radio-group");
    });

    it("renders checkbox group with groupTitle", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Radio label"
            },
            {
                id: "radio-example-2",
                label: "Radio label"
            }
        ];

        const wrapper = shallow(<Radio group groupTitle="Group title" options={options} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("label class=\"radio-label\"");
    });

    it("renders checkbox group with disabled state", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Radio label"
            },
            {
                id: "radio-example-2",
                label: "Radio label"
            }
        ];

        const wrapper = shallow(<Radio group disabled options={options} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("disabled");
    });
});
