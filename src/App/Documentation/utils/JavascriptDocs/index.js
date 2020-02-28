import React from "react";
import { Link } from "react-router-dom";

import CodeTags from "@components/CodeTags";

import DocElement from "@docutils/JavascriptDocElement";

const OpenDocs = ({ componentName }) => (
    <>
        <DocElement
            code={<CodeTags type="secondary" code={`dg.${componentName.toLowerCase()}.open(<${componentName.toLowerCase()}-id>)`} params={[`<${componentName.toLowerCase()}-id>`]} />}
            description={
                <>
                    Opens the given {componentName.toLowerCase()}
                </>
            }
        />
    </>
);

const CloseDocs = ({ componentName }) => (
    <>
        <DocElement
            code={<CodeTags type="secondary" code={`dg.${componentName.toLowerCase()}.close(<${componentName.toLowerCase()}-id>)`} params={[`<${componentName.toLowerCase()}-id>`]} />}
            description={
                <>
                    Closes the given {componentName.toLowerCase()}
                </>
            }
        />
    </>
);

const JavascriptDocs = ({ componentName, open, close, others }) => (
    <>
        <ul className="item-list">
            <DocElement
                code={<CodeTags type="secondary" code={`dg.${componentName.toLowerCase()}.init()`} />}
                description={
                    <>
                        <Link to="/docs/getting-started/javascript">Initializes</Link> {componentName.toLowerCase()}
                    </>
                }
            />
            {open ? <OpenDocs componentName={componentName} /> : null}
            {close ? <CloseDocs componentName={componentName} /> : null}
            {others && others.map((DocComponent, i) => <DocComponent key={i} componentName={componentName} />)}
        </ul>
    </>
);

export default JavascriptDocs;

/* For testing */
export { OpenDocs, CloseDocs };
