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

    it("renders with class tag-primary when primary is provided as type", () => {
        const wrapper = shallow(<CodeTags type="primary" text="test"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="tag tag-primary">test</span>)).toBeTruthy();
    });

    it("renders with class removable when removable is provided and renders a button", () => {
        const wrapper = shallow(<CodeTags type="primary" text="test" removable/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="tag tag-primary removable">test<button type="button" className="close-button"><i className="material-icons m-auto" aria-label="remove tag">close</i></button></span>)).toBeTruthy();
    });
});
