import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Togglebox, { Overview, ContentGuidelines, DeveloperDocumentation } from "./index";

describe("Component: Togglebox", () => {
    it("is defined", () => {
        expect(Togglebox).toBeDefined();
    });

    it.skip("renders", () => {

        const componentForSnap = renderer.create(<BrowserRouter>
            <Togglebox />
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

    describe("ContentGuidelines", () => {
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

    describe("DeveloperDocumentation", () => {
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
