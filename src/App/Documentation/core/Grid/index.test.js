import React from "react";
import { shallow } from "enzyme";

import Grid, { HowItWorks, AutoLayoutColumns, GridText } from "./index";

describe("Core: Grid", () => {
    it("is defined", () => {
        expect(Grid).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Grid />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("HowItWorks", () => {
        it("is defined", () => {
            expect(HowItWorks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <HowItWorks />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AutoLayoutColumns", () => {
        it("is defined", () => {
            expect(AutoLayoutColumns).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <AutoLayoutColumns />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("GridText", () => {
        it("is defined", () => {
            expect(GridText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <GridText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
