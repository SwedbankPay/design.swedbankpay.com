import React from "react";
import { shallow } from "enzyme";

import App from "./index";

describe("Main: App", () => {
    it("is defined", () => {
        expect(App).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });
});
