const initBarChart = (userOptions, colorPool) => {
    const prepareDataset = (dataset, index) => {
        const { data, type } = dataset;

        const preparedDataset = {
            ...dataset,
            backgroundColor: [],
            borderColor: [],
            hoverBackgroundColor: [],
            hoverBorderColor: [],
            borderWidth: 1,
            hoverBorderWidth: 2
        };

        if (type === "line") {
            preparedDataset.pointBackgroundColor = [];
            preparedDataset.pointHoverBackgroundColor = [];
            preparedDataset.pointHoverBorderColor = [];
            preparedDataset.pointBorderColor = [];
            preparedDataset.pointBorderWidth = 2;
            preparedDataset.borderWidth = 4;
            preparedDataset.pointRadius = 4;
            preparedDataset.pointHoverRadius = 6;
        }

        data.forEach(() => {
            if (!type) {
                preparedDataset.backgroundColor.push(`rgba(${colorPool[index]}, 0.5)`);
                preparedDataset.hoverBackgroundColor.push(`rgba(${colorPool[index]}, 0.7)`);
                preparedDataset.borderColor.push(`rgba(${colorPool[index]}, 0.9)`);
                preparedDataset.hoverBorderColor.push(`rgba(${colorPool[index]}, 1)`);

            } else if (type === "line") {
                preparedDataset.backgroundColor.push(`rgba(${colorPool[index]}, 0.2)`);
                preparedDataset.borderColor.push(`rgba(${colorPool[index]}, 0.7)`);
                preparedDataset.pointBackgroundColor.push(`rgba(${colorPool[index]}, 0.9)`);
                preparedDataset.pointBorderColor.push(`rgba(${colorPool[index]}, 0.9)`);
                preparedDataset.pointHoverBorderColor.push(`rgba(${colorPool[index]}, 1)`);
                preparedDataset.pointHoverBackgroundColor.push(`rgba(${colorPool[index]}, 1)`);
            }

        });

        return preparedDataset;
    };

    const { data } = userOptions;

    return {
        ...userOptions,
        data: {
            labels: data.labels,
            datasets: data.datasets.map((dataset, i) => prepareDataset(dataset, i))
        }
    };
};

export default initBarChart;
