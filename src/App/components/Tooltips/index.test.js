import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Tooltip from "./index";

const text = "test text";
const icon = "edit";
const title = "test title";
const top = "top";
const bottom = "bottom";
const left = "left";
const right = "right";

describe("Component: Tooltip -", () => {
    it("is defined", () => {
        expect(Tooltip).toBeDefined();
    });

    it("renders", () => {
        const componentForSnap = renderer.create(<Tooltip text={text} icon={icon} title={title}/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("prop type is marked as defined", () => {
        console.error = jest.fn();

        const componentForSnap = renderer.create(<Tooltip />);

        expect(console.error).toHaveBeenCalled();
        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with icon if icon is provided", () => {
        render(<Tooltip icon={icon} text={text}/>);

        expect(screen.getByRole("button").querySelector("i")).toHaveClass("material-icons-outlined m-0");
        expect(screen.getByRole("button").querySelector("i")).toHaveTextContent("edit");

        const componentForSnap = renderer.create(<Tooltip icon={icon} text={text}/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with title text if provided", () => {
        render(<Tooltip title={title} text={text}/>);

        expect(screen.getByRole("tooltip")).toHaveTextContent("test text");

        const componentForSnap = renderer.create(<Tooltip title={title} text={text}/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders div with class tooltip", () => {
        render(<Tooltip text={text}/>);

        expect(screen.getByRole("button")).toHaveClass("tooltip");

        const componentForSnap = renderer.create(<Tooltip text={text}/>);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with tooltip position right", () => {
        render(<Tooltip text={text} position={right} />);

        expect(screen.getByRole("button")).toHaveClass("tooltip btn btn-secondary tooltip-right");

        const componentForSnap = renderer.create(<Tooltip text={text} position={right} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with tooltip position left", () => {
        render(<Tooltip text={text} position={left} />);

        expect(screen.getByRole("button")).toHaveClass("tooltip btn btn-secondary tooltip-left");

        const componentForSnap = renderer.create(<Tooltip text={text} position={left} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with tooltip position top", () => {
        render(<Tooltip text={text} position={top} />);

        expect(screen.getByRole("button")).toHaveClass("tooltip btn btn-secondary tooltip-top");

        const componentForSnap = renderer.create(<Tooltip text={text} position={top} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with tooltip position bottom", () => {
        render(<Tooltip text={text} position={bottom} />);
        expect(screen.getByRole("button")).toHaveClass("tooltip btn btn-secondary tooltip-bottom");

        const componentForSnap = renderer.create(<Tooltip text={text} position={bottom} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });
});
