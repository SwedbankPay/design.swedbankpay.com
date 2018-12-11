import React from "react";
import { shallow } from "enzyme";

import Pagination, { DefaultPagination, SimplePagination, PaginationBullets } from "./index";

describe("Documentation: Pagination", () => {
    it("is defined", () => {
        expect(Pagination).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Pagination />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("DefaultPagination", () => {
        it("is defined", () => {
            expect(DefaultPagination).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DefaultPagination />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SimplePagination", () => {
        it("is defined", () => {
            expect(SimplePagination).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SimplePagination />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PaginationBullets", () => {
        it("is defined", () => {
            expect(PaginationBullets).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PaginationBullets />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
