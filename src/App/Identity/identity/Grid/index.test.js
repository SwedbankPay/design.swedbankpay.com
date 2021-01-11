import React from "react";
import { shallow } from "enzyme";

import Grid, { Intro, GridSystem, GridTypes, OffsettingGrid, Breakpoints, HowItWorks, GridOptions, AutoLayoutColumns, ResponsiveClasses, Alignment, Reordering, Nesting } from "./index";

describe("Core: Grid", () => {
    it("is defined", () => {
        expect(Grid).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Grid />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Intro", () => {
        it("is defined", () => {
            expect(Intro).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Intro />);

            expect(wrapper).toMatchSnapshot();
        });
    });
    describe("GridSystem", () => {
        it("is defined", () => {
            expect(GridSystem).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GridSystem />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("GridTypes", () => {
        it("is defined", () => {
            expect(GridTypes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GridTypes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("OffsettingGrid", () => {
        it("is defined", () => {
            expect(OffsettingGrid).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<OffsettingGrid />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Breakpoints", () => {
        it("is defined", () => {
            expect(Breakpoints).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Breakpoints />);

            expect(wrapper).toMatchSnapshot();
        });
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

    describe("ResponsiveClasses", () => {
        it("is defined", () => {
            expect(ResponsiveClasses).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ResponsiveClasses />);

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

    describe("Reordering", () => {
        it("is defined", () => {
            expect(Reordering).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Reordering />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Nesting", () => {
        it("is defined", () => {
            expect(Nesting).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Nesting />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
