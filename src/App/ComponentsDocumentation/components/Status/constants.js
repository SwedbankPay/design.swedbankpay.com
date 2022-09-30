import React from "react";

const Status = ({ right }) => (
    <ul className="list status-list">
        <li>
            <span className={`status${right ? " status-right" : ""} status-neutral`}>Neutral</span>
        </li>
        <li>
            <span className={`status${right ? " status-right" : ""} status-success`}>Success</span>
        </li>
        <li>
            <span className={`status${right ? " status-right" : ""} status-warning`}>Warning</span>
        </li>
        <li>
            <span className={`status${right ? " status-right" : ""} status-danger`}>Danger</span>
        </li>
        <li>
            <span className={`status${right ? " status-right" : ""} status-inactive`}>Inactive</span>
        </li>
    </ul>
);

export const showcaseStatusComponent = {
    id: "overviewStatus",
    elements: [
        {
            component: <Status/>,
            options: {
                checkbox: [
                    {
                        title: "Position",
                        inputs: [
                            {
                                id: "right",
                                name: "Trailing",
                                value: {
                                    right: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Status",
            description: "Additional information REGARDING STATUS AND PLACEMENT OF THE DOT"
        }
    ]
};
