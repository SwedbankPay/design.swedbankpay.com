import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Breadcrumb, { BasicBreadCrumb, DisabledBreadcrumb } from "./index";

describe("Documentation: Breadcrumb", () => {
    it("is defined", () => {
        expect(Breadcrumb).toBeDefined();
    });

    it("renders", () => {
        const componentForSnap = renderer.create(<BrowserRouter>
            <Breadcrumb />
        </BrowserRouter>
        );

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    describe("Basic BreadCrumb", () => {
        it("is defined", () => {
            expect(BasicBreadCrumb).toBeDefined();
        });

        it.skip("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <BasicBreadCrumb />
            </BrowserRouter>
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe("Disabled BreadCrumb", () => {
        it("is defined", () => {
            expect(DisabledBreadcrumb).toBeDefined();
        });

        it.skip("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <DisabledBreadcrumb />
            </BrowserRouter>
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });
});
