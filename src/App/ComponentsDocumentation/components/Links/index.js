import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import ActionLinkComponent from "@components/ActionLink";
import LinkComponent from "@components/Link";
import ButtonComponent from "@components/Button";
import CodeTags from "@components/CodeTags";

const TextLinks = () => (
    <>
        <h2 id="text-links">Text links</h2>
        <p>Text links are links used in paragraphs of text.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p>{"\n"}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{"\n"}
                Ut enim ad minim veniam, quis nostrud <LinkComponent linkText="exercitation" /> ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n"}
            </p>
        </ComponentPreview>

        <h3>Small link</h3>
        <p>Use links in small with legal texts, such as links to terms and contitions</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <small>{"\n"}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{"\n"}
                Ut enim ad minim veniam, quis nostrud <LinkComponent linkText="exercitation" /> ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n"}
            </small>
        </ComponentPreview>
    </>
);

const ButtonLinks = () => (
    <>
        <h2 id="button-links">Links with buttons</h2>
        <p>
            To use links with buttons, for instance as a cancel button,
            use <CodeTags type="secondary" code=".btn.btn-link" /> in a <CodeTags type="primary" code="<button>" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ButtonComponent type="primary" label="Approve" />{"\n"}
            <ButtonComponent type="link" label="Cancel"/>
        </ComponentPreview>
    </>
);

const IconLinks = () => (
    <>
        <h2 id="icon-links">Links with icons</h2>
        <p>
            Use class <CodeTags type="secondary" code=".icon-link" /> on links with icons. Using icon with links can help further
            convey the result of clicking on the link, as can be seen in the examples below.
        </p>
        <h4>Navigates to a previous page</h4>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <LinkComponent linkText="My invoices" leftIcon="arrow_back_ios"/>
        </ComponentPreview>
        <h4>Enables editing</h4>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <LinkComponent linkText="My invoices" leftIcon="edit"/>
        </ComponentPreview>
        <h4>Opens in a new tab</h4>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <LinkComponent linkText="My invoices" rightIcon="open_in_new"/>
        </ComponentPreview>
    </>
);

const ActionLink = () => (
    <>
        <h2 id="action-link">Action link</h2>
        <p>Action links.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link"/>
        </ComponentPreview>
    </>
);

const badge = {
    type: "badge-default badge-number",
    text: "40"
};

const ActionLinkBadge = () => (
    <>
        <h2 id="action-link-badge">Action link with Badge</h2>
        <p>Action links.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" badge={badge}/>
        </ComponentPreview>
    </>
);

const ActionLinkSmallText = () => (
    <>
        <h2 id="action-link-small-text">Action link with small text</h2>
        <p>A small text can be displayed as a part of the Action Link. There are two types of Action Links with small text, one with the inline small text and one with the texts on different lines.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" smallText="This link directs to my page"/>
        </ComponentPreview>
        <p>Use <CodeTags type="secondary" code=".action-link-multiline"/> for the Action Link with the texts on different lines.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" smallText="This link directs to my page" multiline={true} />
        </ComponentPreview>
    </>
);

const ActionLinkBadgeSmallText = () => (
    <>
        <h2 id="action-link-badge-small-text">Action link with Badge and small text</h2>
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
        <h2 id="action-link-new-tab">Action link that opens a new tab</h2>
        <p>An Action Link used in cases where a new tab is supposed to open is provided. Use <CodeTags type="secondary" code=".action-link-new-tab" /> when it is known that the target will open in a new tab. </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionLinkComponent linkText="My link" newTab={true} />
        </ComponentPreview>
    </>
);

const Links = () => (
    <DocContainer docToc>
        <p className="lead">
            Links
        </p>
        <TextLinks />
        <ButtonLinks />
        <IconLinks />
        <ActionLink />
        <ActionLinkBadge />
        <ActionLinkSmallText />
        <ActionLinkBadgeSmallText />
        <ActionLinkNewTab />
    </DocContainer>
);

export default Links;

/* For testing */
export { TextLinks, ButtonLinks, IconLinks, ActionLink, ActionLinkBadge, ActionLinkSmallText, ActionLinkBadgeSmallText, ActionLinkNewTab };
