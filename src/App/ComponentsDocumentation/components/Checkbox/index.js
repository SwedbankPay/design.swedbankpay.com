import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CheckboxComponent from "@components/FormComponents/Checkbox";
import CodeTags from "@components/CodeTags";
import { checkboxShowCase, guidelineOptions, developerDocOptions, doOptions, dontOptions } from "./constants";

const HowTo = () => (
    <section>
        <h3>How to setup checkbox groups</h3>
        <div className="row">
            <div className="col-6">
                <div className="slab slab-plain slab-border-success">
                    <span className="h3">Do</span>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 pb-4">
                            <CheckboxComponent groupTitle="Button size" name="radio-guidelines" options={doOptions} group />
                        </div>
                    </div>
                </div>
                <p>Do use short labels of similar length and sort the options either in a logical or alphabetical order.</p>
            </div>
            <div className="col-6">
                <div className="slab slab-plain slab-border-error">
                    <span className="h3">Don&#x27;t</span>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 pb-3 w-50">
                            <CheckboxComponent groupTitle="Button size" name="radio-guidelines" options={dontOptions} group />
                        </div>
                    </div>
                </div>
                <p>Avoid long labels sorted in an illogical order.</p>
            </div>
        </div>
    </section>
);

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>

        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={checkboxShowCase} />

        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>
            When you want to present multiple choices where the user can only select one specific option, the <Link to="/components/radiobutton">radio button</Link> component should be used instead of checkboxes.
            </li>
        </ul>

        <HowTo />
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="slab slab-plain">
            <div className="d-flex flex-column align-items-center py-5">
                <CheckboxComponent groupTitle="Group heading" name="radio-guidelines" options={guidelineOptions} group />
            </div>
        </div>
        <ul className="list list-bullet">
            <li>The <b>Group heading</b> should descriptive, explaining the context of the options to choose from. </li>
            <li>The <b>checkbox labels</b> should be short, to the point and clearly explain the option. It is also preferred to have fewer than three words per label as longer words could extend a label to multiple rows which could disrupt the reading experience.</li>
        </ul>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h3 d-inline-block mt-3">Disabled state</span>
        <p>Disable a checkbox by adding <CodeTags type="primary" code={"disabled"} /> attribute to the desired Checkbox.</p>

        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="d-flex justify-content-center">
                <CheckboxComponent id="disabled-example" label="Checkbox label" disabled/>
            </div>
        </ComponentPreview>

        <span className="h3 d-inline-block mt-3">Error state</span>
        <p>Insert the error message in the attribute <CodeTags type="primary" code={"data-error"} /> in the <CodeTags type="secondary" code={".help-block"} /> element. </p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="m-auto pl-5 col-sm-12 error-state-container">
                <CheckboxComponent groupTitle="Group heading" name="checkbox-group-example" options={developerDocOptions} group errorMessage="Descriptive helpful error message." />
            </div>
        </ComponentPreview>
    </section>
);

const Checkbox = () => (
    <DocContainer>
        <section id="checkbox-doc">
            <p className="lead">The checkbox component should be used when the user are presented with a list of options where one or multiple options can be selected by the user.</p>
            <Overview />
            <ContentGuidelines />
            <DeveloperDocumentation />
        </section>
    </DocContainer>
);

export default Checkbox;

/* for testing */
export { Overview, ContentGuidelines, DeveloperDocumentation, HowTo };
