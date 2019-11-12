const initBarChart = (userOptions, colorPool) => {
    const prepareDataset = (dataset, index) => {
        const { data, type } = dataset;

        const preparedDataset = {
            ...dataset,
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
            hoverBorderWidth: 2
        };

        if (type === "line") {
            preparedDataset.pointBackgroundColor = [];
            preparedDataset.pointBorderColor = [];
            preparedDataset.pointHoverBorderColor = [];
            preparedDataset.pointHoverBackgroundColor = [];
            preparedDataset.borderWidth = 4;
            preparedDataset.pointBorderWidth = 2;
            preparedDataset.pointRadius = 2;
            preparedDataset.pointHoverRadius = 5;

        } else {
            preparedDataset.hoverBackgroundColor = [];
            preparedDataset.hoverBorderColor = [];
        }

        data.forEach(() => {
            if (!type) {
                preparedDataset.backgroundColor.push(`rgba(${colorPool[index]}, 1)`);
                preparedDataset.borderColor.push(`rgba(${colorPool[index]}, 1)`);
                preparedDataset.hoverBackgroundColor.push(`rgba(${colorPool[index]}, 1)`);
                preparedDataset.hoverBorderColor.push(`rgba(${colorPool[index]}, 1)`);

            } else if (type === "line") {
                preparedDataset.backgroundColor.push(`rgba(${colorPool[index]}, 1)`);
                preparedDataset.borderColor.push(`rgba(${colorPool[index]}, 1)`);
                preparedDataset.pointBackgroundColor.push(`rgba(${colorPool[index]}, 1)`);
                preparedDataset.pointBorderColor.push(`rgba(${colorPool[index]}, 1)`);
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
