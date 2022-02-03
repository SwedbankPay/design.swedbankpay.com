import React from "react";
import { shallow } from "enzyme";

import Tags, { Overview } from "./index";

describe("Documentation: CodeTags", () => {
    it("is defined", () => {
        expect(Tags).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Tags />);

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
