import React from "react";
import { shallow } from "enzyme";

import Footer, { Overview } from "./index.js";

describe("Component: footer", () => {
    it("is defined", () => {
        expect(Footer).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toBeDefined();
        });
    });
});
