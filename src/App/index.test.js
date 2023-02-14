import React from "react";
import { shallow } from "enzyme";

import App, { VersionTopBanner } from "./index";

describe("Main: App", () => {
    it("is defined", () => {
        expect(App).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });
});

describe("VersionTopBanner:", () => {
    it("is defined", () => {
        expect(VersionTopBanner).toBeDefined();
    });
});
