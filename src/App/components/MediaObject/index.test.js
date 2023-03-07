import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MediaObject from "./index";

describe("Component: MediaObject -", () => {
    it("is defined", () => {
        expect(MediaObject).toBeDefined();
    });

    it("throws an error if heading is not defined", () => {
        console.error = jest.fn();

        const componentForSnap = renderer.create(<MediaObject />);

        expect(console.error).toHaveBeenCalled();

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders", () => {
        render(<MediaObject heading="render-test"/>);

        const componentForSnap = renderer.create(<MediaObject heading="render-test"/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders an icon", () => {
        const { container } = render(<MediaObject heading="render-test" icon="home" />);

        expect(container.querySelectorAll("i")).toHaveLength(1);

        const componentForSnap = renderer.create(<MediaObject heading="render-test" icon="home" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders an image", () => {
        render(<MediaObject heading="render-test" imgUrl="https://via.placeholder.com/48x48" />);

        expect(screen.getByRole("img")).toBeInTheDocument();

        const componentForSnap = renderer.create(<MediaObject heading="render-test" imgUrl="https://via.placeholder.com/48x48" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders MediaObject with class media-right", () => {
        render(<MediaObject heading="render-test" imgUrl="https://via.placeholder.com/48x48" mediaRight />);

        expect(screen.getByRole("img").parentElement.parentElement).toHaveClass("media-right");

        const componentForSnap = renderer.create(<MediaObject heading="render-test" imgUrl="https://via.placeholder.com/48x48" mediaRight />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a <small> text", () => {
        const { container } = render(<MediaObject heading="render-test" textSmall text="small text" />);

        expect(container.querySelectorAll("small")).toHaveLength(1);
        expect(container.querySelector("small")).toHaveTextContent("small text");

        const componentForSnap = renderer.create(<MediaObject heading="render-test" textSmall text="small text" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders a muted MediaObject", () => {
        const { container } = render(<MediaObject heading="render-test" icon="home" muted />);

        const mediaHeader = screen.getByRole("heading");

        expect(mediaHeader.tagName).toBe("H3");
        expect(mediaHeader).toHaveClass("text-muted");
        expect(container.querySelector("i")).toHaveClass("text-muted");

        const componentForSnap = renderer.create(<MediaObject heading="render-test" icon="home" muted />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders MediaObject with class media-sm", () => {
        const { container } = render(<MediaObject heading="render-test" size="sm" />);

        expect(screen.getByRole("heading").tagName).toBe("H4");
        expect(container.querySelector("div")).toHaveClass("media-sm");

        const componentForSnap = renderer.create(<MediaObject heading="render-test" size="sm" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders MediaObject with class media-lg", () => {
        const { container } = render(<MediaObject heading="render-test" size="lg" />);

        expect(screen.getByRole("heading").tagName).toBe("H2");
        expect(container.querySelector("div")).toHaveClass("media-lg");

        const componentForSnap = renderer.create(<MediaObject heading="render-test" size="lg" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
