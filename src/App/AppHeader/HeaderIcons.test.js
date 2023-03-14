import React from "react";
import renderer from "react-test-renderer";

import { GithubLogo, SlackLogo } from "./HeaderIcons";

describe("AppHeader: HeaderIcons", () => {
    describe("GithubLogo", () => {
        it("is defined", () => {
            expect(GithubLogo).toBeDefined();
        });

        it("renders as expected", () => {
            const tree = renderer.create(<GithubLogo />).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });

    describe("SlackLogo", () => {
        it("is defined", () => {
            expect(SlackLogo).toBeDefined();
        });

        it("renders as expected", () => {
            const tree = renderer.create(<SlackLogo />).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});
