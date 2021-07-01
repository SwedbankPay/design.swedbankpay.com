import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import InputGroup from "@components/InputGroup";
import { selectOverview, whenToUse } from "./constants";
import CodeTags from "@components/CodeTags";
import { Link } from "react-router-dom";

const WhenToUse = () => (
    <section>
        <p>{whenToUse.lead}</p>
        {whenToUse.content.map(({ correct, placeholder, selectOptions, label, text }, i) => (
            <React.Fragment key={i}>
                <div className="row wrong mb-3">
                    <div className="col-6">
                        <div className="px-4 slab slab-plain slab-border-success d-flex flex-column">
                            <span className="h4 mt-0 mb-3">Do</span>
                            {correct}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="px-4 slab slab-plain slab-border-error h-100">
                            <span className="h4 mt-0 mb-3">Don&#x27;t</span>
                            <div >
                                <InputGroup type="select" label={label} placeholder={placeholder} selectOptions={selectOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                {text}
            </React.Fragment>
        ))}

    </section>
);

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" codeFigure showCasePanel showCasePanelAdvanced={selectOverview} />
        {/* <h3>When to consider something else</h3>
        <ul className="pl-3">
            <li>To present a list of possible navigation options or actions that for example effects the filtering of the page, use the <Link to="/components/dropdown-menu">Dropdown menu</Link> component instead of a Select. </li>
        </ul> */}

        <h3>When to use Select</h3>

        <WhenToUse />

    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>

        <div className="d-flex justify-content-center slab slab-plain px-5 pt-5 pb-4 no-pointer-events">
            <InputGroup type="select" label="Label" placeholder="Placeholder text" selectOptions={[]} helpBlock errorMessage="Descriptive helpful error message."/>
        </div>
        <ul className="pl-3">
            <li>The <b>Label</b> should be short, concise and to the point describing the functionality </li>
            <li>The <b>Placeholder text</b> for select list should give example of what type of content is available inside the listbox. </li>
        </ul>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h4 mt-3">Error state</span>

        <p>If the user don’t select any option in a select that is required to be filled, an error message should be displayed. Add the <CodeTags type="secondary" code=".has-error"/> class to the <CodeTags type="primary" code="form-group"/> element, and insert the error message in the attribute <CodeTags type="primary" code="data-error"/> in the <CodeTags type="primary" code="help-block"/> element. </p>

        <ComponentPreview language="html" codeFigure showCasePanel>
            <form className="no-pointer-events">
                <div className="form-group has-error">{"\n"}
                    <label>{"\n"}
                            Label{"\n"}
                    </label>{"\n"}
                    <select className="form-control" defaultValue="placeholder" required>{"\n"}
                        <option value="placeholder" disabled hidden>Select option</option>{"\n"}
                    </select>
                    <div className="help-block" data-error="Descriptive helpful error message."></div>
                </div>
            </form>
        </ComponentPreview>

        <span className="h4">Disabled state</span>
        <p>Disable a select by adding the  <CodeTags type="primary" code="disabled"/>  attribute to the desired select. You can also disable a <CodeTags type="primary" code="form-group"/> or <CodeTags type="primary" code="fieldset"/>, refer to <Link to="/components/forms">forms</Link> for more info.</p>

        <ComponentPreview language="html" codeFigure showCasePanel>
            <InputGroup type="select" label="Label" placeholder="Select option" selectOptions={[]} disabled />
        </ComponentPreview>
    </section>
);

const Select = () => (
    <DocContainer>
        <section id="select-doc">
            <p className="lead">The select component is used in forms and allows the user to select a desired value. When activated the component expands and presents a scrollable list of pre-defined options which user can choose from.</p>
            <Overview />
            <ContentGuidelines />
            <DeveloperDocumentation />
        </section>
    </DocContainer>
);

export default Select;

export { Overview, ContentGuidelines, DeveloperDocumentation };
