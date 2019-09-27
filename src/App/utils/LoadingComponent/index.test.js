import React from "react";
import { shallow } from "enzyme";

import LoadingComponent from "./index";

describe("App utils: LoadingComponent", () => {
    it("is defined", () => {
        expect(LoadingComponent).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<LoadingComponent />);

        expect(wrapper).toMatchSnapshot();
    });
});
