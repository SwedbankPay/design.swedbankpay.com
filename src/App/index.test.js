import React from "react";
import { shallow } from "enzyme";

import App from "./index";

import { topbar } from "@src/scripts/main";

describe("Main: App", () => {
    it("is defined", () => {
        expect(App).toBeDefined();
    });

    it("renders", () => {
        topbar.init = jest.fn();

        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
        expect(topbar.init).toHaveBeenCalled();
    });
});
