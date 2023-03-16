import React from "react";
import { createRoot } from "react-dom/client";
import Chart from "chart.js";

import chart, { _colorPool } from "./index";
import initBarChart from "./bar";
import initPieChart from "./pie";
import initLineChart from "./line";

jest.mock("chart.js");
jest.mock("./bar");
jest.mock("./pie");
jest.mock("./line");

describe("scripts - dashboard: chart index", () => {
    const div = document.createElement("div");
    const root = createRoot(div);

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

        root.render(<div id="test" />);
        chart("test", {});
        expect(console.warn).toHaveBeenCalledWith("Chart: Element with id \"test\" is not of type canvas.");

        createRoot.unmount(div);
    });

    it("warns about chart type not being specified", () => {
        console.warn = jest.fn();

        root.render(<canvas id="test" />);
        chart("test", {});
        expect(console.warn).toHaveBeenCalledWith("Chart: You need to specify a chart type.");

        createRoot.unmount(div);
    });

    it("warns about options.data not being provided", () => {
        console.warn = jest.fn();

        root.render(<canvas id="test" />);
        chart("test", { type: "bar" });
        expect(console.warn).toHaveBeenCalledWith("Chart: You need to provide options.data.");

        createRoot.unmount(div);
    });

    it("warns about chart type not supported", () => {
        const mockData = {
            type: "test",
            data: {
                labels: "test"
            }
        };

        console.warn = jest.fn();

        root.render(<canvas id="test" />);
        chart("test", mockData);
        expect(console.warn).toHaveBeenCalledWith("Chart: Chart type \"test\" is not supported.");

        createRoot.unmount(div);
    });

    it("runs initBarChart when type is 'bar'", () => {
        const mockData = {
            type: "bar",
            data: {
                labels: "test",
                datasets: []
            }
        };

        root.render(<canvas id="test" />);
        initBarChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initBarChart).toHaveBeenCalledWith(mockData, _colorPool);
        expect(Chart).toHaveBeenCalled();

        createRoot.unmount(div);
    });

    it("runs initBarChart when type is 'horizontalBar'", () => {
        const mockData = {
            type: "horizontalBar",
            data: {
                labels: "test",
                datasets: []
            }
        };

        root.render(<canvas id="test" />);
        initBarChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initBarChart).toHaveBeenCalledWith(mockData, _colorPool);
        expect(Chart).toHaveBeenCalled();

        createRoot.unmount(div);
    });

    it("runs initPieChart when type is 'pie'", () => {
        const mockData = {
            type: "pie",
            data: {
                labels: "test",
                datasets: []
            }
        };

        root.render(<canvas id="test" />);
        initPieChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initPieChart).toHaveBeenCalledWith(mockData, _colorPool);
        expect(Chart).toHaveBeenCalled();

        createRoot.unmount(div);
    });

    it("runs initPieChart when type is 'doughnut'", () => {
        const mockData = {
            type: "doughnut",
            data: {
                labels: "test",
                datasets: []
            }
        };

        root.render(<canvas id="test" />);
        initPieChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initPieChart).toHaveBeenCalledWith(mockData, _colorPool);
        expect(Chart).toHaveBeenCalled();

        createRoot.unmount(div);
    });

    it("runs initLineChart when type is 'line'", () => {
        const mockData = {
            type: "line",
            data: {
                labels: "test",
                datasets: []
            }
        };

        root.render(<canvas id="test" />);
        initLineChart.mockReturnValueOnce("test");
        chart("test", mockData);

        expect(initLineChart).toHaveBeenCalledWith(mockData, _colorPool);
        expect(Chart).toHaveBeenCalled();

        createRoot.unmount(div);
    });
});
