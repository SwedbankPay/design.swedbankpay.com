import React from "react";
import renderer from "react-test-renderer";

import SkipLink, { Overview, DeveloperDocumentation } from "./index";

describe("Documentation: SkipLink", () => {
    it("is defined", () => {
        expect(SkipLink).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<SkipLink />);

        expect(wrapper.toJSON()).toMatchSnapshot();
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

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<DeveloperDocumentation />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
