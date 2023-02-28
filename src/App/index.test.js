import React from "react";
import renderer from "react-test-renderer";

import App, { VersionTopBanner } from "./index";

describe("Main: App", () => {
    it("is defined", () => {
        expect(App).toBeDefined();
    });

    it("renders", () => {
        const app = renderer.create(<App />).toJSON();

        expect(app).toMatchSnapshot();
    });
});

describe("VersionTopBanner:", () => {
    it("is defined", () => {
        expect(VersionTopBanner).toBeDefined();
    });
});
