import React from "react";

import { ComponentPreview, DocToc } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overview... <code className="token property">.badge</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p>Badge <span className="badge badge-default">default</span></p>
            <p>Badge <span className="badge badge-brand">brand</span></p>
            <p>Badge <span className="badge badge-blue">blue</span></p>
            <p>Badge <span className="badge badge-purple">purple</span></p>
            <p>Badge <span className="badge badge-yellow">yellow</span></p>
            <p>Badge <span className="badge badge-red">red</span></p>
        </ComponentPreview>
    </>
);

const FurtherUsage = () => (
    <>
        <h2 id="further-usage">Further usage</h2>
        <p>Further usage... <code className="token property">.badge</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <h1>Badge <small className="badge badge-default">default</small></h1>
            <h2>Badge <small className="badge badge-brand">brand</small></h2>
            <h3>Badge <small className="badge badge-blue">blue</small></h3>
            <h4>Badge <small className="badge badge-purple">purple</small></h4>
            <h5>Badge <small className="badge badge-yellow">yellow</small></h5>
            <h6>Badge <small className="badge badge-red">red</small></h6>
        </ComponentPreview>
    </>
);

const BadgeText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Badge...</p>
        <Overview />
        <FurtherUsage />
    </div>
);

const Badge = () => (
    <div className="doc-container">
        <div className="row">
            <BadgeText />
            <DocToc component={BadgeText} />
        </div>
    </div>
);

export default Badge;

/* For testing */
export { Overview, FurtherUsage, BadgeText };
