import React from "react";
import renderer from "react-test-renderer";

import CodeTags, { Overview, ContentGuidelines } from "./index";

describe("Documentation: CodeTags", () => {
    it("is defined", () => {
        expect(CodeTags).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<CodeTags />);

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

    describe("ContentGuidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<ContentGuidelines />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
