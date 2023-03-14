import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Datepicker from "./Datepicker";

describe("Component: Datepicker -", () => {
    it("is defined", () => {
        expect(Datepicker).toBeDefined();
    });

    it("renders", () => {
        render(<Datepicker />);

        expect(screen.getByRole("textbox")).toHaveAttribute("data-datepicker");

        const componentForSnap = renderer.create(<Datepicker />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with the form-group and label", () => {
        const { container } = render(<Datepicker label="test" />);

        expect(container.querySelector(".form-group")).toBeTruthy();
        expect(container.querySelector("label")).toHaveTextContent("test");
        // FIXME: once we migrate to React 18, use `useId()` hook in Datepicker component, to always set an id link between label and input, evemn if no id is passed as prop
        // expect(screen.getByLabelText("test")).toBeTruthy();

        const componentForSnap = renderer.create(<Datepicker label="test" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
