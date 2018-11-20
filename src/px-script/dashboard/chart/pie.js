const initPieChart = (userOptions, colorPool) => {
    const prepareDataset = dataset => {
        const { label, data } = dataset;

        const preparedDataset = {
            label,
            data,
            backgroundColor: [],
            borderColor: [],
            hoverBackgroundColor: [],
            hoverBorderColor: [],
            borderWidth: 1,
            hoverBorderWidth: 2
        };

        data.forEach((d, i) => {
            preparedDataset.backgroundColor.push(`rgba(${colorPool[i]}, 0.5)`);
            preparedDataset.hoverBackgroundColor.push(`rgba(${colorPool[i]}, 0.7)`);
            preparedDataset.borderColor.push(`rgba(${colorPool[i]}, 0.9)`);
            preparedDataset.hoverBorderColor.push(`rgba(${colorPool[i]}, 1)`);

        });

        return preparedDataset;
    };

    const { type, data, cutoutPercentage } = userOptions;

    return {
        type,
        data: {
            labels: data.labels,
            datasets: data.datasets.map(dataset => prepareDataset(dataset))
        },
        options: {
            cutoutPercentage: type === "pie" ? cutoutPercentage || 0 : cutoutPercentage || 50
        }
    };
};

export default initPieChart;
