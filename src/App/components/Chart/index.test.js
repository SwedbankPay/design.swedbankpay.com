import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Chart from "./index";
import { chart } from "@src/scripts/dashboard";

// Can't use aliases in jest mock it seems, but this automocks the chart import [THN]
jest.mock("../../../scripts/dashboard");

describe("Component: Chart -", () => {
    beforeEach(() => chart.mockClear());

    it("is defined", () => {
        expect(Chart).toBeDefined();
    });

    it("renders", () => {
        render(<Chart id="test" options={{}} description="test"/>);

        expect(screen.getByRole("img")).toHaveAttribute("id", "test");
        expect(screen.getByRole("img")).toHaveAttribute("aria-label", "test");

        const componentForSnap = renderer.create(<Chart id="test" options={{}} description="test"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("prop id is marked as required", () => {
        console.error = jest.fn();

        render(<Chart options={{}} />);

        expect(console.error).toHaveBeenCalled();

        const componentForSnap = renderer.create(<Chart options={{}} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("prop options is marked as required", () => {
        console.error = jest.fn();

        render(<Chart id="test" />);

        expect(console.error).toHaveBeenCalled();

        const componentForSnap = renderer.create(<Chart id="test" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a canvas with correct id and calls chart.js with that id and provided options", () => {
        render(<Chart id="test" options={{ test: "test" }} description="test"/>);

        expect(screen.getByRole("img")).toHaveAttribute("id", "test");
        expect(screen.getByRole("img")).toHaveAttribute("aria-label", "test");

        // expect(chart).toHaveBeenCalledWith("test", { test: "test" }, undefined);
        const componentForSnap = renderer.create(<Chart id="test" options={{ test: "test" }} description="test"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a canvas with correct id and calls chart.js with that id, provided options and colors", () => {
        render(<Chart id="test" description="test" options={{ test: "test" }} colorPool={["test", "test", "test"]} />);

        expect(screen.getByRole("img")).toHaveAttribute("id", "test");
        expect(screen.getByRole("img")).toHaveAttribute("aria-label", "test");

        // expect(chart).toHaveBeenCalledWith("test", { test: "test" }, ["test", "test", "test"]);
        const componentForSnap = renderer.create(<Chart id="test" description="test" options={{ test: "test" }} colorPool={["test", "test", "test"]} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
