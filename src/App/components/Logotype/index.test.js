import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Logotype from "./index";

describe("Component: Logotype", () => {
    it("is defined", () => {
        expect(Logotype).toBeDefined();
    });

    it("throws an error if src is not defined", () => {
        console.error = jest.fn();

        const componentForSnap = renderer.create(<Logotype type="vertical" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("throws an error if type is not defined", () => {
        console.error = jest.fn();

        const componentForSnap = renderer.create(<Logotype src="/test/test.img" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders image with class vertical and sm when no size is provided and type='vertical' is provided", () => {
        render(<Logotype src="/test/test.img" type="vertical" />);

        expect(screen.getByRole("img")).toHaveClass("logotype-vertical logotype-sm");

        const componentForSnap = renderer.create(<Logotype src="/test/test.img" type="vertical" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders image with class horizontal and md when size='md' and type='vertical' is provided", () => {
        render(<Logotype src="/test/test.img" type="horizontal" size="md" />);

        expect(screen.getByRole("img")).toHaveClass("logotype-horizontal logotype-md");

        const componentForSnap = renderer.create(<Logotype src="/test/test.img" type="horizontal" size="md" />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});

