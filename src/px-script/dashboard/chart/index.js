import Chart from "chart.js";

import initBarChart from "./bar";
import initPieChart from "./pie";
import initLineChart from "./line";

// Shades of green
const _colorPool = [
    "45, 169, 68", // original
    "11, 93, 30",
    "5, 59, 6",
    "28, 105, 42",
    "65, 245, 99",
    "48, 182, 73",
    "38, 143, 58"
    // "0, 67, 0", // darkened 40%
    // "147, 255, 170", // lightened 40%
    // "0, 93, 0", // darkened 30%
    // "122, 246, 145", // lightened 30%
    // "0, 118, 17", // darkened 20%
    // "96, 220, 119", // lightened 20%
    // "20, 144, 43", // darkened 10%
    // "71, 195, 94" // lightened 10%
];

const _colorPoolSecondary = [
    "45, 169, 68", // brand
    "38, 108, 154", // neutral
    "125, 85, 170", // purple
    "255, 159, 0", // warning
    "205, 46, 0", // danger
    "19, 70, 17", // up forest green (custom)
    "0, 52, 89", // prussian blue (custom)
    "106, 1, 54", // tyrian purple (custom)
    "245, 184, 65", // maximum yellow (red) (custom)
    "255, 34, 12" // red (ryb) (custom)
];

const _init = (ctx, userOptions) => {
    let options;

    switch (userOptions.type) {
        case "bar":
        case "horizontalBar":
            options = initBarChart(userOptions, _colorPoolSecondary);

            break;

        case "pie":
        case "doughnut":
            options = initPieChart(userOptions, _colorPoolSecondary);

            break;

        case "line":
            options = initLineChart(userOptions, _colorPoolSecondary);

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
