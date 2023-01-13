import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, OldComponentPreview, DocContainer } from "@docutils";
import CodeTagsComponent from "@components/CodeTags";
import Button from "@components/Button";

import { overviewTags } from "./constants";

const Overview = () => (
    <section id="tag-overview">
        <h2 id="overview">Overview</h2>
        <OldComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewTags} codeFigure/>
        <section>
            <h3>When to consider something else</h3>
            <ul>
                <li>To show the status of an object, use the <Link to="/components/badge">badge</Link> or the <Link to="/components/status">status</Link> component instead.</li>
            </ul>
        </section>
        <section>
            <h3>How to use tags</h3>
            <div className="row">
                <div className="col-lg-6">
                    <div className="slab slab-plain slab-border-success">
                        <h3>Do</h3>
                        <div className="d-flex flex-column justify-content-center pb-4 pt-3">
                            <button id="tag-dropdown-example" className="btn btn-secondary btn-xs">Color <i className="material-icons ml-1">keyboard_arrow_down</i></button>
                            <div className="d-flex  flex-row">
                                <CodeTagsComponent className="mr-2" removable type="tertiary" text="Red"/>
                                <CodeTagsComponent className="mr-2" removable type="tertiary" text="Blue"/>
                            </div>
                        </div>
                    </div>
                    <p>Removable tags are related to a input component that allows to add and remove tags. Aim to keep the related component close so the user understands the relation.</p>
                </div>
                <div className="col-lg-6">
                    <div className="slab slab-plain slab-border-success">
                        <h3>Do</h3>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex align-items-center pt-4 pb-5">
                                <CodeTagsComponent className="mr-2" removable type="tertiary" text="Invoice"/>
                                <CodeTagsComponent className="mr-2" removable type="tertiary" text="Card"/>
                                <Button size="sm" type="link" label="Clear filters"/>
                            </div>
                        </div>
                    </div>
                    <p>It`s recommended to add a bulk remove action next to a group with removable tags.</p>
                </div>
            </div>
        </section>
    </section>
);

const ContentGuidelines = () => (
    <section id="tags-content-guidelines">
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="slab slab-plain h-100 w-100 align-items-center d-flex justify-content-center py-5">
            <CodeTagsComponent className="mr-2" text="Default" type="tertiary"/>
            <CodeTagsComponent className="mr-2" removable type="tertiary" text="Removable"/>
            <CodeTagsComponent code="Code" type="tertiary"/>
        </div>

        <ul>
            <li>Keep the <b>label</b> short and concise, use 1-2 words.</li>
        </ul>
    </section>
);

const CodeTags = () => (
    <DocContainer >
        <p className="lead">Tags are used to label, categorize and organize items using keywords that describe them. Tags can for example be used in filters to represent selected filter values or in documentation to present inline code.</p>
        <Overview />
        <ContentGuidelines/>
    </DocContainer>
);

export default CodeTags;

/* for testing */
export { Overview, ContentGuidelines };
