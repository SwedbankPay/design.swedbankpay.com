import initBarChart from "./bar";

describe("scripts - dashboard: bar chart", () => {
	it("initBarChart is defined", () => {
		expect(initBarChart).toBeDefined();
	});

	it("returns correct dataset", () => {
		const dataset = initBarChart(
			{
				type: "bar",
				data: {
					labels: ["Test#1", "Test#2", "Test#3"],
					datasets: [
						{
							data: [1, 2, 3],
						},
					],
				},
				options: {
					TEST: "TEST",
				},
			},
			["TEST", "TEST2", "TEST3"]
		);

		expect(dataset).toEqual({
			type: "bar",
			data: {
				labels: ["Test#1", "Test#2", "Test#3"],
				datasets: [
					{
						data: [1, 2, 3],
						backgroundColor: [
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
						],
						borderColor: ["rgba(TEST, 1)", "rgba(TEST, 1)", "rgba(TEST, 1)"],
						hoverBackgroundColor: [
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
						],
						hoverBorderColor: [
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
						],
						borderWidth: 1,
						hoverBorderWidth: 2,
					},
				],
			},
			options: {
				TEST: "TEST",
			},
		});
	});
	it("returns correct dataset with subtype 'line'", () => {
		const dataset = initBarChart(
			{
				type: "bar",
				data: {
					labels: ["Test#1", "Test#2", "Test#3"],
					datasets: [
						{
							data: [1, 2, 3],
						},
						{
							type: "line",
							data: [1, 2, 3],
						},
					],
				},
				options: {
					TEST: "TEST",
				},
			},
			["TEST", "TEST2", "TEST3"]
		);

		expect(dataset).toEqual({
			type: "bar",
			data: {
				labels: ["Test#1", "Test#2", "Test#3"],
				datasets: [
					{
						data: [1, 2, 3],
						backgroundColor: [
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
						],
						borderColor: ["rgba(TEST, 1)", "rgba(TEST, 1)", "rgba(TEST, 1)"],
						hoverBackgroundColor: [
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
						],
						hoverBorderColor: [
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
							"rgba(TEST, 1)",
						],
						borderWidth: 1,
						hoverBorderWidth: 2,
					},
					{
						type: "line",
						data: [1, 2, 3],
						backgroundColor: "rgba(TEST2, 1)",
						borderColor: "rgba(TEST2, 1)",
						pointBackgroundColor: "rgba(TEST2, 1)",
						pointBorderColor: "rgba(TEST2, 1)",
						pointHoverBorderColor: "rgba(TEST2, 1)",
						pointHoverBackgroundColor: "rgba(TEST2, 1)",
						borderWidth: 4,
						hoverBorderWidth: 2,
						pointBorderWidth: 2,
						pointRadius: 3,
						pointHoverRadius: 6,
					},
				],
			},
			options: {
				TEST: "TEST",
			},
		});
	});
});
