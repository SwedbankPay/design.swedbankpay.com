import React from "react";
import { shallow, mount } from "enzyme";

import SearchBox, { modify } from "./index";

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

    it("does not render with className prop", () => {
        const wrapper = shallow(<SearchBox className="test" />);

        expect(wrapper.html()).not.toContain("search-container test");

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

    it("does not render the result box before manipulating the search field", () => {

        expect(wrapper.contains("item-list")).toBeFalsy();
        expect(wrapper).toMatchSnapshot();
    });

    it("button icon changes from search to close after input field manipulation", () => {
        const input = wrapper.find("#search-box");

        expect(input.length).toBe(1);

        expect(wrapper.html()).toContain("search-box");
        expect(wrapper.html()).toContain("<i class=\"material-icons\">search</i></button>");

        input.simulate("change", { target: { value: "test" } });

        expect(wrapper.html()).toContain("<i class=\"material-icons\">close</i></button>");
        expect(wrapper).toMatchSnapshot();
    });

    describe("Testing components methods directly", () => {
        const result = "test";

        it("modify method gives <b> tags around parts of searchterm if searchterm is in beginning of result", () => {

            const searchTerm = "tes";

            expect(modify(result, searchTerm)).toBe("<b>tes</b>t");
            expect(wrapper).toMatchSnapshot();
        });

        it("modify method gives <b> tags around parts of searchterm if searchterm is in the end of result", () => {

            const searchTerm = "st";

            expect(modify(result, searchTerm)).toBe("te<b>st</b>");
            expect(wrapper).toMatchSnapshot();
        });

        it("modify method returns result if searchterm does not match result and no <b> tags", () => {

            const searchTerm = "foo";

            expect(modify(result, searchTerm)).toBe("test");
            expect(wrapper).toMatchSnapshot();
        });
    });

});
