import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";
import { Link } from "react-router-dom";
import { loaderShowCase, howToUse } from "./constants";

// TODO:Check with designer for precise size and color on loader
const Overview = () => (
    <section id="loader-page-overview">
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={loaderShowCase} codeFigure removeOuterTag/>

        <section>
            <h3>When to consider something else</h3>
            <ul className="list list-bullet">
                <li>If you want to present loading sequence in context, you can for example use a <Link to="/components/buttons">button</Link> with loading instead.</li>
            </ul>
        </section>

        <section id="loaders-how-to-use">
            <h3>How to use loader in context</h3>
            <div className="row">
                {howToUse.map(({ contents, description }, i) => (
                    <React.Fragment key={i}>
                        {contents.map(({ type, content }, i) => (
                            <div key={i} className="col-6">
                                <div key={i} className={`slab slab-plain slab-border-${type}`}>
                                    <span className="h3">{type === "success" ? "Do" : "Don't"}</span>
                                    <div className="d-flex justify-content-center px-3 h-100 align-items-center pb-5">
                                        {content}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <p className="m-3">{description}</p>
                    </React.Fragment>
                ))}
            </div>
        </section>
    </section>
);

const DeveloperDocumentation = () => (
    <>
        <h2 id="developer-documentation">Developer documentation</h2>
        <h3 id="centered-loader">Centered loader</h3>
        <p>
            To center the loader add class <CodeTags type="secondary" code=".loader-center" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="loader loader-center" />
        </ComponentPreview>
    </>
);

const Loader = () => (
    <DocContainer docToc>
        <p className="lead">
            The loader component should be used when the site or application is performing computation, notifying   the user that their action is being processed.
        </p>
        <Overview />
        <DeveloperDocumentation />
    </DocContainer>
);

export default Loader;

/* For testing */
export { Overview, DeveloperDocumentation };
