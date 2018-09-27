import React from "react";
import { shallow } from "enzyme";

import { GithubLogo, SlackLogo } from "./HeaderIcons";

describe("AppHeader: HeaderIcons", () => {
    describe("GithubLogo", () => {
        it("is defined", () => {
            expect(GithubLogo).toBeDefined();
        });

        it("renders as expected", () => {
            const wrapper = shallow(<GithubLogo />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlackLogo", () => {
        it("is defined", () => {
            expect(SlackLogo).toBeDefined();
        });

        it("renders as expected", () => {
            const wrapper = shallow(<SlackLogo />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
