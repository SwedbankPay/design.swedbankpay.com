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
        <h2 id="links">Links</h2>
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
    <section id="action-link-container">
        <h2 id="action-links">Action links</h2>
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
                <div className="slab slab-plain slab-border-success" >
                    <h4>Do</h4>
                    <div className="d-flex justify-content-center mt-4 mb-2 flex-column">
                        <InputComponent type="text" label="Name"/>
                        <InputComponent type="text" label="Email" placeholder="name@email.com"/>
                        <div className="d-flex flex-row"><CheckboxComponent/><p>I agree to terms of use</p></div>
                        <ButtonComponent type="primary" label="Submit" fullWidth/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error">
                    <h4>Don&apos;t</h4>
                    <div className="d-flex justify-content-center mt-4 mb-2 flex-column">
                        <InputComponent type="text" label="Name"/>
                        <InputComponent type="text" label="Email" placeholder="name@email.com"/>
                        <div className="d-flex flex-row"><CheckboxComponent/><p>I agree to terms of use</p></div>
                        <ActionLinkComponent linkText="Submit"/>
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-3">Use a <Link to="/components/buttons">button</Link> instead of an action link for an action like for instance submitting a form.</p>

    </section>
);

const ContentGuidelines = () => (
    <section id="link-content-guidelines-container">
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success h-100 pb-5" >
                    <h4>Do</h4>
                    <div className="d-flex justify-content-center mb-2">
                        <LinkComponent linkText="Read our terms and conditions"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error h-100 pb-5">
                    <h4>Don&apos;t</h4>
                    <div className="d-inline justify-content-center mb-2">
                        <LinkComponent linkText="Click here"/> to read our term and conditions.
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-3">Avoid using &quot;click here&quot;, links should not need supporting copy to make sense</p>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success h-100 pb-5" >
                    <h4>Do</h4>
                    <div className="d-inline justify-content-center mb-2">
                        <LinkComponent linkText="View our opening hours"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error h-100 pb-5">
                    <h4>Don&apos;t</h4>
                    <div className="d-inline justify-content-center mb-2">
                        <LinkComponent linkText="View more"/>
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-3">Make sure the link makes it clear what content the link goes to.</p>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success h-100 pb-5" >
                    <h4>Do</h4>
                    <div className="justify-content-center mt-4 mb-2 d-inline">
                        Here you can <LinkComponent linkText="read about the browsers we recommend"/>.
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error h-100 pb-5">
                    <h4>Don&apos;t</h4>
                    <div className="d-flex justify-content-center mb-2">
                        <LinkComponent linkText="Here you can read about the browsers we recommend."/>
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-3">Make links as short as possible whilst still making them clear. Don&apost; include several sentences or preceding articles or punctuation marks.</p>
    </section>
);

const Links = () => (
    <DocContainer docToc>
        <section id="link-doc">
            <p className="lead">
                Links are used as navigational elements and can be used on their own or inline within paragraphs of text.
            </p>
            <Overview/>
            <ActionLink/>
            <ContentGuidelines/>
        </section>
    </DocContainer>
);

export default Links;

