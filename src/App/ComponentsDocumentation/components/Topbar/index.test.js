import React from "react";
import { shallow } from "enzyme";

import Topbar, { Overview, TopbarWide, TopbarSticky, TopbarWithSidebar, TopbarPNG, JavascriptMethods } from "./index";

import { topbar } from "@src/scripts/main";

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

    describe("TopbarSticky", () => {
        it("is defined", () => {
            expect(TopbarSticky).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TopbarSticky />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TopbarWithSidebar", () => {
        it("is defined", () => {
            expect(TopbarWithSidebar).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TopbarWithSidebar />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TopbarPNG", () => {
        it("is defined", () => {
            expect(TopbarPNG).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TopbarPNG />);

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
