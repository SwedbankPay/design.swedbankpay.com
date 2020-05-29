import React from "react";
import { shallow } from "enzyme";

import Breadcrumb, { BasicBreadCrumb, DisabledBreadcrumb } from "./index";

describe("Documentation: Breadcrumb", () => {
    it("is defined", () => {
        expect(Breadcrumb).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Breadcrumb />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Basic BreadCrumb", () => {
        it("is defined", () => {
            expect(BasicBreadCrumb).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicBreadCrumb />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Disabled BreadCrumb", () => {
        it("is defined", () => {
            expect(DisabledBreadcrumb).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DisabledBreadcrumb />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
