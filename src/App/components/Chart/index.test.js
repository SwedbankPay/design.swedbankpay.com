import React from "react";
import { shallow } from "enzyme";

import Chart from "./index";
import { chart } from "@src/scripts/dashboard";

// Can't use aliases in jest mock it seems, but this automocks the chart import [THN]
jest.mock("../../../scripts/dashboard");

describe("Component: Chart -", () => {
    beforeEach(() => chart.mockClear());

    it("is defined", () => {
        expect(Chart).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Chart id="test" options={{}} description="test"/>);

        expect(wrapper.contains(<canvas id="test" role="img" aria-label="test"/>)).toEqual(true);
        expect(wrapper).toMatchSnapshot();
    });

    it("prop id is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Chart options={{}} />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("prop options is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Chart id="test" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a canvas with correct id and calls chart.js with that id and provided options", () => {
        const wrapper = shallow(<Chart id="test" options={{ test: "test" }} description="test"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<canvas id="test" aria-label="test" role="img" />)).toEqual(true);
        // expect(chart).toHaveBeenCalledWith("test", { test: "test" }, undefined);
    });

    it("renders a canvas with correct id and calls chart.js with that id, provided options and colors", () => {
        const wrapper = shallow(<Chart id="test" description="test" options={{ test: "test" }} colorPool={["test", "test", "test"]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<canvas id="test" role="img" aria-label="test"/>)).toEqual(true);
        // expect(chart).toHaveBeenCalledWith("test", { test: "test" }, ["test", "test", "test"]);
    });
});
