import React from "react";

import { ComponentPreview, DocContainer, Property } from "@docutils";
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
        <h2 id="action-link-small-text">Action Link with small text</h2>
        <p>A small text can be displayed as a part of the Action Link. There are two types of Action Links with small text, one with the inline small text and one with the texts on different lines.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" smallText="This link directs to my page"/>
        </ComponentPreview>
        <p>Use <Property value=".action-link-multiline"/> for the Action Link with the texts on different lines.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" smallText="This link directs to my page" multiline={true} />
        </ComponentPreview>
    </>
);

const ActionLinkBadgeSmallText = () => (
    <>
        <h2 id="action-link-badge-small-text">Action Link with Badge and small text</h2>
        <p>Action Links can contain both Badge and small text</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" smallText="This link directs to my page" badge={badge}/>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" smallText="This link directs to my page" multiline={true} badge={badge}/>
        </ComponentPreview>
    </>
);

const ActionLinkNewTab = () => (
    <>
        <h2 id="action-link-new-tab">Action Link that opens a new tab</h2>
        <p>An Action Link used in cases where a new tab is supposed to open is provided. Use <Property value=".action-link-new-tab" /> when it is known that the target will open in a new tab. </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" newTab={true} />
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
        <ActionLinkSmallText />
        <ActionLinkBadgeSmallText />
        <ActionLinkNewTab />
    </DocContainer>
);

export default ActionLink;

/* For testing */
export { Overview, ActionLinkBadge, ActionLinkSmallText, ActionLinkBadgeSmallText, ActionLinkNewTab };
