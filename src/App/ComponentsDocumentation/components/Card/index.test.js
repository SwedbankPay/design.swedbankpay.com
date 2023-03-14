import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Card, { Overview, OldCard } from "./index";

describe("Documentation: Card", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<BrowserRouter><Card /></BrowserRouter>);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Overview />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("OldCard", () => {
        it("is defined", () => {
            expect(OldCard).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<OldCard />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
