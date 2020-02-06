import React from "react";
import { shallow } from "enzyme";

import CodeTags from "./index";

describe("Component: CodeTags", () => {
    it("is defined", () => {
        expect(CodeTags).toBeDefined();
    });

    it("renders with class code-tags-primary when primary is provided as type", () => {
        const wrapper = shallow(<CodeTags type="primary" code="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<code className="code-tags code-tags-primary">test</code>)).toBeTruthy();
    });

    it("renders with class code-tags-secondary when secondary is provided as type", () => {
        const wrapper = shallow(<CodeTags type="secondary" code="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<code className="code-tags code-tags-secondary">test</code>)).toBeTruthy();
    });

    it("prop type is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<CodeTags code="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("prop code is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<CodeTags type="primary" />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });
});
