import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Radio from "@components/FormComponents/Radio";
import { radiobuttonShowCase, doOptions, dontOptions, ContentGuidelinesOptions, ErrorStateOptions } from "./constants";
import CodeTags from "@components/CodeTags";

const HowTo = () => (
    <section id="how-to-container">
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
                <p>Do use short labels of similar length and sort the options either in a logical or alphabetical order.</p>
            </div>
            <div className="col-6">
                <div className="slab slab-plain slab-border-error">
                    <span className="h3">Don&#x27;t</span>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 w-50">
                            <Radio groupTitle="Card type" name="radio-dont-example" options={dontOptions} group/>
                        </div>
                    </div>
                </div>
                <p>Avoid long labels sorted in an illogical order.</p>
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
                If you want to present multiple choices where the user can select more than one option, a <Link to="/components/checkbox">checkbox</Link> group should be used instead of radio buttons.
            </li>
            <li>
                If you want to present a large amount of options consider the <Link to="/components/select">select</Link> component instead of a radio button group to avoid overwhelming the user and to save space.
            </li>
        </ul>

        <HowTo />
    </>
);

const ContentGuidelines = () => (
    <>
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="slab slab-plain">
            <div className="d-flex flex-column align-items-center">
                <div>
                    <Radio groupTitle="Group label" name="radio-dont-example" options={ContentGuidelinesOptions} group/>
                </div>
            </div>
        </div>
        <ul className="list list-bullet">
            <li>The <b>group label</b> should be descriptive, explaining the context of the options to choose from.</li>
            <li>The <b>radio button label</b> should be short, to the point and clearly explain the option. It is also preferred to have fewer than three words per label as longer words could extend a label to multiple rows which could disrupt the reading experience.</li>
        </ul>
    </>
);

const DeveloperDocumentation = () => (
    <section>
        <h2>Developer documentation</h2>
        <span className="h3 d-inline-block mt-3">Disabled state</span>
        <p>Disable a radio button by adding <CodeTags type="primary" code="disabled"/> attribute to the desired radio button.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="d-flex justify-content-center">
                <Radio id="radio-example-10" label="Radio button label" name="radio-example" disabled checked/>
            </div>
        </ComponentPreview>
        <span className="h3 d-inline-block mt-3">Error state</span>
        <p>To display the error state, add the <CodeTags type="primary" code=".has-error"/> class to the parent element, then add the <CodeTags type="secondary" code="help-block-error"/> element as the last child with the error message.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="d-flex justify-content-center">
                <Radio id="radio-example-11" groupTitle="Group label" errorMessage="Error message" label="Radio button label" name="radio-example" options={ErrorStateOptions} group/>
            </div>
        </ComponentPreview>
    </section>
);


const RadioButton = () => (
    <DocContainer>
        <section id="radio-button-doc">
            <p className="lead">The radio button component should be used when the user are presented with a list of options where only one choice can be selected.</p>
            <Overview />
            <ContentGuidelines />
            <DeveloperDocumentation />
        </section>
    </DocContainer>
);

export default RadioButton;

/* for testing */
export { Overview, ContentGuidelines, DeveloperDocumentation, HowTo };
