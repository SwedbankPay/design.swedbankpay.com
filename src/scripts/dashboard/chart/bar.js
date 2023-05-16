const initBarChart = (userOptions, colorPool) => {
	const prepareDataset = (dataset, index) => {
		const { data, type } = dataset;

		const preparedDataset = {
			...dataset,
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1,
			hoverBorderWidth: 2,
		};

		if (type === "line") {
			preparedDataset.pointBackgroundColor = [];
			preparedDataset.pointBorderColor = [];
			preparedDataset.pointHoverBorderColor = [];
			preparedDataset.pointHoverBackgroundColor = [];
			preparedDataset.borderWidth = 4;
			preparedDataset.pointBorderWidth = 2;
			preparedDataset.pointRadius = 3;
			preparedDataset.pointHoverRadius = 6;
		} else {
			preparedDataset.hoverBackgroundColor = [];
			preparedDataset.hoverBorderColor = [];
		}

		data.forEach(() => {
			if (!type) {
				preparedDataset.backgroundColor.push(`rgba(${colorPool[index]}, 1)`);
				preparedDataset.borderColor.push(`rgba(${colorPool[index]}, 1)`);
				preparedDataset.hoverBackgroundColor.push(
					`rgba(${colorPool[index]}, 1)`
				);
				preparedDataset.hoverBorderColor.push(`rgba(${colorPool[index]}, 1)`);
			} else if (type === "line") {
				preparedDataset.backgroundColor = `rgba(${colorPool[index]}, 1)`;
				preparedDataset.borderColor = `rgba(${colorPool[index]}, 1)`;
				preparedDataset.pointBackgroundColor = `rgba(${colorPool[index]}, 1)`;
				preparedDataset.pointBorderColor = `rgba(${colorPool[index]}, 1)`;
				preparedDataset.pointHoverBorderColor = `rgba(${colorPool[index]}, 1)`;
				preparedDataset.pointHoverBackgroundColor = `rgba(${colorPool[index]}, 1)`;
			}
		});

		return preparedDataset;
	};

	const { data } = userOptions;

	return {
		...userOptions,
		data: {
			labels: data.labels,
			datasets: data.datasets.map((dataset, i) => prepareDataset(dataset, i)),
		},
	};
};

export default initBarChart;
