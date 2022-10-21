import React from "react";
import { shallow } from "enzyme";

import CodeTags, { Overview, ContentGuidelines } from "./index";

describe("Documentation: CodeTags", () => {
    it("is defined", () => {
        expect(CodeTags).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<CodeTags />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ContentGuidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ContentGuidelines />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
