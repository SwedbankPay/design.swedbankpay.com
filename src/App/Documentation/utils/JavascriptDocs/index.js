import React from "react";
import { Link } from "react-router-dom";

import { PxScript } from "#";

const OpenDocs = ({ componentName }) => (
    <>
        <h4><PxScript component={componentName} func="open" params={[`<${componentName.toLowerCase()}-id>`]} /></h4>
        <p>
            Opens the given {componentName.toLowerCase()}.
        </p>
    </>
);

const CloseDocs = ({ componentName }) => (
    <>
        <h4><PxScript component={componentName} func="close" params={[`<${componentName.toLowerCase()}-id>`]} /></h4>
        <p>
            Closes the given {componentName.toLowerCase()}.
        </p>
    </>
);

const JavascriptDocs = ({ componentName, open, close }) => (
    <>
        <h4><PxScript component={componentName} func="init" /></h4>
        <p>
            <Link to="/docs/getting-started/javascript">Initializes</Link> {componentName.toLowerCase()}.
        </p>
        {open ? <OpenDocs componentName={componentName} /> : null}
        {close ? <CloseDocs componentName={componentName} /> : null}
    </>
);

export default JavascriptDocs;

/* For testing */
export { OpenDocs, CloseDocs };
