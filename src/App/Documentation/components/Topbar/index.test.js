import React from "react";
import { shallow } from "enzyme";

import Topbar, { Overview, FixedTopbar, JavascriptMethods } from "./index";

const { topbar } = window.px;

describe("Components: Topbar", () => {
    it("is defined", () => {
        expect(Topbar).toBeDefined();
    });

    it("renders", () => {
        /*
            The Topbar component calls px.topbar.init("demo-topbar") on componentDidMount. Mocking the topbarscript
            to avoid a warning message. [AW]
        */
        topbar.init = jest.fn();

        const wrapper = shallow(<Topbar />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FixedTopbar", () => {
        it("is defined", () => {
            expect(FixedTopbar).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FixedTopbar />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("JavascriptMethods", () => {
        it("is defined", () => {
            expect(JavascriptMethods).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<JavascriptMethods />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
