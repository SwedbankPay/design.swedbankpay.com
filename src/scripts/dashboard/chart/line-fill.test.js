import initLineFillChart from "./line-fill";

describe("scripts - dashboard: line chart", () => {
	it("initLineChart is defined", () => {
		expect(initLineFillChart).toBeDefined();
	});

	it("returns correct dataset", () => {
		const dataset = initLineFillChart(
			{
				type: "line",
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
			type: "line",
			data: {
				labels: ["Test#1", "Test#2", "Test#3"],
				datasets: [
					{
						data: [1, 2, 3],
						backgroundColor: "rgba(TEST, 0.1)",
						borderColor: "rgba(TEST, 1)",
						pointBackgroundColor: "rgba(TEST, 1)",
						pointHoverBackgroundColor: "rgba(TEST, 1)",
						pointHoverBorderColor: "rgba(TEST, 1)",
						pointBorderColor: "rgba(TEST, 1)",
						pointBorderWidth: 2,
						borderWidth: 4,
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
