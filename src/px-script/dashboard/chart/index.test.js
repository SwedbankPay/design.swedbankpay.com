import React from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";

import chart, { _colorPool, _colorPoolSecondary } from "./index";
import initBarChart from "./bar";
import initPieChart from "./pie";
import initLineChart from "./line";

jest.mock("chart.js");
jest.mock("./bar");
jest.mock("./pie");
jest.mock("./line");

describe("px-script - dashboard: chart index", () => {
    const div = document.createElement("div");

    // Suppresses console errors regarding canvas and 2d context in jsdom
    console.error = jest.fn();

    document.body.appendChild(div);

    it("is defined", () => {
        expect(chart).toBeDefined();
        expect(chart).toBeInstanceOf(Function);
    });

    it("warns about element with id not being in DOM", () => {
        console.warn = jest.fn();
        chart("test", {});

        expect(console.warn).toHaveBeenCalledWith("Chart: No element with id \"test\" found.");
    });

    it("warns about element with id not being of type canvas", () => {
        console.warn = jest.fn();

        ReactDOM.render(<div id="test" />, div);
        chart("test", {});
        expect(console.warn).toHaveBeenCalledWith("Chart: Element with id \"test\" is not of type canvas.");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("warns about chart type not being specified", () => {
        console.warn = jest.fn();

        ReactDOM.render(<canvas id="test" />, div);
        chart("test", {});
        expect(console.warn).toHaveBeenCalledWith("Chart: You need to specify a chart type.");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("warns about options.data not being provided", () => {
        console.warn = jest.fn();

        ReactDOM.render(<canvas id="test" />, div);
        chart("test", { type: "bar" });
        expect(console.warn).toHaveBeenCalledWith("Chart: You need to provide options.data.");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("warns about chart type not supported", () => {
        const mockData = {
            type: "test",
            data: {
                labels: "test"
            }
        };

        console.warn = jest.fn();

        ReactDOM.render(<canvas id="test" />, div);
        chart("test", mockData);
        expect(console.warn).toHaveBeenCalledWith("Chart: Chart type \"test\" is not supported.");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("runs initBarChart when type is 'bar'", () => {
        const mockData = {
            type: "bar",
            data: {
                labels: "test",
                datasets: []
            }
        };

        ReactDOM.render(<canvas id="test" />, div);
        initBarChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initBarChart).toHaveBeenCalledWith(mockData, _colorPoolSecondary);
        expect(Chart).toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("runs initBarChart when type is 'horizontalBar'", () => {
        const mockData = {
            type: "horizontalBar",
            data: {
                labels: "test",
                datasets: []
            }
        };

        ReactDOM.render(<canvas id="test" />, div);
        initBarChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initBarChart).toHaveBeenCalledWith(mockData, _colorPoolSecondary);
        expect(Chart).toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("runs initPieChart when type is 'pie'", () => {
        const mockData = {
            type: "pie",
            data: {
                labels: "test",
                datasets: []
            }
        };

        ReactDOM.render(<canvas id="test" />, div);
        initPieChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initPieChart).toHaveBeenCalledWith(mockData, _colorPoolSecondary);
        expect(Chart).toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("runs initPieChart when type is 'doughnut'", () => {
        const mockData = {
            type: "doughnut",
            data: {
                labels: "test",
                datasets: []
            }
        };

        ReactDOM.render(<canvas id="test" />, div);
        initPieChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initPieChart).toHaveBeenCalledWith(mockData, _colorPoolSecondary);
        expect(Chart).toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("runs initLineChart when type is 'line'", () => {
        const mockData = {
            type: "line",
            data: {
                labels: "test",
                datasets: []
            }
        };

        ReactDOM.render(<canvas id="test" />, div);
        initLineChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initLineChart).toHaveBeenCalledWith(mockData, _colorPoolSecondary);
        expect(Chart).toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });
});
