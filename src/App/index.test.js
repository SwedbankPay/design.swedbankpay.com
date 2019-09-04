import React from "react";
import { shallow } from "enzyme";

import App from "./index";

const { topbar } = window.dg;

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
