import React from "react";
import { mount } from "enzyme";

import Rangeslider from "./Rangeslider";

describe("Component: Rangeslider -", () => {
    it("is defined", () => {
        expect(Rangeslider).toBeDefined();
    });

    it("renders without label", () => {
        const wrapper = mount(<Rangeslider />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="range" />)).toEqual(true);
        expect(wrapper.html()).not.toContain("value-label");
        expect(wrapper.html()).not.toContain("data-rs-value");
    });

    it("renders with a value label", () => {
        const wrapper = mount(<Rangeslider valueLabel />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="range" />)).toEqual(true);
        expect(wrapper.html()).toContain("value-label");
        expect(wrapper.html()).toContain("data-rs-value");
    });

    it("renders with a value label and a value label prefix", () => {
        const wrapper = mount(<Rangeslider valueLabel valueLabelPrefix="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="range" />)).toEqual(true);
        expect(wrapper.contains(<span>test</span>)).toEqual(true);
        expect(wrapper.html()).toContain("value-label");
    });

    it("renders with a value label and a value label postfix", () => {
        const wrapper = mount(<Rangeslider valueLabel valueLabelPostfix="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="range" />)).toEqual(true);
        expect(wrapper.contains(<span>test</span>)).toEqual(true);
        expect(wrapper.html()).toContain("value-label");
    });
});
