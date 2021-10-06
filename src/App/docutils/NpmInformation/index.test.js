import React from "react";
import { shallow } from "enzyme";

import NpmInformation from "./index";

describe("Utilities: NpmInformation", () => {
    it("is defined", () => {
        expect(NpmInformation).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<NpmInformation/>);

        expect(wrapper).toMatchSnapshot();
    });
});
