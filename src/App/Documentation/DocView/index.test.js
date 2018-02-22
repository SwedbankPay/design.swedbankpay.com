import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";

import DocView from "./index";

describe("DocView: index", () => {
    it("is defined", () => {
        expect(DocView).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <BrowserRouter>
                <DocView />
            </BrowserRouter>
        );

        expect(wrapper.html()).toContain("doc-view");
    });
});
