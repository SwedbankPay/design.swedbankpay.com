import React, { Component } from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Chart from "@components/Chart";
import CodeTags from "@components/CodeTags";
import Introduction from "./Introduction";
import Alert from "@components/Alert";

const AccessibilityAlert = () => (
    <Alert type="informative" icon="info" className="mt-3" text={
        <p><b>Accessibility considerations:</b><br/>
        Remember to include at least two alternate ways for interpreting the data. Either by showing the chart data in a table or by providing a text summary in the <CodeTags type="primary" code="aria-label"/>.
        </p>} />
);

const LineChart = () => (
    <>
        <h2 id="line-chart">Line chart</h2>
        <p className="lead">If Johnny Cash could, then you too should be able to...</p>
        <p>A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.</p>
        <p>See <a href="https://www.chartjs.org/docs/latest/charts/line.html" target="_blank" rel="noopener noreferrer">chart.js</a> for more information on line charts.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="simple-line-chart" options={{
                type: "line",
                data: {
                    labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
                    datasets: [
                        {
                            label: "Peak",
                            data: [261, 673, 962, 1067, 1007, 779]
                        }
                    ]
                }
            }} description="Line chart example: From the beginning, the values has rapidly increased from 261 in 2013 to 1067 in 2016, which also was the peak. Post 2016 the values have slowly decreased to 779 in 2018."/>
            <table className="table table-plain px-5">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>2013</th>
                        <th>2014</th>
                        <th>2015</th>
                        <th>2016</th>
                        <th>2017</th>
                        <th>2018</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Peak</td>
                        <td>261</td>
                        <td>673</td>
                        <td>962</td>
                        <td>1067</td>
                        <td>1007</td>
                        <td>779</td>
                    </tr>
                </tbody>
            </table>
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("simple-line-chart", {
                    type: "line",
                    data: {
                        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
                        datasets: [
                            {
                                label: "Peak",
                                data: [261, 673, 962, 1067, 1007, 779]
                            }
                        ]
                    }
                });
            `}
        </ComponentPreview>

        <h3>Stepped and dashed line</h3>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="stepped-dashed-line-chart" options={{
                type: "line",
                data: {
                    labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
                    datasets: [
                        {
                            label: "Active users",
                            data: [1815, 1958, 2080, 2210, 2341, 2471, 2600, 2725],
                            steppedLine: true
                        },
                        {
                            label: "Registered users",
                            data: [2196, 2327, 2421, 2573, 2644, 2767, 2913, 3004],
                            borderDash: [15, 5]
                        }
                    ]
                }
            }} description="Stepped and dashed line example"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("stepped-dashed-line-chart", {
                    type: "line",
                    data: {
                        labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
                        datasets: [
                            {
                                label: "Active users",
                                data: [1815, 1958, 2080, 2210, 2341, 2471, 2600, 2725],
                                steppedLine: true
                            },
                            {
                                label: "Registered users",
                                data: [2196, 2327, 2421, 2573, 2644, 2767, 2913, 3004],
                                borderDash: [15, 5]
                            }
                        ]
                    }
                });
            `}
        </ComponentPreview>

        <h3>Advanced options</h3>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="advanced-line-chart" options={{
                type: "line",
                data: {
                    labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                    datasets: [
                        {
                            label: "DotA2 TI Prize Pool",
                            data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53]
                        },
                        {
                            label: "LoL World Championship Prize Pool",
                            data: [0.1, 2, 2.05, 2.13, 2.13, 5.07, 4.94, 2.25]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "In millions"
                            },
                            ticks: {
                                callback: value => `$${value}`
                            }
                        }]
                    }
                }
            }} description="Advanced line example"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("advanced-line-chart", {
                    type: "line",
                    data: {
                        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                        datasets: [
                            {
                                label: "DotA2 TI Prize Pool",
                                data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53]
                            },
                            {
                                label: "LoL World Championship Prize Pool",
                                data: [0.1, 2, 2.05, 2.13, 2.13, 5.07, 4.94, 2.25]
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: "In millions"
                                },
                                ticks: {
                                    callback: value => \`$\${value}\`
                                }
                            }]
                        }
                    }
                });
            `}
        </ComponentPreview>

        <h3>With fill</h3>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="line-fill-chart" options={{
                type: "line-fill",
                data: {
                    labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
                    datasets: [
                        {
                            label: "Peak",
                            data: [261, 673, 962, 1067, 1007, 779],
                            fill: true
                        }
                    ]
                }
            }} description="Line example with fill"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("line-fill-chart", {
                    type: "line-fill",
                    data: {
                        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
                        datasets: [
                            {
                                label: "Peak",
                                data: [261, 673, 962, 1067, 1007, 779],
                                fill: true
                            }
                        ]
                    }
                });
            `}
        </ComponentPreview>
    </>
);

const BarChart = () => (
    <>
        <h2 id="bar-chart">Bar chart</h2>
        <p className="lead">A priest and a rabbi walked into a bar...</p>
        <p>A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</p>
        <p>See <a href="https://www.chartjs.org/docs/latest/charts/bar.html" target="_blank" rel="noopener noreferrer">chart.js</a> for more information on bar charts.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="simple-bar-chart" options={{
                type: "bar",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Hours of daylight",
                            data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }} description="Bar chart example"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("simple-bar-chart", {
                    type: "bar",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        datasets: [
                            {
                                label: "Hours of daylight",
                                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            `}
        </ComponentPreview>

        <h3>Multiple datasets</h3>
        <p>You can add multiple datasets</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="multi-bar-chart" options={{
                type: "bar",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Hours of daylight",
                            data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
                        },
                        {
                            label: "Total rain (in cm)",
                            data: [4.9, 3.6, 4.7, 4.1, 5.3, 6.5, 8.1, 8.9, 9, 8.4, 7.3, 5.5]
                        },
                        {
                            label: "Average temperature (in celcius)",
                            data: [-1.7, -4.1, -2.3, 6.5, 16.1, 17.9, 22.2, 16.3, 12.5, 7.4, 1.6, -1.5]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }} description="Multiple datasets example"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("multi-bar-chart", {
                    type: "bar",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        datasets: [
                            {
                                label: "Hours of daylight",
                                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
                            },
                            {
                                label: "Total rain (in cm)",
                                data: [4.9, 3.6, 4.7, 4.1, 5.3, 6.5, 8.1, 8.9, 9, 8.4, 7.3, 5.5]
                            },
                            {
                                label: "Average temperature (in celcius)",
                                data: [-1.7, -4.1, -2.3, 6.5, 16.1, 17.9, 22.2, 16.3, 12.5, 7.4, 1.6, -1.5]
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            `}
        </ComponentPreview>

        <h3>Stacked bar</h3>
        <p className="lead">You can stack, because a stacked bar is almost as good as a stocked one</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="stacked-multi-bar-chart" options={{
                type: "bar",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Paid with cash",
                            data: [19, 23, 29, 24, 28, 33, 21, 24, 20, 17, 23, 24]
                        },
                        {
                            label: "Paid with credit card",
                            data: [31, 29, 32, 17, 25, 32, 28, 30, 24, 22, 20, 37]
                        },
                        {
                            label: "Paid with Vipps",
                            data: [11, 9, 7, 12, 4, 13, 8, 10, 4, 1, 13, 16]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            stacked: true
                        }]
                    }
                }
            }} description="Stacked bar example"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("stacked-multi-bar-chart", {
                    type: "bar",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        datasets: [
                            {
                                label: "Paid with cash",
                                data: [19, 23, 29, 24, 28, 33, 21, 24, 20, 17, 23, 24]
                            },
                            {
                                label: "Paid with credit card",
                                data: [31, 29, 32, 17, 25, 32, 28, 30, 24, 22, 20, 37]
                            },
                            {
                                label: "Paid with Vipps",
                                data: [11, 9, 7, 12, 4, 13, 8, 10, 4, 1, 13, 16]
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                stacked: true,
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                stacked: true
                            }]
                        }
                    }
                });
            `}
        </ComponentPreview>
    </>
);

const DoughnutAndPieCharts = () => (
    <>
        <h2 id="doughnut-and-pie-charts">Doughnut and Pie charts</h2>
        <p className="lead">Stress cannot exist in the presence of pie...</p>
        <p>Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.</p>
        <p>See <a href="https://www.chartjs.org/docs/latest/charts/doughnut.html" target="_blank" rel="noopener noreferrer">chart.js</a> for more information on doughnut and pie charts.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="simple-pie-chart" options={{
                type: "pie",
                data: {
                    labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
                    datasets: [
                        {
                            data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
                        }
                    ]
                }
            }} description="Pie chart example"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("simple-pie-chart", {
                    type: "pie",
                    data: {
                        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
                        datasets: [
                            {
                                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
                            }
                        ]
                    }
                });
            `}
        </ComponentPreview>

        <h2>Doughnut</h2>
        <p className="lead">Did anyone say <code className="token string">doughnut</code>?</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="doughnut-chart" options={{
                type: "doughnut",
                data: {
                    labels: ["PC and Mac", "Smartphones and Tablets", "PS4/PRO", "VR Headsets", "Xbox one/Scorpio", "Web Browsers", "Linux", "Nintendo Switch", "Other"],
                    datasets: [
                        {
                            data: [53, 38, 27, 24, 22, 13, 7, 3, 9]
                        }
                    ]
                }
            }} description="Doughnut example"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("doughnut-chart", {
                    type: "doughnut",
                    data: {
                        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
                        datasets: [
                            {
                                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
                            }
                        ]
                    }
                });
            `}
        </ComponentPreview>
    </>
);

const MixingTypes = () => (
    <>
        <h2 id="mixing-types">Mixing types</h2>
        <p className="lead">With Chart.js, it is possible to create <a href="https://www.chartjs.org/docs/latest/charts/mixed.html" target="_blank" rel="noopener noreferrer">mixed charts</a> that are a combination of two or more different chart types. A common example is a bar chart that also includes a line dataset.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="mixed-chart" options={{
                type: "bar",
                data: {
                    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
                    datasets: [
                        {
                            label: "Growth",
                            data: [20, 25, 30]
                        },
                        {
                            label: "Expected Growth",
                            data: [20, 25, 30, 35, 40, 45],
                            type: "line"
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }} description="Mixing charts example"/>
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("mixed-chart", {
                    type: "bar",
                    data: {
                        labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
                        datasets: [
                            {
                                label: "Growth",
                                data: [20, 25, 30]
                            },
                            {
                                label: "Expected Growth",
                                data: [20, 25, 30, 35, 40, 45],
                                type: "line" // Changes this dataset to become a line
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            `}
        </ComponentPreview>
    </>
);

const CustomColors = () => (
    <>
        <h2 id="custom-colors">Custom colors</h2>
        <p>Except for the three first colors, the rest of the colors are customizable. Call <CodeTags type="secondary" code="dg.chart" /> with a last optional argument consisting of a list of RGB color codes.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="custom-color-pie"
                options={{
                    type: "pie",
                    data: {
                        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
                        datasets: [
                            {
                                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
                            }
                        ]
                    }
                }}
                colorPool={["81, 43, 43",
                    "81, 151, 27",
                    "163, 139, 128",
                    "114, 96, 94",
                    "197, 19, 28"
                ]}
                description="Custom colors example"
            />
        </ComponentPreview>
        <AccessibilityAlert/>
        <ComponentPreview language="javascript" codeFigure >
            {`
                dg.chart("custom-color-pie", {
                    type: "pie",
                    data: {
                        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
                        datasets: [
                            {
                                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
                            }
                        ]
                    }
                },
                ["81, 43, 43",
                "81, 151, 27",
                "163, 139, 128",
                "114, 96, 94",
                "197, 19, 28"]);
            `}
        </ComponentPreview>

    </>
);

class Charts extends Component {
    render () {
        return (
            <DocContainer docToc>
                <Introduction />
                <LineChart />
                <BarChart />
                <DoughnutAndPieCharts />
                <MixingTypes />
                <CustomColors />
            </DocContainer>
        );
    }
}

export default Charts;

/* For testing */
export { LineChart, BarChart, DoughnutAndPieCharts, MixingTypes, CustomColors, AccessibilityAlert };

