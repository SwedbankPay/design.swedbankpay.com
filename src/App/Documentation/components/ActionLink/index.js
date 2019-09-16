import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import ActionLinkComponent from "@components/ActionLink";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Action links.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link"/>
        </ComponentPreview>
    </>
);

const badge = {
    type: "badge-yellow",
    text: "40"
};

const ActionLinkBadge = () => (
    <>
        <h2 id="action-link-badge">Action Link with Badge</h2>
        <p>Action links.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" badge={badge}/>
        </ComponentPreview>
    </>
);

const ActionLinkSmallText = () => (
    <>
        <h2 id="action-link-badge">Action Link with small text</h2>
        <p>A small text can be displayed as a part of the Action Link.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" smallText="This link directs to my page" />
        </ComponentPreview>
    </>
)

const ActionLink = () => (
    <DocContainer docToc>
        <p className="lead">
            Action link
        </p>
        <Overview />
        <ActionLinkBadge />
        <ActionLinkSmallText />
    </DocContainer>
);

export default ActionLink;

/* For testing */
export { Overview, ActionLinkBadge, ActionLinkSmallText };
