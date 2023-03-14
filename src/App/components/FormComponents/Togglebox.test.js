import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Togglebox from "./Togglebox";

describe("Component: Togglebox -", () => {
    it("is defined", () => {
        expect(Togglebox).toBeDefined();
    });

    it("renders without label", () => {
        const { container } = render(<Togglebox />);

        expect(screen.getByRole("checkbox").parentElement).toHaveClass("togglebox");
        expect(container.querySelector("label")).toBeNull();

        const componentForSnap = renderer.create(<Togglebox />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with id and label", () => {
        const { container } = render(<Togglebox id="test-id" label="test label" />);

        expect(screen.getByRole("checkbox").parentElement).toHaveClass("togglebox");
        expect(screen.getByLabelText("test label").parentElement).toHaveClass("togglebox");
        expect(screen.getByRole("checkbox")).toHaveAttribute("id", "test-id");
        expect(container.querySelector("label")).toHaveAttribute("for", "test-id");

        const componentForSnap = renderer.create(<Togglebox id="test" label="test" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders disabled", () => {
        render(<Togglebox disabled />);

        expect(screen.getByRole("checkbox").parentElement).toHaveClass("togglebox");
        expect(screen.getByRole("checkbox")).toBeDisabled();

        const componentForSnap = renderer.create(<Togglebox disabled />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders checked", () => {
        render(<Togglebox checked />);

        expect(screen.getByRole("checkbox").parentElement).toHaveClass("togglebox");
        expect(screen.getByRole("checkbox")).toBeChecked();

        const componentForSnap = renderer.create(<Togglebox checked />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
