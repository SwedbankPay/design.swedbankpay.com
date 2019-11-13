const initLineChart = (userOptions, colorPool) => {
    const prepareDataset = (dataset, index) => {
        const preparedDataset = {
            ...dataset,
            backgroundColor: `rgba(${colorPool[index]}, 1)`,
            borderColor: `rgba(${colorPool[index]}, 1)`,
            pointBackgroundColor: `rgba(${colorPool[index]}, 1)`,
            pointHoverBackgroundColor: `rgba(${colorPool[index]}, 1)`,
            pointHoverBorderColor: `rgba(${colorPool[index]}, 1)`,
            pointBorderColor: `rgba(${colorPool[index]}, 1)`,
            pointBorderWidth: 2,
            borderWidth: 4,
            pointRadius: 2,
            pointHoverRadius: 5
        };

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
