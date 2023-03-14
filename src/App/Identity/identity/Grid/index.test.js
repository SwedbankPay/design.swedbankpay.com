import React from "react";
import renderer from "react-test-renderer";

import Grid, { Intro, GridSystem, GridTypes, OffsettingGrid, Breakpoints, HowItWorks, GridOptions, AutoLayoutColumns, ResponsiveClasses, Alignment, Reordering, Nesting } from "./index";

describe("Core: Grid", () => {
    it("is defined", () => {
        expect(Grid).toBeDefined();
    });

    describe("Intro", () => {
        it("is defined", () => {
            expect(Intro).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Intro />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
    describe("GridSystem", () => {
        it("is defined", () => {
            expect(GridSystem).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<GridSystem />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("GridTypes", () => {
        it("is defined", () => {
            expect(GridTypes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<GridTypes />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("OffsettingGrid", () => {
        it("is defined", () => {
            expect(OffsettingGrid).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<OffsettingGrid />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Breakpoints", () => {
        it("is defined", () => {
            expect(Breakpoints).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Breakpoints />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("HowItWorks", () => {
        it("is defined", () => {
            expect(HowItWorks).toBeDefined();
        });
    });

    describe("GridOptions", () => {
        it("is defined", () => {
            expect(GridOptions).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<GridOptions />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("AutoLayoutColumns", () => {
        it("is defined", () => {
            expect(AutoLayoutColumns).toBeDefined();
        });
    });

    describe("ResponsiveClasses", () => {
        it("is defined", () => {
            expect(ResponsiveClasses).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<ResponsiveClasses />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Alignment", () => {
        it("is defined", () => {
            expect(Alignment).toBeDefined();
        });
    });

    describe("Reordering", () => {
        it("is defined", () => {
            expect(Reordering).toBeDefined();
        });
    });

    describe("Nesting", () => {
        it("is defined", () => {
            expect(Nesting).toBeDefined();
        });
    });
});
