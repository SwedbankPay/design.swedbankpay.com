import React from "react";
import { shallow } from "enzyme";

import Topbar, { Overview, TopbarWide, JavascriptMethods } from "./index";

const { topbar } = window.dg;

describe("Components: Topbar", () => {
    it("is defined", () => {
        expect(Topbar).toBeDefined();
    });

    it("renders", () => {
        /*
            The Topbar component calls dg.topbar.init("demo-topbar") on componentDidMount. Mocking the topbarscript
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

    describe("TopbarWide", () => {
        it("is defined", () => {
            expect(TopbarWide).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TopbarWide />);

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
