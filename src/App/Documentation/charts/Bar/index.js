import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Attribute, Property, ExperimentalComponentAlert } from "#";
import { chart } from "$/px-script/dashboard";

const SimpleBar = () => (
    <>
        <h2 id="simple-bar">Simple bar</h2>
        <p>A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="simple-bar-chart" />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
const options = {
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
    beginAtZero: true
};
px.chart("simple-bar-chart", options);
            `}
        </ComponentPreview>
    </>
);

const HorizontalBar = () => (
    <>
        <h2 id="horizontal-bar">Horizontal bar</h2>
        <p>A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="horizontal-bar-chart" />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
const options = {
    type: "horizontalBar",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Hours of daylight",
                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
            }
        ]
    },
    beginAtZero: true
};
px.chart("horizontal-bar-chart", options);
            `}
        </ComponentPreview>
    </>
);

const MultipleDatasets = () => (
    <>
        <h2 id="multiple-datasets">Multiple datasets</h2>
        <p>You can add multiple datasets</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="multi-bar-chart" />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
const options = {
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
    beginAtZero: true
};
px.chart("multi-bar-chart", options);
            `}
        </ComponentPreview>
    </>
);

const StackedBar = () => (
    <>
        <h2 id="stacked-bar">Stacked bar</h2>
        <p>You can stack, because a stacked bar is almost as good as a stocked one</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="stacked-multi-bar-chart" />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
const options = {
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
    beginAtZero: true,
    stacked: true
};
px.chart("stacked-multi-bar-chart", options);
            `}
        </ComponentPreview>
    </>
);

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
                    <td><Property value={"\"bar\""} /> or <Property value={"\"horizontalBar\""} /></td>
                </tr>
                <tr>
                    <td><code>beginAtZero</code></td>
                    <td>Boolean</td>
                    <td><Property value="false" /></td>
                    <td>Wether the data will be rendered from zero or not.</td>
                </tr>
                <tr>
                    <td><code>stacked</code></td>
                    <td>Boolean</td>
                    <td><Property value="false" /></td>
                    <td>Wether the data will be stacked or not.</td>
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

const ChartText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">A priest and a rabbi walked into a bar...</p>
        <SimpleBar />
        <HorizontalBar />
        <MultipleDatasets />
        <StackedBar />
        <AvailableOptions />
    </div>
);

class Bar extends Component {
    componentDidMount () {
        const simpleBarOptions = {
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
            beginAtZero: true,
            stacked: false
        };

        chart("simple-bar-chart", simpleBarOptions);

        simpleBarOptions.type = "horizontalBar";
        chart("horizontal-bar-chart", simpleBarOptions);
        simpleBarOptions.type = "bar";

        simpleBarOptions.data.datasets = [
            ...simpleBarOptions.data.datasets,
            {
                label: "Total rain (in cm)",
                data: [4.9, 3.6, 4.7, 4.1, 5.3, 6.5, 8.1, 8.9, 9, 8.4, 7.3, 5.5]
            },
            {
                label: "Average temperature (in celcius)",
                data: [-1.7, -4.1, -2.3, 6.5, 16.1, 17.9, 22.2, 16.3, 12.5, 7.4, 1.6, -1.5]
            }
        ];

        chart("multi-bar-chart", simpleBarOptions);
        simpleBarOptions.data.datasets = [
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
        ];
        simpleBarOptions.stacked = true;

        chart("stacked-multi-bar-chart", simpleBarOptions);
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ChartText />
                    <DocToc component={ChartText} />
                </div>
            </div>
        );
    }
}

export default Bar;

/* For testing */
export { SimpleBar, HorizontalBar, MultipleDatasets, StackedBar, AvailableOptions, ChartText };
