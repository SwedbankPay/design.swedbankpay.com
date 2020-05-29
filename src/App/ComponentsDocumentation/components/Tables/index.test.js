import React from "react";
import { shallow } from "enzyme";

import Table, { DocTable, BasicTable, PlainTable, CondensedTable, HoverTable, HoverPlainTable, DescriptionTable } from "./index";

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
            const wrapper = shallow(<DocTable className="table" />);

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
            expect(PlainTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PlainTable />);

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
            expect(HoverPlainTable).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HoverPlainTable />);

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
});
