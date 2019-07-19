import React from "react";
import { Link } from "react-router-dom";

import { PxScript } from "#";

const OpenDocs = ({ componentName }) => (
    <>
        <p><PxScript component={componentName} func="open" params={[`<${componentName.toLowerCase()}-id>`]} /></p>
        <p>
            Opens the given {componentName.toLowerCase()}.
        </p>
    </>
);

const CloseDocs = ({ componentName }) => (
    <>
        <p><PxScript component={componentName} func="close" params={[`<${componentName.toLowerCase()}-id>`]} /></p>
        <p>
            Closes the given {componentName.toLowerCase()}.
        </p>
    </>
);

const JavascriptDocs = ({ componentName, open, close }) => (
    <>
        <p><PxScript component={componentName} func="init" /></p>
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
