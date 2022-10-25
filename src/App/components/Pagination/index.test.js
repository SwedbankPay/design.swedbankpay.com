import React from "react";
import { mount, shallow } from "enzyme";

import Pagination from "./index";

describe("Component: Pagination -", () => {

    it("is defined", () => {
        expect(Pagination).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Pagination length={10} currentActive={1} id="test" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("throws error if initialized without id prop", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Pagination length={10} currentActive={1}/>);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("does not throw error if initialized with id prop", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Pagination length={10} currentActive={1} id="does-not-throw-error"/>);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).not.toHaveBeenCalled();
    });

    it("renders with an li with active class", () => {
        const wrapper = shallow(<Pagination length={10} currentActive={4} id="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists(".active")).toEqual(true);

        expect(wrapper.find(".active")).toHaveLength(1);

    });

    it("receives correct properties", () => {
        const wrapper = mount(<Pagination length={10} currentActive={5} id="test" />);

        expect(wrapper.prop("length")).toEqual(10);
        expect(wrapper.prop("currentActive")).toEqual(5);
        expect(wrapper.prop("id")).toEqual("test");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders only li elements inside ul element", () => {
        const wrapper = shallow(<Pagination length={10} currentActive={4} id="tets"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("ul").childAt(0)
            .type()).toEqual("li");
    });

    it("renders with correct number of list elements. It should always be 7 (max number of places)", () => {
        const wrapper = shallow(<Pagination length={8} currentActive={2} id={"test-pagination"}/>);
        const wrapper2 = shallow(<Pagination length={100} currentActive={2} id={"test-pagination2"}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper2).toMatchSnapshot();
        expect(wrapper.find("li").length).toBe(7);
        expect(wrapper2.find("li").length).toBe(7);
    });

    it("renders four arrows", () => {
        const wrapper = shallow(<Pagination length={8} currentActive={2} id={"test-pagination"}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("Arrow").length).toBe(4);
    });

    it("renders with one ellipsis", () => {
        const wrapper = shallow(<Pagination length={10} currentActive={2} id={"test-pagination"}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("span").length).toBe(2);
    });

    it("renders with two ellipsis", () => {
        const wrapper = shallow(<Pagination length={10} currentActive={5} id={"test-pagination"}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("span").length).toBe(3);
    });

    // TODO:
    it("renders the compact view with the compact class", () => {
        const wrapper = mount(<Pagination length={10} currentActive={5} id={"test-pagination"} compact={true} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".pagination.compact-layout").length).toBe(1);
        expect(wrapper.find("ul").length).toBe(0);
        expect(wrapper.find("span.compact").length).toBe(1);
        expect(wrapper.find("button.arrow-start").length).toBe(1);
        expect(wrapper.find("button.arrow-start.d-sm-none").length).toBe(0);
        expect(wrapper.find("button.arrow-end").length).toBe(1);
        expect(wrapper.find("button.arrow-end.d-sm-none").length).toBe(0);
    });

    // TODO:
    it("renders the default view as long view", () => {
        const wrapper = mount(<Pagination length={10} currentActive={5} id={"test-pagination"}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".pagination.compact-layout").length).toBe(0);
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("span.mobile").length).toBe(1);
        expect(wrapper.find("button.arrow-start.d-sm-none").length).toBe(1);
        expect(wrapper.find("button.arrow-end.d-sm-none").length).toBe(1);
    });
});
