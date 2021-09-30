import React from "react";
import { shallow } from "enzyme";

import Templates, { Overview } from "./index";

describe("Templates", () => {
    it("is defined", () => {
        expect(Templates).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Templates />);

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
