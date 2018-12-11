import React from "react";
import { shallow } from "enzyme";

import Panel, { Overview, PanelHeaders, PanelDark, PanelMuted, PanelTable, TableContent } from "./index";

describe("Documentation: Panel", () => {
    it("is defined", () => {
        expect(Panel).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Panel />);

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

    describe("PanelHeaders", () => {
        it("is defined", () => {
            expect(PanelHeaders).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PanelHeaders />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PanelDark", () => {
        it("is defined", () => {
            expect(PanelDark).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PanelDark />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PanelMuted", () => {
        it("is defined", () => {
            expect(PanelMuted).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PanelMuted />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PanelTable", () => {
        it("is defined", () => {
            expect(PanelTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PanelTable />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TableContent ", () => {
        it("is defined", () => {
            expect(TableContent).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TableContent />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
