import React from "react";
import { shallow, mount } from "enzyme";

import SearchBox, { modify } from "./index";

import { BrowserRouter as Router } from "react-router-dom";

describe("Utilities; SearchBox", () => {
    it("is defined", () => {
        expect(SearchBox).toBeDefined();
    });

    it("renders with no props", () => {
        const wrapper = shallow(<SearchBox/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with mobile prop", () => {
        const wrapper = shallow(<SearchBox mobile/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with props mobile and className", () => {
        const wrapper = shallow(<SearchBox mobile className="test"/>);

        expect(wrapper.html()).toContain("search-container test");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders different buttons after click in mobile version", () => {
        const wrapper = shallow(<SearchBox mobile/>);
        const button = wrapper.find(".btn");

        expect(wrapper.html()).toContain("<button class=\"btn btn-primary btn-xs\" type=\"button\"><i class=\"material-icons\">search</i></button>");

        button.simulate("click");

        expect(wrapper.html()).toContain("<button class=\"btn btn-secondary btn-xs\"><i class=\"material-icons\">close</i></button>");

        expect(wrapper).toMatchSnapshot();
    });
});

describe("Manipulating input values for input field", () => {
    const wrapper = mount(<SearchBox/>);
    const input = wrapper.find("#search-box");

    it("button icon changes from search to close after input field manipulation", () => {
        expect(input.length).toBe(1);

        expect(wrapper.html()).toContain("search-box");
        expect(wrapper.html()).toContain("<i class=\"material-icons\">search</i></button>");

        input.simulate("change", { target: { value: "test" } });

        expect(wrapper.html()).toContain("<i class=\"material-icons\">close</i></button>");
        expect(wrapper).toMatchSnapshot();
    });

    it("result box is not visible before input is manipulated", () => {
        const resultBox = wrapper.find("#result-box");

        expect(resultBox.length).toBe(0);

        expect(wrapper).toMatchSnapshot();
    });

    it("result box is visible after input field change", () => {
        input.simulate("change", { target: { value: "" } });

        const resultBox = wrapper.find(".result-box");

        expect(resultBox.length).toBe(0);

        input.simulate("change", { target: { value: "test" } });

        const resultBoxAfter = wrapper.find(".result-box");

        expect(resultBoxAfter.length).toBe(1);

        expect(wrapper).toMatchSnapshot();
    });
});

describe("Search box results tests", () => {
    const wrapper = mount(<Router><SearchBox/></Router>);
    const input = wrapper.find("#search-box");

    it("renders no items if search term has no matches", () => {

        input.simulate("change", { target: { value: "xxxxx" } });

        const liElements = wrapper.find("li");

        expect(liElements.length).toBe(0);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders toggelbox after searcing for 'gg'", () => {

        input.simulate("change", { target: { value: "gg" } });

        const liElements = wrapper.find("li");

        expect(liElements.length).toBe(1);

        expect(wrapper.html()).toContain("<span class=\"result\">To<b>gg</b>lebox</span>");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders several li elements when search term is 'f", () => {
        input.simulate("change", { target: { value: "f" } });

        const liElements = wrapper.find("li");

        expect(liElements.length).toBe(4);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders more than 10 li elements when search term is 'i'", () => {
        input.simulate("change", { target: { value: "i" } });

        const liElements = wrapper.find("li");

        expect(liElements.length).toBeGreaterThan(10);
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Testing components modify method directly", () => {
    const result = "test";

    it("modify method gives <b> tags around parts of searchterm if searchterm is in beginning of result", () => {

        const searchTerm = "tes";

        expect(modify(result, searchTerm)).toBe("<b>tes</b>t");
    });

    it("modify method gives <b> tags around parts of searchterm if searchterm is in the end of result", () => {

        const searchTerm = "st";

        expect(modify(result, searchTerm)).toBe("te<b>st</b>");
    });

    it("modify method returns result if searchterm does not match result and no <b> tags", () => {

        const searchTerm = "foo";

        expect(modify(result, searchTerm)).toBe("test");
    });
});
