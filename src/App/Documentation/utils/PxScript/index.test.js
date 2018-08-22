import React from "react";
import { shallow } from "enzyme";
import "prismjs";

import PxScript from "./index";

describe("Utilities: PxScript", () => {
    it("is defined", () => {
        expect(PxScript).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <PxScript component="test" func="init" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>test</span>)).toEqual(true);
        expect(wrapper.contains(<span className="token function">init</span>)).toEqual(true);
    });

    it("renders with subcomponents", () => {
        const wrapper = shallow(
            <PxScript component="test" func="init" subComponents={["subTest"]} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>test</span>)).toEqual(true);
        expect(wrapper.contains(<span className="token function">init</span>)).toEqual(true);
        expect(wrapper.contains(<span>subTest<span className="token punctuation">.</span></span>)).toEqual(true);
    });

    it("renders with multiple subcomponents", () => {
        const wrapper = shallow(
            <PxScript component="test" func="init" subComponents={["subTest", "subTest2"]} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>test</span>)).toEqual(true);
        expect(wrapper.contains(<span className="token function">init</span>)).toEqual(true);
        expect(wrapper.contains(<span>subTest<span className="token punctuation">.</span></span>)).toEqual(true);
        expect(wrapper.contains(<span>subTest2<span className="token punctuation">.</span></span>)).toEqual(true);
    });

    it("renders with params", () => {
        const wrapper = shallow(
            <PxScript component="test" func="init" params={["param1"]} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>test</span>)).toEqual(true);
        expect(wrapper.contains(<span className="token function">init</span>)).toEqual(true);
        expect(wrapper.contains(<span>param1</span>)).toEqual(true);
    });

    it("renders with multiple params", () => {
        const wrapper = shallow(
            <PxScript component="test" func="init" params={["param1", "param2"]} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>test</span>)).toEqual(true);
        expect(wrapper.contains(<span className="token function">init</span>)).toEqual(true);
        expect(wrapper.contains(<span>param1<span className="token punctuation">, </span></span>)).toEqual(true);
        expect(wrapper.contains(<span>param2</span>)).toEqual(true);
    });
});

