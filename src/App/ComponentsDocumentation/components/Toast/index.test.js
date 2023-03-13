import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Toast, { Overview, ContentGuidelines, DeveloperDocumentation } from "./index";

import { toast } from "@src/scripts/main";

// Can't use aliases in jest mock it seems, but this automocks the toast import [THN]
jest.mock("../../../../scripts/main");

describe("Components: Toast", () => {
    beforeEach(() => {
        toast.mockClear();
    });

    it("is defined", () => {
        expect(Toast).toBeDefined();
    });

    it.skip("renders", () => {
        const componentForSnap = renderer.create(<BrowserRouter>
            <Toast />
        </BrowserRouter>
        );

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <Overview />
            </BrowserRouter>
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe("Content guidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <ContentGuidelines />
            </BrowserRouter>
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });

    describe("Developer documentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const componentForSnap = renderer.create(<BrowserRouter>
                <DeveloperDocumentation />
            </BrowserRouter>
            );

            expect(componentForSnap.toJSON()).toMatchSnapshot();
        });
    });
});
