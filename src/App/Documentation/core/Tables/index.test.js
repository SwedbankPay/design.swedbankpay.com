import React from "react";
import { shallow } from "enzyme";

import Table, { DocTable, BasicTable, StripedTable, CondensedTable, HoverTable, HoverStripedTable, DescriptionTable, TablesText } from "./index";

describe("Documentation: Table", () => {
    it("is defined", () => {
        expect(Table).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Table />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("DocTable", () => {
        it("renders table with given class name", () => {
            const wrapper = shallow(<DocTable tableClass="table" />);

            expect(wrapper.hasClass("table")).toBeTruthy();
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("BasicTable", () => {
        it("is defined", () => {
            expect(BasicTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicTable />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("StripedTable", () => {
        it("is defined", () => {
            expect(StripedTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<StripedTable />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CondensedTable", () => {
        it("is defined", () => {
            expect(CondensedTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CondensedTable />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("HoverTable", () => {
        it("is defined", () => {
            expect(HoverTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HoverTable />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("HoverStripedTable", () => {
        it("is defined", () => {
            expect(HoverStripedTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HoverStripedTable />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DescriptionTable", () => {
        it("is defined", () => {
            expect(DescriptionTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DescriptionTable />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TablesText", () => {
        it("is defined", () => {
            expect(TablesText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TablesText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
