import React from "react";

import { ComponentPreview, DocContainer } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Action links.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <a className="action-link" href="#">{"\n"}
                My link{"\n"}
            </a>{"\n"}
        </ComponentPreview>
    </>
);

const ActionLinkBadge = () => (
    <>
        <h2 id="action-link-badge">Action Link with Badge</h2>
        <p>Action links.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <a className="action-link" href="#">{"\n"}
                <span className="badge badge-brand">40</span> {"\n"}
                My link{"\n"}
            </a>{"\n"}
        </ComponentPreview>
    </>
);

const ActionLink = () => (
    <DocContainer docToc>
        <p className="lead">
            Action link
        </p>
        <Overview />
        <ActionLinkBadge />
    </DocContainer>
);

export default ActionLink;

/* For testing */
export { Overview, ActionLinkBadge };
