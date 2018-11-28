import React from "react";

import { DocContainer } from "#";
import { Chrome, Edge, Firefox, InternetExplorer, Opera, Safari } from "./BrowserIcons";

const BrowserSupport = () => (
    <DocContainer>
        <p className="lead">Currently supported browsers:</p>
        <table className="browser-support-table table">
            <thead>
                <tr>
                    <th>
                        <Chrome />
                    </th>
                    <th>
                        <Firefox />
                    </th>
                    <th>
                        <Edge />
                    </th>
                    <th>
                        <InternetExplorer />
                    </th>
                    <th>
                        <Opera />
                    </th>
                    <th>
                        <Safari />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="background-brand">Yes (v.66)</td>
                    <td className="background-warning">Partially</td>
                    <td className="background-warning">Partially</td>
                    <td className="background-warning">Partially</td>
                    <td className="background-warning">Partially</td>
                    <td className="background-warning">Partially</td>
                </tr>
            </tbody>
        </table>
    </DocContainer>
);

export default BrowserSupport;
