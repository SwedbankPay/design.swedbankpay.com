import React from "react";
import renderer from "react-test-renderer";

import Identity, { OurBrand, MenuOverview, OpenSimpleCaring } from "./index";

describe("Identity: Identity", () => {
    it("is defined", () => {
        expect(Identity).toBeDefined();
    });

    describe("OurBrand", () => {
        it("is defined", () => {
            expect(OurBrand).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<OurBrand />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("MenuOverview", () => {
        it("is defined", () => {
            expect(MenuOverview).toBeDefined();
        });
    });

    describe("OpenSimpleCaring", () => {
        it("is defined", () => {
            expect(OpenSimpleCaring).toBeDefined();
        });
    });
});
