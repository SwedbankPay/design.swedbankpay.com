import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CheckboxComponent from "@components/FormComponents/Checkbox";

const ButtonExamples = () => (
    <React.Fragment>
        <CheckboxComponent id="radio-example-1" label="Checkbox label" />
        <CheckboxComponent id="radio-example-2" label="Checkbox label" />
        <CheckboxComponent id="radio-example-3" label="Checkbox label" />
    </React.Fragment>
);

const HowTo = () => (
    <section>
        <h3>How to setup checkbox groups</h3>
        <div className="row">
            <div className="col-6">
                <div className="slab slab-plain slab-border-success h-100">
                    <h3>Do</h3>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 pb-5">
                            <h4>Button size</h4>
                            <CheckboxComponent id="radio-do-example-1" label="Small" />
                            <CheckboxComponent id="radio-do-example-2" label="Medium" />
                            <CheckboxComponent id="radio-do-example-3" label="Large" />
                        </div>
                        <p>Short and concise, similar length on the text is always preferred when setting up a checkbox group. Try to sort the options in a logical order.</p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="slab slab-plain slab-border-error">
                    <h3>Don&#x27;t</h3>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 pb-5 w-50">
                            <h4>Button size</h4>
                            <CheckboxComponent id="radio-dont-example-1" label="Super duper tiny small" />
                            <CheckboxComponent id="radio-dont-example-2" label="Large" />
                            <CheckboxComponent id="radio-dont-example-3" label="Small" />
                        </div>
                        <p>Avoid having labels longer than the rest when possible and displaying options without order.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <div className="showcase-panel d-flex flex-column align-items-center">
            <div>
                <h4>Group heading</h4>
                <ButtonExamples />
            </div>
        </div>
        <div className="p-4 border-right border-left">
            <h2>Checkbox group</h2>
            <p className="m-0">The default setup of the checkbox group always has a label on top which describes the checkbox group and each individual checkbox is then followed by a label which clearly describes what the options and what checking the box represents</p>
        </div>
        <ComponentPreview language="html" codeFigure>
            <ButtonExamples />
        </ComponentPreview>

        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>
            When you want to present multiple choices where the user can only select one specific choice, the <Link to="/components/radiobutton">radio button</Link> component should be used instead of checkboxes.
            </li>
        </ul>

        <HowTo />
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <ul className="list list-bullet">
            <li>The <b>Group heading</b> for the radio button group should be descriptive, explaining the context and what actions the user is choosing from. </li>
            <li>The <b>radio button label</b> should be short, to the point and clearly explain the option. It is also preferred to have fewer than three words per label as longer words could extend a label to multiple rows which could disrupt the reading experience.</li>
        </ul>
    </section>
);

const Checkbox = () => (
    <DocContainer>
        <p className="lead">The checkbox component should be used when the user are presented with a list of options where one or multiple options can be selected by the user.</p>
        <Overview />
        <ContentGuidelines />
    </DocContainer>
);

export default Checkbox;

/* for testing */
export { Overview, ContentGuidelines, HowTo };
