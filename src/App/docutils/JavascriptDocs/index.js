import React from "react";
import { Link } from "react-router-dom";

import CodeTags from "@components/CodeTags";

import DocElement from "@docutils/JavascriptDocElement";

const OpenDocs = ({ componentName }) => (
    <>
        <DocElement
            code={<CodeTags type="secondary" code={`dg.${componentName}.open(<${componentName}-id>)`} params={[`<${componentName}-id>`]} />}
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
            code={<CodeTags type="secondary" code={`dg.${componentName}.close(<${componentName}-id>)`} params={[`<${componentName}-id>`]} />}
            description={
                <>
                    Closes the given {componentName}
                </>
            }
        />
    </>
);

const JavascriptDocs = ({ componentName, open, close, others }) => (
    <>
        <ul className="item-list">
            <DocElement
                code={<CodeTags type="secondary" code={`dg.${componentName}.init(${componentName === "sidebar" ? "<sidebar-id>" : ""})`} />}
                description={
                    <>
                        <Link to="/getting-started/javascript">Initializes</Link> {componentName}
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
