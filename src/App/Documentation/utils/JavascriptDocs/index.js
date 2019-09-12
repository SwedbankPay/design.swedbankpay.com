import React from "react";
import { Link } from "react-router-dom";

import { DgScript } from "@docutils";

const OpenDocs = ({ componentName }) => (
    <>
        <tr>
            <td scope="row"><DgScript component={componentName} func="open" params={[`<${componentName.toLowerCase()}-id>`]} /></td>
            <td>Opens the given {componentName.toLowerCase()}</td>
        </tr>
    </>
);

const CloseDocs = ({ componentName }) => (
    <>
        <tr>
            <td scope="row"><DgScript component={componentName} func="close" params={[`<${componentName.toLowerCase()}-id>`]} /></td>
            <td>Closes the given {componentName.toLowerCase()}</td>
        </tr>
    </>
);

const JavascriptDocs = ({ componentName, open, close }) => (
    <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Function</th>
                    <th scope="col">Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row"><DgScript component={componentName} func="init" /></td>
                    <td><Link to="/docs/getting-started/javascript">Initializes</Link> {componentName.toLowerCase()}</td>
                </tr>
                {open ? <OpenDocs componentName={componentName} /> : null}
                {close ? <CloseDocs componentName={componentName} /> : null}
            </tbody>
        </table>
    </>
);

export default JavascriptDocs;

/* For testing */
export { OpenDocs, CloseDocs };
