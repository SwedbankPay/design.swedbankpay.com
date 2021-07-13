import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Radio from "@components/FormComponents/Radio";
import { radiobuttonShowCase, doOptions, dontOptions } from "./constants";
import CodeTags from "@components/CodeTags";

const HowTo = () => (
    <section>
        <h3>How to setup radio button group</h3>
        <div className="row">
            <div className="col-6">
                <div className="slab slab-plain slab-border-success">
                    <span className="h3">Do</span>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 pb-5">
                            <Radio groupTitle="Card type" name="radio-do-example" options={doOptions} group/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="slab slab-plain slab-border-error h-100">
                    <span className="h3">Don&#x27;t</span>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 w-50">
                            <Radio groupTitle="Card type" name="radio-dont-example" options={dontOptions} group/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>

        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={radiobuttonShowCase} codeFigure />

        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>
                When you want to present multiple choices where the user can select one or more choice at the same time, the <Link to="/components/checkbox">checkbox</Link> component should be used instead of radio buttons.
            </li>
        </ul>

        <HowTo />
    </>
);

const ContentGuidelines = () => (
    <>
        <h2 id="content-guidelines">Content guidelines</h2>
        <ul className="list list-bullet">
            <li>The <b>Group heading</b> for the radio button group should be descriptive, explaining the context and what actions the user is choosing from. </li>
            <li>The <b>radio button label</b> should be short, to the point and clearly explain the option. It is also preferred to have fewer than three words per label as longer words could extend a label to multiple rows which could disrupt the reading experience.</li>
        </ul>
    </>
);

const DeveloperDocumentation = () => (
    <section>
        <h2>Developer documentation</h2>
        <span className="h3 d-inline-block mt-3">Disabled state</span>
        <p>Disable a radio button by adding <CodeTags type="primary" code="disabled"/> attribute to the desired radio button. You can also disable the <CodeTags type="secondary" code=".form-group"/> or <CodeTags type="primary" code="fieldset"/> in which the radio button is located, refer to <Link to="/components/forms">forms</Link> for more info.</p>

        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="d-flex justify-content-center">
                <Radio id="radio-example-10" label="Radio button label" name="radio-example" disabled checked/>
            </div>
        </ComponentPreview>
    </section>
);

const RadioButton = () => (
    <DocContainer>
        <p className="lead">The radio button component should be used when the user are presented with a list of options where only one choice can be selected.</p>
        <Overview />
        <ContentGuidelines />
        <DeveloperDocumentation />
    </DocContainer>
);

export default RadioButton;

/* for testing */
export { Overview, ContentGuidelines, DeveloperDocumentation, HowTo };
