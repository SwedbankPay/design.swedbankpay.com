import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";
import { chart } from "$/px-script/dashboard";

const Overview = () => (
    <>
        <h2 id="quick-start">Quick start</h2>
        <p>To quickly add the dashboard theme to your project, include the snippets below in your project.</p>
        <ComponentPreview language="html" codeFigure>
            <canvas id="test-chart" width={400} height={400}></canvas>
        </ComponentPreview>
    </>
);

const ChartText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">We are using <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">chart.js</a>.</p>
        <Overview />
    </div>
);

class Chart extends Component {
    componentDidMount () {
        chart("test-chart", {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 1
                }]
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
export { Overview, ChartText };
