import React from "react";
import { shallow } from "enzyme";

import Tables, { Overview } from "./index";

describe("Documentation: Tables", () => {
    it("is defined", () => {
        expect(Tables).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Tables/>);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview/>);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
