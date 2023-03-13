import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Alerts, { Overview, ContentGuidelines, DeveloperDocumentation } from "./index";

describe("Documentation: Alerts", () => {
    it("is defined", () => {
        expect(Alerts).toBeDefined();
    });

    it.skip("renders", () => {
        const componentForSnap = renderer.create(<BrowserRouter>
            <Alerts />
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
