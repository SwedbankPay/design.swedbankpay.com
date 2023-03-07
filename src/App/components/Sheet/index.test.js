import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Sheet from "./index";

describe("Component: Sheet -", () => {
    it("is defined", () => {
        expect(Sheet).toBeDefined();
    });

    it("renders", () => {

        const componentForSnap = renderer.create(<Sheet title="Test" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with a close icon", () => {
        render(<Sheet title="test"/>);

        expect(screen.getByRole("button").querySelector("i")).toHaveClass("material-icons");
        expect(screen.getByRole("button").querySelector("i")).toHaveTextContent("close");

        const componentForSnap = renderer.create(<Sheet title="test"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with an ID", () => {
        const { container } = render(<Sheet title="Test" id="demo-sheet" />);

        expect(container.querySelector("div.sheet")).toHaveAttribute("id", "demo-sheet");

        const componentForSnap = renderer.create(<Sheet title="Test" id="demo-sheet" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with the data-require-action attribute", () => {
        const { container } = render(<Sheet title="Test" requireAction />);

        expect(container.querySelector("div.sheet")).toHaveAttribute("data-require-action");

        const componentForSnap = renderer.create(<Sheet title="Test" requireAction />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("does not render with data-require-action if it is set to false", () => {
        const { container } = render(<Sheet title="Test" requireAction={false} />);

        expect(container.querySelector("div.sheet")).not.toHaveAttribute("data-require-action");

        const componentForSnap = renderer.create(<Sheet title="Test" requireAction={false} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with children", () => {
        const { container } = render(<Sheet title="Test">Test</Sheet>);

        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Test");
        expect(container.querySelector(".sheet-content")).toHaveTextContent("Test");

        const componentForSnap = renderer.create(<Sheet title="Test">Test</Sheet>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
