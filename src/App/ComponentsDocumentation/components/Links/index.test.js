import React from "react";
import renderer from "react-test-renderer";

import Links, {
    Overview,
    ActionLink,
    ContentGuidelines
} from "./index";

describe("Components: Links", () => {
    it("is defined", () => {
        expect(Links).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<Links />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("ActionLink", () => {
        it("is defined", () => {
            expect(ActionLink).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<ActionLink />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("ContentGuidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<ContentGuidelines />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Overview />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
