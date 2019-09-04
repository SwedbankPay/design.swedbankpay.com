import initLineChart from "./line";

describe("scripts - dashboard: line chart", () => {
    it("initLineChart is defined", () => {
        expect(initLineChart).toBeDefined();
    });

    it("returns correct dataset", () => {
        const dataset = initLineChart({
            type: "line",
            data: {
                labels: ["Test#1", "Test#2", "Test#3"],
                datasets: [
                    {
                        data: [1, 2, 3]
                    }
                ]
            },
            options: {
                TEST: "TEST"
            }
        }, ["TEST", "TEST2", "TEST3"]);

        expect(dataset).toEqual({
            type: "line",
            data: {
                labels: ["Test#1", "Test#2", "Test#3"],
                datasets: [
                    {
                        data: [1, 2, 3],
                        backgroundColor: ["rgba(TEST, 0.2)", "rgba(TEST, 0.2)", "rgba(TEST, 0.2)"],
                        borderColor: ["rgba(TEST, 0.7)", "rgba(TEST, 0.7)", "rgba(TEST, 0.7)"],
                        pointBackgroundColor: ["rgba(TEST, 0.9)", "rgba(TEST, 0.9)", "rgba(TEST, 0.9)"],
                        pointHoverBackgroundColor: ["rgba(TEST, 1)", "rgba(TEST, 1)", "rgba(TEST, 1)"],
                        pointHoverBorderColor: ["rgba(TEST, 1)", "rgba(TEST, 1)", "rgba(TEST, 1)"],
                        pointBorderColor: ["rgba(TEST, 0.9)", "rgba(TEST, 0.9)", "rgba(TEST, 0.9)"],
                        pointBorderWidth: 2,
                        borderWidth: 4,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }
                ]
            },
            options: {
                TEST: "TEST"
            }
        });
    });
});
