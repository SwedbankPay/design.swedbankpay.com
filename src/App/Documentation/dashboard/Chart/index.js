import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";
import { chart } from "$/px-script/dashboard";

const Bar = () => (
    <>
        <h2 id="bar">Bar</h2>
        <p>To add a simple bar chart.</p>
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
    beginAtZero: true,
};
px.chart("test", options);
            `}
        </ComponentPreview>
        <h3>Multiple datasets</h3>
        <p>You can add multiple datasets</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="multi-bar-chart" />
        </ComponentPreview>
        <h3>Stacked bar</h3>
        <p>You can stack</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="stacked-multi-bar-chart" />
        </ComponentPreview>
    </>
);

const Pie = () => (
    <>
        <h2 id="pie">Pie</h2>
        <p>To add a simple pie chart.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <canvas id="simple-pie-chart" />
        </ComponentPreview>
    </>
);

const ChartText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">We are using <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">chart.js</a>.</p>
        <Bar />
        <Pie />
    </div>
);

class Chart extends Component {
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

        chart("simple-pie-chart", {
            type: "pie",
            data: {
                labels: ["Test1", "Test2", "Test3"],
                datasets: [
                    {
                        data: [10, 20, 30]
                    }
                ]
            }
        });

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
                label: "Paid with credit Vipps",
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

export default Chart;

/* For testing */
export { Bar, ChartText };
