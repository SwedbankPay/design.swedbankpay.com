import React from "react";
import { shallow } from "enzyme";

import Charts, { LineChart, BarChart, DoughnutAndPieCharts, MixingTypes, ChartsText } from "./index";

describe("Dashboard: Charts", () => {
    it("is defined", () => {
        expect(Charts).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Charts />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("LineChart", () => {
        it("is defined", () => {
            expect(LineChart).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<LineChart />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("BarChart", () => {
        it("is defined", () => {
            expect(BarChart).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BarChart />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DoughnutAndPieCharts", () => {
        it("is defined", () => {
            expect(DoughnutAndPieCharts).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DoughnutAndPieCharts />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("MixingTypes", () => {
        it("is defined", () => {
            expect(MixingTypes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MixingTypes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ChartsText", () => {
        it("is defined", () => {
            expect(ChartsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ChartsText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
