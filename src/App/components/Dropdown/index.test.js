import React from "react";
import { shallow } from "enzyme";

import Dropdown from "./index";

describe("Component: Dropdown -", () => {
    it("is defined", () => {
        expect(Dropdown).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Dropdown title="Test" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders error state with the error icon and an error text", () => {
        const wrapper = shallow(<Dropdown errorMessage="test error message" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<div class=\"help-block\"><i class=\"material-icons\">error</i>test error message</div>");
    });

    it("renders, when passing no label nor icon props, a toggle button set as secondary button with a chevron icon", () => {
        const wrapper = shallow(<Dropdown/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain(`<button class="dropdown-toggle" type="button" aria-label="dropdown button">
<span>Default label</span>
<i class="material-icons" aria-hidden="true">keyboard_arrow_down</i>
</button>`
        );
    });

    it("renders the toggle button, when passing with specific label and custom icon props", () => {
        const wrapper = shallow(<Dropdown label="Filter" isIconButton={false} icon="filter_list" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain(`<button class="dropdown-toggle" type="button" aria-label="dropdown button">
<span>Filter</span>
<i class="material-icons" aria-hidden="true">filter_list</i>
</button>`
        );
    });

    describe("renders the toggle button with the icon being either before or after", () => {
        it("the icon is after the text", () => {
            const wrapper = shallow(<Dropdown label="Filter" isIconButton={false} icon="filter_list" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain(`
<span>Filter</span>
<i class="material-icons" aria-hidden="true">filter_list</i>
`
            );
        });
        it("the icon is before the text", () => {
            const wrapper = shallow(<Dropdown label="Filter" isIconButton={false} icon="filter_list" iconAfter={false} />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain(`
<i class="material-icons" aria-hidden="true">filter_list</i>
<span>Filter</span>
`
            );
        });
    });

    describe("the toggle icon btn with and without a passed icon", () => {

        it("renders the toggle btn as icon btn with no icon passed has a default of the three vertical dots icon", () => {
            const wrapper = shallow(<Dropdown label="Filter" isIconButton={true} />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<i class=\"material-icons\">more_vert</i>");
        });

        it("renders the toggle btn as icon btn with the icon passed as props", () => {
            const wrapper = shallow(<Dropdown label="Filter" isIconButton={true} icon="sort" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<i class=\"material-icons\">sort</i>");
        });

    });

    it("renders children components passed as content prop inside the menu list", () => {

        const checkboxListContent = <a href="#"><i className="material-icons" aria-hidden="true">bookmark</i>Edit</a>;
        const checkboxListContentStringExpected = `
<div class="dropdown-menu p-3" aria-labelledby="dropdownToggle">
<a href="#"><i class="material-icons" aria-hidden="true">bookmark</i>Edit</a></div></div></div>`;

        const wrapper = shallow(<Dropdown label="Sort" isIconButton={true} icon="sort" content={checkboxListContent} largePadding={true} />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toContain(checkboxListContentStringExpected);
    });
});