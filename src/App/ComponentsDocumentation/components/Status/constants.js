import React from "react";

const Status = ({ right }) => (
    <ul className={`list status-list d-flex flex-column${right ? " align-items-end" : ""}`}>
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
            description: "The component has two different states; leading and trailing. Use the status most suitable for your solution. Please beware, when using the trailing option, you must self-add code to make it align correctly."
        }
    ]
};
