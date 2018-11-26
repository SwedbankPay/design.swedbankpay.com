import Chart from "chart.js";

import initBarChart from "./bar";
import initPieChart from "./pie";
import initLineChart from "./line";

const _colorPool = [
    "45, 169, 68", // original
    "0, 67, 0", // darkened 40%
    "147, 255, 170", // lightened 40%
    "0, 93, 0", // darkened 30%
    "122, 246, 145", // lightened 30%
    "0, 118, 17", // darkened 20%
    "96, 220, 119", // lightened 20%
    "20, 144, 43", // darkened 10%
    "71, 195, 94" // lightened 10%
];

const _init = (ctx, userOptions) => {
    let options;

    switch (userOptions.type) {
        case "bar":
        case "horizontalBar":
            options = initBarChart(userOptions, _colorPool);

            break;

        case "pie":
        case "doughnut":
            options = initPieChart(userOptions, _colorPool);

            break;

        case "line":
            options = initLineChart(userOptions, _colorPool);

            break;
        default:
            console.warn(`Chart: Chart type "${userOptions.type}" is not supported.`);
    }

    if (options) {
        new Chart(ctx, options);
    }
};

const chart = (id, userOptions) => {
    const element = document.getElementById(id);

    if (element && element.tagName === "CANVAS") {
        if (!userOptions.type) {
            console.warn("Chart: You need to specify a chart type.");
        } else if (!userOptions.data) {
            console.warn("Chart: You need to provide options.data.");
        } else {
            _init(element.getContext("2d"), userOptions);
        }

    } else if (element) {
        console.warn(`Chart: Element with id "${id}" is not of type canvas.`);
    } else {
        console.warn(`Chart: No element with id "${id}" found.`);
    }
};

export default chart;

/* For testing */
export { _colorPool };
