import React, { Component } from "react";

import { ComponentPreview, DocToc, Property, ExperimentalComponentAlert } from "#";
import Chart from "@/Chart";

const SimpleLine = () => {
    const chartOptions = {
        type: "line",
        data: {
            labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [
                {
                    label: "TI Prize Pool money",
                    data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53]
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
    };

    return (
        <>
            <h2 id="line">Line</h2>
            <p>To add a simple pie chart.</p>
            <ComponentPreview language="html" showCasePanel codeFigure >
                <Chart id="simple-line-chart" options={chartOptions} />
            </ComponentPreview>
            <ComponentPreview language="javascript" codeFigure >
                {`
const options = {
    type: "line",
    data: {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "TI Prize Pool money",
                data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53]
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
};
px.chart("simple-line-chart", options);
                `}
            </ComponentPreview>
        </>
    );
};

const AdvancedOptions = () => {
    const chartOptions = {
        type: "line",
        data: {
            labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [
                {
                    label: "TI Prize Pool money",
                    data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53]
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
    };

    return (
        <>
            <h2 id="line">Line</h2>
            <p>To add a simple pie chart.</p>
            <ComponentPreview language="html" showCasePanel codeFigure >
                <Chart id="simple-line-chart" options={chartOptions} />
            </ComponentPreview>
            <ComponentPreview language="javascript" codeFigure >
                {`
const options = {
    type: "line",
    data: {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "TI Prize Pool money",
                data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53]
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
};
px.chart("simple-line-chart", options);
                `}
            </ComponentPreview>
        </>
    );
};

const AvailableOptions = () => (
    <>
        <h2 id="available-options">Available options</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>type</code></td>
                    <td>Enum</td>
                    <td><Property value={"\"\""} /></td>
                    <td><Property value={"\"line\""} /> or <Property value={"\"doughnut\""} /></td>
                </tr>
                <tr>
                    <td><code>cutoutPercentage</code></td>
                    <td>Number</td>
                    <td><Property value="50" /> - for doughnut<br /> <Property value="0" /> - for pie</td>
                    <td>The percentage of the chart that is cut out of the middle.</td>
                </tr>
                <tr>
                    <td><code>data.labels</code></td>
                    <td>Array of Strings</td>
                    <td><Property value={"[]"} /></td>
                    <td>Labels for each data value in the datasets.</td>
                </tr>
                <tr>
                    <td><code>data.datasets</code></td>
                    <td>Array of Objects</td>
                    <td><Property value={"[]"} /></td>
                    <td>Contains the datasets you want to render.</td>
                </tr>
                <tr>
                    <td><code>data.datasets.label</code></td>
                    <td>String</td>
                    <td><Property value={"\"\""} /></td>
                    <td>Label for the dataset.</td>
                </tr>
                <tr>
                    <td><code>data.datasets.data</code></td>
                    <td>Array</td>
                    <td><Property value={"[]"} /></td>
                    <td>Data, will be grouped under <code>data.labels</code>.</td>
                </tr>
            </tbody>
        </table>
    </>
);

const LineText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">If Johnny Cash could, then maybe you too can walk the...</p>
        <SimpleLine />
        <AvailableOptions />
    </div>
);

class Line extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <LineText />
                    <DocToc component={LineText} />
                </div>
            </div>
        );
    }
}

export default Line;

/* For testing */
export { SimpleLine, AvailableOptions, LineText };

