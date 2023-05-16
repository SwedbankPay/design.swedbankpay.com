import initPieChart from "./pie";

describe("scripts - dashboard: pie chart", () => {
	it("initPieChart is defined", () => {
		expect(initPieChart).toBeDefined();
	});

	it("returns correct dataset", () => {
		const dataset = initPieChart(
			{
				type: "pie",
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
			type: "pie",
			data: {
				labels: ["Test#1", "Test#2", "Test#3"],
				datasets: [
					{
						data: [1, 2, 3],
						backgroundColor: [
							"rgba(TEST, 1)",
							"rgba(TEST2, 1)",
							"rgba(TEST3, 1)",
						],
						borderColor: ["rgba(TEST, 1)", "rgba(TEST2, 1)", "rgba(TEST3, 1)"],
						hoverBackgroundColor: [
							"rgba(TEST, 1)",
							"rgba(TEST2, 1)",
							"rgba(TEST3, 1)",
						],
						hoverBorderColor: [
							"rgba(TEST, 1)",
							"rgba(TEST2, 1)",
							"rgba(TEST3, 1)",
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
});
