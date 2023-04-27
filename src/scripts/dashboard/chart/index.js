import Chart from "chart.js";

// Set global defaults for Chart
Chart.defaults.global.legend.labels.usePointStyle = true;
Chart.defaults.global.defaultFontColor = "#512B2B"; // Brand secondary as font color
Chart.defaults.global.elements.line.fill = false;
Chart.plugins.register({
	beforeDraw(chart) {
		const xAxis = chart.scales["x-axis-0"];

		xAxis && (xAxis.options.gridLines.display = false); // Check whether this type of chart have x-axis, if so, remove the x-axis gridline
	},
});

import initBarChart from "./bar";
import initPieChart from "./pie";
import initLineChart from "./line";
import initLineFillChart from "./line-fill";

const _colorPool = [
	"253, 193, 41", // brand primary
	"238, 112, 35", // brand tertiary
	"49, 163, 174", // brand accent
	"138, 205, 195", // info turquoise
	"239, 183, 182", // info pink
	"37, 120, 134", // brand accent link
	"69, 114, 192", // neutral/info
	"81, 43, 43", // brand secondary
	"163, 139, 128", // brand secondary light 2
	"114, 96, 94", // brand secondary light
	"197, 19, 28", // danger
	"81, 151, 27", // success
];

// Shades of green
const _colorPoolGreen = [
	"45, 169, 68", // original
	"11, 93, 30",
	"5, 59, 6",
	"28, 105, 42",
	"65, 245, 99",
	"48, 182, 73",
	"38, 143, 58",
	// "0, 67, 0", // darkened 40%
	// "147, 255, 170", // lightened 40%
	// "0, 93, 0", // darkened 30%
	// "122, 246, 145", // lightened 30%
	// "0, 118, 17", // darkened 20%
	// "96, 220, 119", // lightened 20%
	// "20, 144, 43", // darkened 10%
	// "71, 195, 94" // lightened 10%
];

const _init = (ctx, userOptions, colorPool) => {
	let options;

	switch (userOptions.type) {
		case "bar":
		case "horizontalBar":
			options = initBarChart(userOptions, colorPool);

			break;

		case "pie":
		case "doughnut":
			options = initPieChart(userOptions, colorPool);

			break;

		case "line":
			options = initLineChart(userOptions, colorPool);

			break;

		case "line-fill":
			options = initLineFillChart(userOptions, colorPool);
			options = {
				...options,
				type: "line",
			};

			break;
		default:
			console.warn(`Chart: Chart type "${userOptions.type}" is not supported.`);
	}

	if (options) {
		return new Chart(ctx, options);
	}
};

const chart = (id, userOptions, colorPool) => {
	const element = document.getElementById(id);

	if (element && element.tagName === "CANVAS") {
		if (!userOptions.type) {
			console.warn("Chart: You need to specify a chart type.");
		} else if (!userOptions.data) {
			console.warn("Chart: You need to provide options.data.");
		} else {
			// ..._colorPool.slice(0, 3) is due to the three first colors always having to be included (because of branding)
			return _init(
				element.getContext("2d"),
				userOptions,
				colorPool ? [..._colorPool.slice(0, 3), ...colorPool] : _colorPool
			);
		}
	} else if (element) {
		console.warn(`Chart: Element with id "${id}" is not of type canvas.`);
	} else {
		console.warn(`Chart: No element with id "${id}" found.`);
	}
};

export default chart;

/* For testing */
export { _colorPool, _colorPoolGreen };
