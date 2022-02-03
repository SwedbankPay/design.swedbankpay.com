import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";
import Button from "@components/Button";

import { overviewTags } from "./constants";

const Overview = () => (
    <section id="tag-overview">
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewTags} codeFigure removeOuterTag/>
        <h3>When to consider something else</h3>
        <ul>
            <li>To show the status of an object, use the <Link to="/components/badge">badge</Link> or the <Link to="/components/status">status</Link> component instead.</li>
        </ul>

        <h3>How to use tags</h3>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success">
                    <h3>Do</h3>
                    <div className="d-flex flex-column h-75 justify-content-center py-5">
                        <h5>Dropdown menu</h5>
                        <div className="d-flex w-50  flex-row">
                            <Tag className="mr-2" removable type="tertiary" text="Red"/>
                            <Tag className="mr-2" removable type="tertiary" text="Blue"/>
                        </div>
                    </div>
                </div>
                <p>Removable tags are related to a input component that allows to add and remove tags. Aim to keep the related component close so the user understands the relation.</p>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success">
                    <h3>Do</h3>
                    <div className="d-flex flex-row h-75 align-items-center py-5">
                        <div className="d-flex align-items-center w-50 pb-2 pt-1">
                            <Tag className="mr-2" removable type="tertiary" text="Invoice"/>
                            <Tag className="mr-2" removable type="tertiary" text="Card"/>
                            <Button size="sm" type="link" label="Clear filters"/>
                        </div>
                    </div>
                </div>
                <p>It&apos;s recommended to add a bulk remove action next to a group with removable tags.</p>
            </div>
        </div>
    </section>
);

const ContentGuidelines = () => (
    <section id="tags-content-guidelines">
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="slab slab-plain h-100 w-100 align-items-center d-flex justify-content-center py-5">
            <Tag className="mr-2" text="Default" type="tertiary"/>
            <Tag className="mr-2" removable type="tertiary" text="Removable"/>
            <Tag className="mr-2" code text="Code" type="tertiary"/>
        </div>

        <ul>
            <li>Keep the <b>label</b> short and concise, use 1-2 words.</li>
        </ul>
    </section>
);

const DeveloperDocumentation = () => (
    <section id="tags-developer-documentation">
        <h2 id="developer-documentation">Developer documentation</h2>
    </section>
);

const Tags = () => (
    <DocContainer docToc >
        <p className="lead">Tags are used to label, categorize and organize items using keywords that describe them. Tags can for example be used in <Link to="/patterns/filters">filters</Link> to represent selected filter values or in documentation to present inline code.</p>
        <Overview />
        <ContentGuidelines/>
        <DeveloperDocumentation/>
    </DocContainer>
);

export default Tags;

/* for testing */
export { Overview, ContentGuidelines, DeveloperDocumentation };
