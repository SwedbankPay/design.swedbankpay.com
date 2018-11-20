import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Attribute, Property, ExperimentalComponentAlert } from "#";
import { chart } from "$/px-script/dashboard";

const SimplePie = () => (
    <>
        <h2 id="pie">Pie</h2>
        <p>To add a simple pie chart.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="simple-pie-chart" />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
const options = {
    type: "pie",
    data: {
        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
        datasets: [
            {
                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
            }
        ]
    }
};
px.chart("simple-pie-chart", options);
            `}
        </ComponentPreview>
    </>
);

const Doughnut = () => (
    <>
        <h2 id="doughnut">Doughnut</h2>
        <p>To add a simple pie chart.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="doughnut-chart" />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
const options = {
    type: "doughnut",
    data: {
        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
        datasets: [
            {
                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
            }
        ]
    }
};
px.chart("doughnut-chart", options);
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
                    <td><Property value={"\"pie\""} /> or <Property value={"\"doughnut\""} /></td>
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

const ChartText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">A priest and a rabbi walked into a bar...</p>
        <SimplePie />
        <Doughnut />
        <AvailableOptions />
    </div>
);

class Bar extends Component {
    componentDidMount () {
        chart("simple-pie-chart", {
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

        chart("doughnut-chart", {
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
export { SimplePie, AvailableOptions, ChartText };

