import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Cards from "./index";

describe("Component: Cards -", () => {
    it("is defined", () => {
        expect(Cards).toBeDefined();
    });

    it("throws an error if type does not match proptypes", () => {
        console.error = jest.fn();

        render(<Cards type="error" />);

        expect(console.error).toHaveBeenCalled();

        const componentForSnap = renderer.create(<Cards type="error" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with correct type", () => {
        render(<Cards type="secondary"/>);

        expect(screen.getByRole("link")).toHaveClass("cards-secondary");

        const componentForSnap = renderer.create(<Cards type="secondary"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a title", () => {
        render(<Cards type="secondary" titleTxt="Card title goes here"/>);

        expect(screen.getByRole("link").getElementsByClassName("h4").length).toBe(1);
        expect(screen.getByRole("link").querySelector(".h4")).toHaveTextContent("Card title goes here");

        const componentForSnap = renderer.create(<Cards type="secondary" titleTxt="Card title goes here"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders an image", () => {
        render(<Cards type="secondary" imgSrc="url.address" />);

        expect(screen.getByRole("img")).toHaveAttribute("src", "url.address");

        const componentForSnap = renderer.create(<Cards type="secondary" imgSrc="url.address" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders an icon when icon is provided", () => {
        render(<Cards type="secondary" icon={<>01</>} />);

        expect(screen.getByRole("link").getElementsByClassName("cards-icon").length).toBe(1);

        const componentForSnap = renderer.create(<Cards type="secondary" icon={<>01</>} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a text in card-body", () => {
        const { container } = render(<Cards type="secondary" text="Text that goes in card body" />);

        expect(container.querySelector(".cards-content")).toHaveTextContent("Text that goes in card body");

        const componentForSnap = renderer.create(<Cards type="secondary" text="Text that goes in card body" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a child object", () => {
        const { container } = render(<Cards>This is child text</Cards>);

        expect(container).toHaveTextContent("This is child text");

        const componentForSnap = renderer.create(<Cards>This is child text</Cards>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a wide card when wide is true", () => {
        render(<Cards type="secondary" wide/>);

        expect(screen.getByRole("link")).toHaveClass("cards-wide");

        const componentForSnap = renderer.create(<Cards type="secondary" wide/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
