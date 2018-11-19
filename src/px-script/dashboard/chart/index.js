import Chart from "chart.js";

const _colorPool = [
    "0, 67, 0", // darkened 40%
    "0, 93, 0", // darkened 30%
    "0, 118, 17", // darkened 20%
    "20, 144, 43", // darkened 10%
    "45, 169, 68", // original
    "71, 195, 94", // lightened 10%
    "96, 220, 119", // lightened 20%
    "122, 246, 145", // lightened 30%
    "147, 255, 170" // lightened 40%
];

const _prepareDataset = (dataset, index) => {
    const { label, data, type } = dataset;

    const preparedDataset = {
        label,
        data,
        type,
        backgroundColor: [],
        borderColor: [],
        hoverBackgroundColor: [],
        hoverBorderColor: [],
        borderWidth: 1
    };

    data.forEach((d, i) => {
        preparedDataset.borderColor.push(`rgba(${_colorPool[index]}, 0.9)`);
        preparedDataset.hoverBorderColor.push(`rgba(${_colorPool[index]}, 1)`);
        preparedDataset.backgroundColor.push(`rgba(${_colorPool[index]}, ${type ? 0 : 0.4})`);
        preparedDataset.hoverBackgroundColor.push(`rgba(${_colorPool[index]}, ${type ? 0 : 0.6})`);

    });

    return preparedDataset;
};

const _initPieChart = userOptions => userOptions;

const _initBarChart = userOptions => {
    const { type, data, beginAtZero, stacked } = userOptions;

    return {
        type,
        data: {
            labels: data.labels,
            datasets: data.datasets.map((dataset, i) => _prepareDataset(dataset, i))
        },
        options: {
            scales: {
                xAxes: [
                    {
                        stacked,
                        ticks: {
                            beginAtZero
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked,
                        ticks: {
                            beginAtZero
                        }
                    }
                ]
            }
        }
    };
};

const _init = (ctx, userOptions) => {
    let options;

    switch (userOptions.type) {
        case "bar":
        case "horizontalBar":
            options = _initBarChart(userOptions);

            break;
        case "doughnut":
        case "pie":
            options = _initPieChart(userOptions);

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
        const ctx = element.getContext("2d");

        _init(ctx, userOptions);
    } else if (element) {
        console.warn(`Chart: Element with id "${id}" is not of type canvas.`);
    } else {
        console.warn(`Chart: No element with id "${id}" found.`);
    }
};

export default chart;
