import React from "react";
import { shallow } from "enzyme";

import CodeTags, { Overview } from "./index";

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
});
