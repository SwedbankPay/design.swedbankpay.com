import React from "react";
import { shallow } from "enzyme";

import JavascriptDocs, { AboutInit } from "./index";

describe("GettingStarted: JavascriptDocs", () => {
    it("is defined", () => {
        expect(JavascriptDocs).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<JavascriptDocs />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("AboutInit", () => {
        it("is defined", () => {
            expect(AboutInit).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AboutInit />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});

