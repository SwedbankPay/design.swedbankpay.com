import React from "react";
import { shallow } from "enzyme";

import Pagination, { Overview, DeveloperDocumentation, PaginationScriptPresentation } from "./index";

describe("Documentation: Pagination", () => {
    it("is defined", () => {
        expect(Pagination).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Pagination />);

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

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeveloperDocumentation />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PaginationScriptPresentation", () => {
        it("is defined", () => {
            expect(PaginationScriptPresentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PaginationScriptPresentation />);

            expect(wrapper).toMatchSnapshot();
        });
    });

});
