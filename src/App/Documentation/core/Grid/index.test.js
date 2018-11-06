import React from "react";
import { shallow } from "enzyme";

import Grid, { HowItWorks, GridOptions, AutoLayoutColumns, Alignment, GridText } from "./index";

describe("Core: Grid", () => {
    it("is defined", () => {
        expect(Grid).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Grid />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("HowItWorks", () => {
        it("is defined", () => {
            expect(HowItWorks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HowItWorks />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("GridOptions", () => {
        it("is defined", () => {
            expect(GridOptions).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GridOptions />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AutoLayoutColumns", () => {
        it("is defined", () => {
            expect(AutoLayoutColumns).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AutoLayoutColumns />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Alignment", () => {
        it("is defined", () => {
            expect(Alignment).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Alignment />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("GridText", () => {
        it("is defined", () => {
            expect(GridText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GridText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
