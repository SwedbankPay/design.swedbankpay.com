const initPieChart = (userOptions, colorPool) => {
	const prepareDataset = (dataset) => {
		const preparedDataset = {
			...dataset,
			backgroundColor: [],
			borderColor: [],
			hoverBackgroundColor: [],
			hoverBorderColor: [],
			borderWidth: 1,
			hoverBorderWidth: 2,
		};

		dataset.data.forEach((d, i) => {
			preparedDataset.backgroundColor.push(`rgba(${colorPool[i]}, 1)`);
			preparedDataset.hoverBackgroundColor.push(`rgba(${colorPool[i]}, 1)`);
			preparedDataset.borderColor.push(`rgba(${colorPool[i]}, 1)`);
			preparedDataset.hoverBorderColor.push(`rgba(${colorPool[i]}, 1)`);
		});

		return preparedDataset;
	};

	const { data } = userOptions;

	return {
		...userOptions,
		data: {
			labels: data.labels,
			datasets: data.datasets.map((dataset) => prepareDataset(dataset)),
		},
	};
};

export default initPieChart;
