import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ActionLink, { ActionLinkContent } from "./index";

describe("Component: ActionLink", () => {
    it("is defined", () => {
        expect(ActionLink).toBeDefined();
    });

    it("prop linkText is marked as required", () => {
        console.error = jest.fn();

        render(<ActionLink />);

        expect(console.error).toHaveBeenCalled();

        const actionLinkElmt = renderer.create(<ActionLink />).toJSON();

        expect(actionLinkElmt).toMatchSnapshot();
    });

    it("renders ActionLink with .action-link class only when not newTab", () => {
        render(<ActionLink linkText="Link text" />);

        expect(screen.getByRole("link")).toHaveClass("action-link");
        expect(screen.getByRole("link")).not.toHaveAttribute("target", "_blank");

        const actionLinkElmt = renderer.create(<ActionLink />).toJSON();

        expect(actionLinkElmt).toMatchSnapshot();
    });

    it("renders ActionLink with .action-link-new-tab class when newTab is true", () => {
        render(<ActionLink linkText="Link text" newTab={true}/>);

        expect(screen.getByRole("link")).toHaveClass("action-link-new-tab");
        expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");

        const actionLinkElmt = renderer.create(<ActionLink linkText="Link text" newTab={true} />).toJSON();

        expect(actionLinkElmt).toMatchSnapshot();
    });

    describe("ActionLinkContent", () => {
        it("is defined", () => {
            expect(ActionLinkContent).toBeDefined();
        });

        it("renders ActionLinkContent with link text", () => {

            render(<ActionLinkContent linkText="Link text"/>);

            expect(screen.getByText("Link text")).toBeTruthy();

            const actionLinkContentElmt = renderer.create(<ActionLinkContent linkText="Link text" />).toJSON();

            expect(actionLinkContentElmt).toMatchSnapshot();
        });

        it("renders ActionLinkContent with badge if badge is provided", () => {
            const mockBadge = {
                type: "badge-default",
                text: "Badge"
            };

            render(<ActionLinkContent linkText="Link text" badge={mockBadge}/>);

            expect(screen.getByText("Badge")).toHaveClass("badge badge-default");

            const actionLinkContentElmt = renderer.create(<ActionLinkContent linkText="Link text" badge={mockBadge} />).toJSON();

            expect(actionLinkContentElmt).toMatchSnapshot();
        });

        it("renders ActionLinkContent without badge if badge is not provided", () => {
            render(<ActionLinkContent linkText="Link text" />);

            expect(screen.queryByText("Badge")).toBeFalsy();

            const actionLinkContentElmt = renderer.create(<ActionLinkContent linkText="Link text" />).toJSON();

            expect(actionLinkContentElmt).toMatchSnapshot();
        });

        it("renders ActionLinkContent without smalltext when not provided", () => {
            const { container } = render(<ActionLinkContent linkText="Link text" />);

            expect(container.getElementsByClassName("small-text").length).toBeFalsy();
        });

        it("renders ActionLinkContent with smalltext on multiline when multiline and smalltext is provided", () => {
            const { container } = render(<ActionLinkContent linkText="Link text" smallText="Small text" multiline={true} />);

            expect(container.getElementsByClassName("action-link-multiline").length).toBeTruthy();
            expect(screen.getByText("Small text")).toBeTruthy();

            const actionLinkContentElmt = renderer.create(<ActionLinkContent linkText="Link text" smallText="Small text" multiline={true} />).toJSON();

            expect(actionLinkContentElmt).toMatchSnapshot();
        });
    });
});
