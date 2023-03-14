import React from "react";
import renderer from "react-test-renderer";

import Panel, { Overview, PanelHeaders, PanelTable, TableContent } from "./index";

describe("Documentation: Panel", () => {
    it("is defined", () => {
        expect(Panel).toBeDefined();
    });

    it("renders", () => {
        const wrapper = renderer.create(<Panel />);

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

    describe("PanelHeaders", () => {
        it("is defined", () => {
            expect(PanelHeaders).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<PanelHeaders />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("PanelTable", () => {
        it("is defined", () => {
            expect(PanelTable).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<PanelTable />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("TableContent", () => {
        it("is defined", () => {
            expect(TableContent).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<TableContent />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
