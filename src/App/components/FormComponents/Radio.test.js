import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Radio from "./Radio";

describe("Component: Radio -", () => {
    it("is defined", () => {
        expect(Radio).toBeDefined();
    });

    it("renders without label", () => {
        const { container } = render(<Radio />);

        expect(screen.getByRole("radio")).toBeTruthy();
        expect(container.querySelector("label")).toBeNull();

        const componentForSnap = renderer.create(<Radio />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with id and label", () => {
        const { container } = render(<Radio id="test-id" label="test label" />);

        expect(screen.getByRole("radio")).toHaveAttribute("id", "test-id");
        expect(screen.getByLabelText("test label")).toHaveAttribute("id", "test-id");
        expect(container.querySelector("label")).toHaveAttribute("for", "test-id");

        const componentForSnap = renderer.create(<Radio id="test" label="test" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with name", () => {
        render(<Radio name="test" />);

        expect(screen.getByRole("radio")).toHaveAttribute("name", "test");

        const componentForSnap = renderer.create(<Radio name="test" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders disabled", () => {
        render(<Radio disabled />);

        expect(screen.getByRole("radio")).toBeDisabled();

        const componentForSnap = renderer.create(<Radio disabled />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders checked", () => {
        render(<Radio checked />);

        expect(screen.getByRole("radio")).toBeChecked();

        const componentForSnap = renderer.create(<Radio checked />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders radio group", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Radio label"
            },
            {
                id: "radio-example-2",
                label: "Radio label"
            }
        ];

        render(<Radio group options={options}/>);

        expect(screen.getAllByRole("radio")).toHaveLength(2);
        expect(screen.getAllByRole("group")).toBeTruthy();

        const componentForSnap = renderer.create(<Radio group options={options}/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders checkbox group with groupTitle", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Radio label"
            },
            {
                id: "radio-example-2",
                label: "Radio label"
            }
        ];

        const { container } = render(<Radio group groupTitle="Group title" options={options} />);

        expect(container.querySelector("legend")).toBeTruthy();

        const componentForSnap = renderer.create(<Radio group groupTitle="Group title" options={options} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders checkbox group with disabled state", () => {
        const options = [
            {
                id: "radio-example-1",
                label: "Radio label"
            },
            {
                id: "radio-example-2",
                label: "Radio label"
            }
        ];

        render(<Radio group disabled options={options} />);

        expect(screen.getByRole("group")).toBeDisabled();

        const componentForSnap = renderer.create(<Radio group disabled options={options} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
