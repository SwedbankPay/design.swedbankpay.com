import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import ActionLinkComponent from "@components/ActionLink";
import LinkComponent from "@components/Link";
import ButtonComponent from "@components/Button";
import InputComponent from "@components/InputGroup";
import CheckboxComponent from "@components/FormComponents/Checkbox";
import CodeTags from "@components/CodeTags";
import { Link } from "react-router-dom";
import { overviewLinks, overviewActionLinks } from "./constants";

const Overview = () => (
    <>
        <h2 id="preview">Links</h2>
        <p>Links should be used when you want to direct a user to a new section, page or website. They can be used on their own or inline within paragraphs.</p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewLinks} codeFigure removeOuterTag/>

        <span className="h3 d-inline-block mt-3">When to consider something else</span>
        <ul className="list list-bullet">
            <li>
                Use a <Link to="/components/buttons">button</Link> instead of a link for actions. As a general rule, if the user is making changes to the back or front-end of the site when clicking, you should use a button. If the user is being directed to a different page, you can use link.
            </li>
            <li>
                If you have a collection of links and want to highlight and make them appear more as call to actions consider using <a href="#action-link">action links</a>
            </li>
        </ul>
        <h3>How to use links</h3>

        <div className="row">
            <div className="col-12">
                <div className="slab slab-plain slab-border-error pb-5 h100" >
                    <h4>Don&apos;t</h4>
                    <div className="loader-preview-container d-flex justify-content-center align-items-center mt-3 pt-3">
                        <p>Paragraph text with a <LinkComponent linkText="Inline link" leftIcon="edit"/>.</p>
                    </div>
                </div>
                <p>Don&apos;t use a leading icon or strip the underline from an inline link. </p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success pb-5 h100" >
                    <h4>Do</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <div className="link-dark-background py-5 px-5">
                            <LinkComponent linkText="Standalone link" bright/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error pb-5 h100">
                    <h4>{"Don't"}</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <div className="link-dark-background p-5">
                            <LinkComponent linkText="Standalone link"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-3">If the background is too dark for the regular link color we recommend using a brighter font color with an underline.</p>
    </>
);

const ActionLink = () => (
    <>
        <h2 id="preview">Action links</h2>
        <p>Although links are to be used for navigation and not actions we sometimes have a need to highlight links and make them appear more as call to actions. In this case Action links, that will redirect the user to perform an action on another page, can be used. Actions links are normally used in a collection consisting of a few different action links with equally important actions to be made.</p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewActionLinks} codeFigure removeOuterTag/>
        <span className="h3 d-inline-block mt-3">When to consider something else</span>
        <ul className="list list-bullet">
            <li>
                Use a <Link to="/components/buttons">button</Link> instead of a link an action. As a general rule, if the user is making changes to the back or front-end of the site when clicking, you should use a button. If the user is being directed to a different page, you can use link.
            </li>
            <li>
                Use a standalone <Link to="/components/links">link</Link> instead of a action link if you don&apos;t need to highlight and make the links appear more as call to actions.
            </li>
        </ul>
        <h3>How to use action links</h3>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success pb-5 h100" >
                    <h4>Do</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4 flex-column">
                        <InputComponent type="text" label="Name"/>
                        <InputComponent type="text" label="Email" placeholder="name@email.com"/>
                        <div className="d-flex flex-row"><CheckboxComponent/><p>I agree to terms of use</p></div>
                        <ButtonComponent type="primary" label="Submit" fullWidth/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error pb-5 h100">
                    <div className="d-flex justify-content-center mt-4 mb-4">

                    </div>
                </div>
            </div>
        </div>
        <p className="mt-3">Use a <Link to="/components/buttons">button</Link> instead of an action link for an action like for instance submitting a form.</p>

    </>
);

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
        <p>Use links in small with legal texts, such as links to terms and conditions</p>
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
        <section id="link-doc">
            <p className="lead">
                Links are used as navigational elements and can be used on their own or inline within paragraphs of text.
            </p>
            <Overview/>
            <ActionLink />
        </section>
    </DocContainer>
);

export default Links;

/* For testing */
export { TextLinks, ButtonLinks, IconLinks, ActionLink, ActionLinkBadge, ActionLinkSmallText, ActionLinkBadgeSmallText, ActionLinkNewTab };
