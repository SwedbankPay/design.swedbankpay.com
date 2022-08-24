import React from "react";
import { shallow } from "enzyme";

import Table from "./index";

const createTestTable = () => {
    const tableData = {
        thead: [
            { content: "#" },
            { content: "Name" },
            { content: "Status" }
        ],
        tbody: []
    };

    const array = ["McGregor", "Sean O'Malley", "Bisping", "Mike Perry"];
    const status = ["success", "danger", "neutral", "inactive"];

    array.map((name, i) => {
        tableData.tbody.push({ tr: [
            { content: i + 1,
                th: true },
            { content: name },
            { content: <span className={`status status-${status[i]}`}>{status[i].charAt(0).toUpperCase() + status[i].slice(1)}</span> }
        ] });
    });

    return tableData;
};

describe("Component: Table -", () => {
    it("is defined", () => {
        expect(Table).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Table tableData={createTestTable()} caption="Test" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with caption = Test", () => {
        const wrapper = shallow(<Table tableData={createTestTable()} caption="Test"/>);

        expect(wrapper.html()).toContain("<caption>Test</caption>");
    });

    it("renders with no class name plain, condensed, hover, divided or sortable when props are not included", () => {
        const wrapper = shallow(<Table tableData={createTestTable()} caption="Test"/>);
        const hasPlain = wrapper.hasClass("table-plain");
        const hasCondensed = wrapper.hasClass("table-condensed");
        const hasHover = wrapper.hasClass("table-hover");
        const hasDivided = wrapper.hasClass("table-divided");
        const hasSortable = wrapper.hasClass("sortable");

        expect(wrapper.hasClass("table")).toBeTruthy();
        expect(hasPlain).toBeFalsy();
        expect(hasCondensed).toBeFalsy();
        expect(hasHover).toBeFalsy();
        expect(hasDivided).toBeFalsy();
        expect(hasSortable).toBeFalsy();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name table-plain when plain prop is included", () => {
        const wrapper = shallow(<Table tableData={createTestTable()} caption="Test" plain/>);
        const hasPlain = wrapper.hasClass("table-plain");

        expect(wrapper.hasClass("table")).toBeTruthy();
        expect(hasPlain).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name table-condensed when condensed prop is included", () => {
        const wrapper = shallow(<Table tableData={createTestTable()} caption="Test" condensed/>);
        const hasPlain = wrapper.hasClass("table-condensed");

        expect(wrapper.hasClass("table")).toBeTruthy();
        expect(hasPlain).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name table-hover when hover prop is included", () => {
        const wrapper = shallow(<Table tableData={createTestTable()} caption="Test" hover/>);
        const hasPlain = wrapper.hasClass("table-hover");

        expect(wrapper.hasClass("table")).toBeTruthy();
        expect(hasPlain).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name table-divided when divided prop is included", () => {
        const wrapper = shallow(<Table tableData={createTestTable()} caption="Test" divided/>);
        const hasPlain = wrapper.hasClass("table-divided");

        expect(wrapper.hasClass("table")).toBeTruthy();
        expect(hasPlain).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name sortable when sortable prop is included", () => {
        const wrapper = shallow(<Table tableData={createTestTable()} caption="Test" sortable/>);
        const hasPlain = wrapper.hasClass("sortable");

        expect(wrapper.hasClass("table")).toBeTruthy();
        expect(hasPlain).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
});
