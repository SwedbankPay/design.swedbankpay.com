import React from "react";
import { shallow } from "enzyme";

import Footer from "./index";

describe("Component: Footer -", () => {
    it("is defined", () => {
        expect(Footer).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper).toMatchSnapshot();
    });
});
