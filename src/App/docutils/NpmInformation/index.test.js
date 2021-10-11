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

    it("renders with componentName-prop", () => {
        const wrapper = shallow(<NpmInformation componentName="test"/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with noInit-prop", () => {
        const wrapper = shallow(<NpmInformation noInit/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with noInit- and componentName-prop", () => {
        const wrapper = shallow(<NpmInformation noInit componentName="test"/>);

        expect(wrapper).toMatchSnapshot();
    });
});
