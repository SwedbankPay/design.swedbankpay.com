import React from "react";
import renderer from "react-test-renderer";

import Component, { MenuOverview } from "./index";

describe("Components: Components", () => {
    it("is defined", () => {
        expect(Component).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<Component />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("MenuOverview", () => {
        it("is defined", () => {
            expect(MenuOverview).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<MenuOverview />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
