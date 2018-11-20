const initBarChart = (userOptions, colorPool) => {
    const prepareDataset = (dataset, index) => {
        const { label, data, type } = dataset;

        const preparedDataset = {
            label,
            data,
            type,
            backgroundColor: [],
            borderColor: [],
            hoverBackgroundColor: [],
            hoverBorderColor: [],
            borderWidth: 1,
            hoverBorderWidth: 2
        };

        data.forEach(() => {
            preparedDataset.backgroundColor.push(`rgba(${colorPool[index]}, ${type ? 0 : 0.5})`);
            preparedDataset.hoverBackgroundColor.push(`rgba(${colorPool[index]}, ${type ? 0 : 0.7})`);
            preparedDataset.borderColor.push(`rgba(${colorPool[index]}, 0.9)`);
            preparedDataset.hoverBorderColor.push(`rgba(${colorPool[index]}, 1)`);

        });

        return preparedDataset;
    };

    const { type, data, beginAtZero, stacked } = userOptions;

    return {
        type,
        data: {
            labels: data.labels,
            datasets: data.datasets.map((dataset, i) => prepareDataset(dataset, i))
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

export default initBarChart;
