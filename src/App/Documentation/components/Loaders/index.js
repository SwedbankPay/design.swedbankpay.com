import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const BasicUsage = () => (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>
            To use a default loader add <CodeTags type="secondary" code=".loader" /> to a div.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="loader" />
        </ComponentPreview>
    </>
);

const Sizes = () => (
    <>
        <h2 id="sizes">Sizes</h2>
        <p>In addition to <CodeTags type="secondary" code=".loader" /> you can use <CodeTags type="secondary" code=".loader-sm" /> and <CodeTags type="secondary" code=".loader-lg" /> to decrease or increase the size of the loader.</p>
        <h3>Small</h3>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="loader loader-sm" />
        </ComponentPreview>
        <h3>Large</h3>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="loader loader-lg" />
        </ComponentPreview>
    </>
);

const MutedLoader = () => (
    <>
        <h2 id="muted-loader">Muted loader</h2>
        <p>
            Use class <CodeTags type="secondary" code=".loader-muted" /> to make the loader muted.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="loader loader-muted" />
        </ComponentPreview>
    </>
);

const Loaders = () => (
    <DocContainer docToc>
        <p className="lead">
            Use loaders to indicate to the user that your web application is loading.
        </p>
        <BasicUsage />
        <Sizes />
        <MutedLoader />
    </DocContainer>
);

export default Loaders;

/* For testing */
export { BasicUsage, Sizes, MutedLoader };
