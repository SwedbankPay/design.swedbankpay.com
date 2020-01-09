import React from "react";
import PropTypes from "prop-types";

import Chart from "@components/Chart";

const CustomersDetailedCharts = ({ customerIdName, customerOrders, customerInquiries, createNumArray }) => {
    const datasetDataLength = customerOrders.length;
    const totalNumMessages = customerInquiries.reduce((accumulator, inquiry) => accumulator + inquiry.numMessages, 0);

    return (
        <>
            <h3>Orders</h3>
            <h4>Historical purchase prices</h4>
            <Chart
                id="customers-detailed-charts-1"
                options={{
                    type: "bar",
                    data: {
                        labels: [...Array(datasetDataLength).keys()].map(i => (2019 - (datasetDataLength - 1) + i).toString()),
                        datasets: [
                            {
                                label: customerIdName,
                                data: customerOrders,
                                fill: false
                            },
                            {
                                label: "Customers average",
                                data: createNumArray(datasetDataLength, 1000, 200),
                                fill: false
                            },
                            {
                                label: "Estimated",
                                data: createNumArray(datasetDataLength, 850, 200),
                                fill: false
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: "British Pound (£)"
                                }
                            }]
                        }
                    }
                }}
            />

            <h3>Inquiries</h3>
            <h4>Number of inquiry messages</h4>
            <Chart
                id="customers-detailed-charts-2"
                options={{
                    type: "line",
                    data: {
                        labels: customerInquiries.map(inquiry => inquiry.date),
                        datasets: [
                            {
                                label: customerIdName,
                                data: customerInquiries.map(inquiry => inquiry.numMessages),
                                fill: false
                            },
                            {
                                label: "Customers average",
                                data: createNumArray(customerInquiries.length, 3, 4), // The multiple Math.floor(Math.random) is there to achieve a less random looking distribution
                                fill: false
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
                }}
            />
            <div className="row">
                <div className="col-lg-6">
                    <h4>Status distribution</h4>
                    <Chart id="customers-detailed-charts-3"
                        options={{
                            type: "pie",
                            data: {
                                labels: ["Resolved", "Unresolved", "Unknown"],
                                datasets: [
                                    {
                                        data: [customerInquiries.filter(inquiry => inquiry.resolved).length, customerInquiries.filter(inquiry => !inquiry.resolved).length, 1]
                                    }
                                ]
                            }
                        }}
                    />
                </div>
                <div className="col-lg-6">
                    <h4>Time before response</h4>
                    <Chart id="customers-detailed-charts-4"
                        options={{
                            type: "pie",
                            data: {
                                labels: ["< 2 days", "< 1 week", "< 1 month", "< 3 months", "Other"],
                                datasets: [
                                    {
                                        data: [
                                            Math.floor(totalNumMessages * 0.4),
                                            Math.floor(totalNumMessages * 0.3),
                                            Math.floor(totalNumMessages * 0.15),
                                            Math.floor(totalNumMessages * 0.1),
                                            Math.floor(totalNumMessages * 0.05)
                                        ]
                                    }
                                ]
                            }
                        }}
                    />
                </div>
            </div>

        </>
    );
};

CustomersDetailedCharts.propTypes = {
    customerIdName: PropTypes.string.isRequired,
    customerOrders: PropTypes.arrayOf(PropTypes.number).isRequired,
    customerInquiries: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        numMessages: PropTypes.number.isRequired,
        resolved: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired
    })).isRequired
};

export default CustomersDetailedCharts;
