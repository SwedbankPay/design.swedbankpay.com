import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Be aware of what color you use when deciding what message you want to convey. A completion status should not use a warning or danger status,
            that is why <CodeTags type="secondary" code=".status-success" /> exists. <b>NOTE:</b> Be careful not to rely solely on the color of the status icon to convey
            your message.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure removeList>
            <ul className="list status-list">
                <li>
                    <span className="status status-neutral">Neutral</span>
                </li>
                <li>
                    <span className="status status-success">Success</span>
                </li>
                <li>
                    <span className="status status-warning">Mild Warning</span>
                </li>
                <li>
                    <span className="status status-warning-2">Warning</span>
                </li>
                <li>
                    <span className="status status-danger">Danger</span>
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const ExampleUse = () => (
    <>
        <h2 id="example-use">Example of use</h2>
        <ComponentPreview language="html" showCasePanel >
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
                        <td className="text-right">1079,00</td>
                    </tr>
                    <tr>
                        <td><span className="status status-warning">Overdue</span></td>
                        <td>123454</td>
                        <td>2020-06-19</td>
                        <td className="text-right">1079,00</td>
                    </tr>
                    <tr>
                        <td><span className="status status-warning-2">Reminder</span></td>
                        <td>123453</td>
                        <td>2020-05-19</td>
                        <td className="text-right">1079,00</td>
                    </tr>
                    <tr>
                        <td><span className="status status-danger">Sent to collection</span></td>
                        <td>123452</td>
                        <td>2020-04-19</td>
                        <td className="text-right">1079,00</td>
                    </tr>
                </tbody>
            </table>
        </ComponentPreview>
    </>
);

const ExtendedUsage = () => (
    <>
        <h2 id="extended-usage">Extended usage</h2>
        <p>
            The status component inherits the size of its direct parent.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <h1 className="status status-neutral">Neutral</h1>
            <h2 className="status status-success">Success</h2>
            <h3 className="status status-warning">Mild Warning</h3>
            <h4 className="status status-warning-2">Warning</h4>
            <h5 className="status status-danger">Danger</h5>
        </ComponentPreview>
    </>
);

const Status = () => (
    <DocContainer docToc>
        <p className="lead">
            The status component is a good way to convey to the user the state of something.
        </p>
        <Overview />
        <ExampleUse />
        <ExtendedUsage />
    </DocContainer>
);

export default Status;

/* For testing */
export { Overview, ExampleUse, ExtendedUsage };
