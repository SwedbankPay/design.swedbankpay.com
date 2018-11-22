const initLineChart = (userOptions, colorPool) => {
    const prepareDataset = (dataset, index) => {
        const { label, data, fill, steppedLine, borderDash } = dataset;

        const preparedDataset = {
            label,
            data,
            steppedLine,
            borderDash,
            fill: fill ? fill : false,
            backgroundColor: [],
            borderColor: [],
            pointBackgroundColor: [],
            pointHoverBackgroundColor: [],
            pointHoverBorderColor: [],
            pointBorderColor: [],
            pointBorderWidth: 2,
            borderWidth: 4,
            pointRadius: 4,
            pointHoverRadius: 6
        };

        data.forEach(() => {
            preparedDataset.backgroundColor.push(`rgba(${colorPool[index]}, 0.2)`);
            preparedDataset.borderColor.push(`rgba(${colorPool[index]}, 0.7)`);
            preparedDataset.pointBackgroundColor.push(`rgba(${colorPool[index]}, 0.9)`);
            preparedDataset.pointBorderColor.push(`rgba(${colorPool[index]}, 0.9)`);
            preparedDataset.pointHoverBorderColor.push(`rgba(${colorPool[index]}, 1)`);
            preparedDataset.pointHoverBackgroundColor.push(`rgba(${colorPool[index]}, 1)`);
        });

        return preparedDataset;
    };

    const { type, data, options } = userOptions;

    return {
        type,
        data: {
            labels: data.labels,
            datasets: data.datasets.map((dataset, i) => prepareDataset(dataset, i))
        },
        options
    };
};

export default initLineChart;
