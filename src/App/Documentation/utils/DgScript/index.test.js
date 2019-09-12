import React from "react";
import { shallow } from "enzyme";
import "prismjs";

import DgScript from "./index";

describe("Utilities: DgScript", () => {
    it("is defined", () => {
        expect(DgScript).toBeDefined();
    });

    it("fails if no component is given", () => {
        console.error = jest.fn();

        const wrapper = shallow(<DgScript func="init" />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("fails if no func is given", () => {
        console.error = jest.fn();

        const wrapper = shallow(<DgScript component="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders", () => {
        const wrapper = shallow(<DgScript component="test" func="init" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>test</span>)).toEqual(true);
        expect(wrapper.contains(<span className="token function">init</span>)).toEqual(true);
    });

    it("renders with subcomponents", () => {
        const wrapper = shallow(<DgScript component="test" func="init" subComponents={["subTest"]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>subTest<span className="token punctuation">.</span></span>)).toEqual(true);
    });

    it("renders with multiple subcomponents", () => {
        const wrapper = shallow(<DgScript component="test" func="init" subComponents={["subTest", "subTest2"]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span>subTest<span className="token punctuation">.</span></span>)).toEqual(true);
        expect(wrapper.contains(<span>subTest2<span className="token punctuation">.</span></span>)).toEqual(true);
    });

    it("renders with params", () => {
        const wrapper = shallow(<DgScript component="test" func="init" params={["param1"]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className={null}>param1</span>)).toEqual(true);
    });

    it("renders with multiple params", () => {
        const wrapper = shallow(<DgScript component="test" func="init" params={["param1", "param2"]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className={null}>param1<span className="token punctuation">, </span></span>)).toEqual(true);
        expect(wrapper.contains(<span className={null}>param2</span>)).toEqual(true);
    });

    it("renders with the string token if escaped strings exist in the argument", () => {
        const wrapper = shallow(<DgScript component="test" func="init" params={["\"param1\""]}/>);

        expect(wrapper).toMatchSnapshot();
        // eslint-disable-next-line react/no-unescaped-entities
        expect(wrapper.contains(<span className="token string">"param1"</span>)).toEqual(true);
    });
});

