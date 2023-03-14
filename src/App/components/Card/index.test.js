import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "./index";

describe("Component: Card -", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it("throws an error if type does not match proptypes", () => {
        console.error = jest.fn();

        render(<Card type="error" />);

        expect(console.error).toHaveBeenCalled();

        const componentForSnap = renderer.create(<Card type="error" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with only body when no props are passed", () => {
        const { container } = render(<Card />);

        expect(screen.queryByRole("banner")).toBeNull();
        expect(container.querySelector(".card-img")).toBeFalsy();
        expect(container.querySelector(".card-body")).toBeTruthy();
        expect(screen.queryByRole("footer")).toBeNull();

        const componentForSnap = renderer.create(<Card />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with class name card", () => {
        const { container } = render(<Card />);

        expect(container.querySelector("div")).toHaveClass("card");

        const componentForSnap = renderer.create(<Card />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with correct class name", () => {
        const { container } = render(<Card type="brand"/>);

        expect(container.querySelector("div")).toHaveClass("card-brand");
        // FIXME:  why would they have it? delete ?
        expect(container.querySelector("div")).not.toHaveClass("card-default");
        expect(container.querySelector("div")).not.toHaveClass("card-light");

        const componentForSnap = renderer.create(<Card type="brand"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a title", () => {
        render(<Card titleTxt="Card title goes here"/>);

        expect(screen.getByRole("banner")).toBeInTheDocument();
        expect(screen.getByRole("heading")).toHaveTextContent("Card title goes here");

        const componentForSnap = renderer.create(<Card titleTxt="Card title goes here"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders an image", () => {
        const { container } = render(<Card imgSrc="url.address" />);

        expect(container.querySelector("card-img")).toBeNull();
        expect(screen.getByRole("img")).toHaveAttribute("src", "url.address");

        const componentForSnap = renderer.create(<Card imgSrc="url.address" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a text in card-body", () => {
        const { container } = render(<Card text="Text that goes in card body" />);

        expect(container.querySelectorAll("p")).toBeTruthy();
        expect(container.querySelectorAll("p")).toHaveLength(1);
        expect(container.querySelector("p")).toHaveTextContent("Text that goes in card body");

        const componentForSnap = renderer.create(<Card text="Text that goes in card body" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a child object", () => {
        const { container } = render(<Card>This is child text</Card>);

        expect(container.querySelector(".card-body")).toBeInTheDocument();
        expect(container.querySelector(".card-body")).toHaveTextContent("This is child text");

        const componentForSnap = renderer.create(<Card>This is child text</Card>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with a button", () => {
        render(<Card btn />);

        expect(screen.getByRole("button")).toBeTruthy();
        expect(screen.getAllByRole("button").length).toBe(1);

        const componentForSnap = renderer.create(<Card btn />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders footer text", () => {
        const { container } = render(<Card footerTxt="Footer information" />);

        expect(screen.getByRole("contentinfo")).toHaveClass("card-footer");
        expect(container.querySelectorAll(".card-footer").length).toBe(1);
        expect(screen.getByRole("contentinfo")).toHaveTextContent("Footer information");

        const componentForSnap = renderer.create(<Card footerTxt="Footer information" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders footer link text", () => {
        const { container } = render(<Card footerLinkTxt="Click this footer link" />);

        expect(container.querySelectorAll(".footer-link").length).toBe(1);
        expect(container.querySelector(".footer-link a")).toBeInTheDocument();
        expect(screen.getByRole("link")).toHaveTextContent("Click this footer link");

        const componentForSnap = renderer.create(<Card footerLinkTxt="Click this footer link" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
