import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

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

        const componentForSnap = renderer.create(<Table tableData={createTestTable()} caption="Test" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with caption = Test", () => {
        render(<Table tableData={createTestTable()} caption="Test"/>);

        expect(screen.getByRole("table").querySelector("caption")).toHaveTextContent("Test");
    });

    it("renders with no class name plain, condensed, hover, divided or sortable when props are not included", () => {
        render(<Table tableData={createTestTable()} caption="Test"/>);

        expect(screen.getByRole("table")).not.toHaveClass("table-plain");
        expect(screen.getByRole("table")).not.toHaveClass("table-condensed");
        expect(screen.getByRole("table")).not.toHaveClass("table-hover");
        expect(screen.getByRole("table")).not.toHaveClass("table-divided");
        expect(screen.getByRole("table")).not.toHaveClass("sortable");
        expect(screen.getByRole("table")).toHaveClass("table");

        const componentForSnap = renderer.create(<Table tableData={createTestTable()} caption="Test"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with class name table-plain when plain prop is included", () => {
        render(<Table tableData={createTestTable()} caption="Test" plain/>);

        expect(screen.getByRole("table")).toHaveClass("table");
        expect(screen.getByRole("table")).toHaveClass("table-plain");

        const componentForSnap = renderer.create(<Table tableData={createTestTable()} caption="Test" plain/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with class name table-condensed when condensed prop is included", () => {
        render(<Table tableData={createTestTable()} caption="Test" condensed/>);

        expect(screen.getByRole("table")).toHaveClass("table");
        expect(screen.getByRole("table")).toHaveClass("table-condensed");

        const componentForSnap = renderer.create(<Table tableData={createTestTable()} caption="Test" condensed/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with class name table-hover when hover prop is included", () => {
        render(<Table tableData={createTestTable()} caption="Test" hover/>);

        expect(screen.getByRole("table")).toHaveClass("table");
        expect(screen.getByRole("table")).toHaveClass("table-hover");

        const componentForSnap = renderer.create(<Table tableData={createTestTable()} caption="Test" hover/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with class name table-divided when divided prop is included", () => {
        render(<Table tableData={createTestTable()} caption="Test" divided/>);

        expect(screen.getByRole("table")).toHaveClass("table");
        expect(screen.getByRole("table")).toHaveClass("table-divided");

        const componentForSnap = renderer.create(<Table tableData={createTestTable()} caption="Test" divided/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with class name sortable when sortable prop is included", () => {
        render(<Table tableData={createTestTable()} caption="Test" sortable/>);

        expect(screen.getByRole("table")).toHaveClass("table");
        expect(screen.getByRole("table")).toHaveClass("sortable");

        const componentForSnap = renderer.create(<Table tableData={createTestTable()} caption="Test" sortable/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
