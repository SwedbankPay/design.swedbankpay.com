import React from "react";
import { shallow } from "enzyme";

import FormControlText from "./FormControlText";

describe("Component: FormControlText -", () => {
    it("is defined", () => {
        expect(FormControlText).toBeDefined();
    });

    it("prop text is required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<FormControlText />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
        expect(wrapper.contains(<span className="form-control-text"></span>)).toEqual(true);
    });

    it("renders without label", () => {
        const wrapper = shallow(<FormControlText text="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="form-control-text">test</span>)).toEqual(true);
        expect(wrapper.contains(<label></label>)).toEqual(false);
    });

    it("renders with label", () => {
        const wrapper = shallow(<FormControlText text="test" label="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="form-control-text">test</span>)).toEqual(true);
        expect(wrapper.contains(<label>test</label>)).toEqual(true);
    });
});
