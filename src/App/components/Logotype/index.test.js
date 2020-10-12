import React from "react";
import { shallow } from "enzyme";

import Logotype from "./index";

describe("Component: Logotype", () => {
    it("is defined", () => {
        expect(Logotype).toBeDefined();
    });

    it("throws an error if src is not defined", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Logotype type="vertical" />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("throws an error if type is not defined", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Logotype src="/test/test.img" />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders image with class vertical and sm when no size is provided and type='vertical' is provided", () => {
        const wrapper = shallow(<Logotype src="/test/test.img" type="vertical" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.hasClass("logotype-vertical logotype-sm")).toBeTruthy();
    });

    it("renders image with class horizontal and md when size='md' and type='vertical' is provided", () => {
        const wrapper = shallow(<Logotype src="/test/test.img" type="horizontal" size="md" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.hasClass("logotype-horizontal logotype-md")).toBeTruthy();
    });
});

