import React from "react";
import { shallow } from "enzyme";

import Sidebar, { StandardSidebar, TwoLevels, IconsOnly, Responsive, SidebarText } from "./index";

describe("Component: Sidebar", () => {
    it("is defined", () => {
        expect(Sidebar).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Sidebar />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("StandardSidebar", () => {
        it("is defined", () => {
            expect(StandardSidebar).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<StandardSidebar />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TwoLevels", () => {
        it("is defined", () => {
            expect(TwoLevels).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TwoLevels />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("IconsOnly", () => {
        it("is defined", () => {
            expect(IconsOnly).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<IconsOnly />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Responsive", () => {
        it("is defined", () => {
            expect(Responsive).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Responsive />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SidebarText", () => {
        it("is defined", () => {
            expect(SidebarText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SidebarText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
