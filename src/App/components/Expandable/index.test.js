import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Expandable, { ExpandablePlaceholder } from "./index";

const items = [
    {
        title: "Foo",
        content: "My accordion content"
    },
    {
        title: "Bar",
        content: "My accordion content"
    },
    {
        title: "Baz",
        content: "My accordion content"
    }
];

describe("Component: Expandable", () => {
    it("is defined", () => {
        expect(Expandable).toBeDefined();
    });

    it("returns an expandable component when no items are provided", () => {
        const { container } = render(<Expandable />);

        expect(screen.getByRole("button")).toHaveClass("expandable-header");
        expect(screen.getByRole("button")).toHaveTextContent("Placeholder title");
        expect(container.querySelector(".expandable > .expandable-body")).toHaveTextContent("Placeholder text");

        const componentForSnap = renderer.create(<Expandable />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("returns a number of expandables matching the length of items", () => {
        const { container } = render(<Expandable items={items}/>);

        const expandables = container.querySelectorAll(".expandable");

        expect(expandables.length).toBe(items.length);

        const componentForSnap = renderer.create(<Expandable items={items}/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("prints a default expandable component when items is provided but is invalid", () => {
        const { container } = render(<Expandable items="wrong" />);

        expect(screen.getByRole("button")).toHaveTextContent("Placeholder title");
        expect(container.querySelector(".expandable > .expandable-body")).toHaveTextContent("Placeholder text");

        const componentForSnap = renderer.create(<Expandable items="wrong" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    describe("ExpandablePlaceholder", () => {
        it("renders", () => {
            render(<ExpandablePlaceholder />);

            const componentForSnap = renderer.create(<ExpandablePlaceholder />);

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });
});
