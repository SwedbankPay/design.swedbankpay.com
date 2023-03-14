import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Steps from "./index";

describe("Component: Steps", () => {
    const steps = [
        {
            title: "Step one",
            completed: true,
            clickable: true
        },
        {
            title: "Step two",
            ongoing: true,
            clickable: true
        },
        {
            title: "Step three",
            clickable: true
        },
        {
            title: "Step four",
            selected: true
        },
        {
            title: "Step Five"
        },
        {
            title: "Step Six"
        }
    ];

    const simpleSteps = [
        {
            title: "one step"
        },
        {
            title: "two steps"
        },
        {
            title: "three steps for testing"
        }
    ];

    it("is defined", () => {
        expect(Steps).toBeDefined();
    });

    it("renders with default items if no props are provided", () => {
        const { container } = render(<Steps />);

        expect(container.querySelector("div")).toHaveClass("steps");

        const componentForSnap = renderer.create(<Steps />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with given items if prop Steps is given", () => {
        render(<Steps steps={simpleSteps} />);

        expect(screen.getAllByRole("listitem").some(elmt => elmt.textContent.includes("three steps for testing"))).toBeTruthy();

        const componentForSnap = renderer.create(<Steps steps={simpleSteps} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders in vertical mode if prop vertical is provided", () => {
        const { container } = render(<Steps vertical />);

        expect(container.querySelector("div")).toHaveClass("steps-vertical");

        const componentForSnap = renderer.create(<Steps vertical />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    // FIXME: anchor tags cannot be selected because they have no href, and are therefore not considered as link. But they're not button either. What are they then? Semantically (and therefore A11y wise) it can be improved)
    it("renders clickable Steps", () => {
        render(<Steps steps={steps} />);

        expect(screen.getByRole("list").querySelectorAll("a").length).toBeGreaterThan(0);

        const componentForSnap = renderer.create(<Steps steps={steps} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
