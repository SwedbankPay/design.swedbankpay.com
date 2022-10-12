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

export const leadingExample = (
    <table className="table table-plain">
        <thead>
            <tr>
                <th scope="col">Status</th>
                <th scope="col">Invoice number</th>
                <th scope="col">Due date</th>
                <th className="text-right" scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span className="status status-neutral">Unpaid</span></td>
                <td>123456</td>
                <td>2020-08-19</td>
                <td className="text-right">1079,00</td>
            </tr>
            <tr>
                <td><span className="status status-success">Paid</span></td>
                <td>123455</td>
                <td>2020-07-19</td>
                <td className="text-right">1945,00</td>
            </tr>
            <tr>
                <td><span className="status status-warning">Overdue</span></td>
                <td>123454</td>
                <td>2020-06-19</td>
                <td className="text-right">1814,00</td>
            </tr>
            <tr>
                <td><span className="status status-danger">Sent to collection</span></td>
                <td>123452</td>
                <td>2020-04-19</td>
                <td className="text-right">1337,00</td>
            </tr>
            <tr>
                <td><span className="status status-inactive">Reserved</span></td>
                <td>123453</td>
                <td>1994-02-22</td>
                <td className="text-right">69 420,00</td>
            </tr>
        </tbody>
    </table>
);

export const trailingExample = (
    <table className="table table-plain">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th className="text-right" scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Micheal Scott</td>
                <td className="d-flex align-items-center justify-content-end"><span className="status status-right status-neutral">Current Manager</span></td>
            </tr>
            <tr>
                <td>Dwight Shrute</td>
                <td className="d-flex align-items-center justify-content-end"><span className="status status-right status-success">Assistant (to the) manager</span></td>
            </tr>
            <tr>
                <td>Jim Halpert</td>
                <td className="d-flex align-items-center justify-content-end"><span className="status status-right status-warning">Time waster</span></td>
            </tr>
            <tr>
                <td>Todd Packer</td>
                <td className="d-flex align-items-center justify-content-end"><span className="status status-right status-danger">Former employee</span></td>
            </tr>
            <tr>
                <td>Pam Beesly</td>
                <td className="d-flex align-items-center justify-content-end"><span className="status status-right status-inactive">No experience</span></td>
            </tr>
        </tbody>
    </table>
);
