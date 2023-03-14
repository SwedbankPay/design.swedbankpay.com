import React from "react";
import renderer from "react-test-renderer";

import Footer, { Overview } from "./index.js";

describe("Component: footer", () => {
    it("is defined", () => {
        expect(Footer).toBeDefined();
    });

    it("renders", () => {
        const wrapper = renderer.create(<Footer />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Overview />);

            expect(wrapper.toJSON()).toBeDefined();
        });
    });
});
