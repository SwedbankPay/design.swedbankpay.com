import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import InputGroup from "@components/InputGroup";
import { selectOverview, whenToUse } from "./constants";
import Tag from "@components/Tag";

const WhenToUse = () => (
    <>
        <p>{whenToUse.lead}</p>
        {whenToUse.content.map(({ correct, placeholder, selectOptions, label, text }, i) => (
            <React.Fragment key={i}>
                <div className="row wrong mb-3">
                    <div className="col-12 col-sm-6 mb-2">
                        <div className="px-4 slab slab-plain slab-border-success h-100 d-flex flex-column mb-2">
                            <span className="h4">Do</span>
                            {correct}
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="px-4 slab slab-plain slab-border-error h-100 mb-2 d-flex flex-column">
                            <span className="h4">Don&#x27;t</span>
                            <div >
                                <InputGroup type="select" id={`dont-example-${i}`} label={label} placeholder={placeholder} selectOptions={selectOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                {text}
            </React.Fragment>
        ))}

    </>
);

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" codeFigure showCasePanel showCasePanelAdvanced={selectOverview} />

        {/*
            Will be back in a later release

        <h3>When to consider something else</h3>
        <ul className="pl-3">
            <li>To present a list of possible navigation options or actions that for example effects the filtering of the page, use the <Link to="/components/dropdown-menu">Dropdown menu</Link> component instead of a Select. </li>
        </ul> */}

        <h3>When to consider something else</h3>

        <WhenToUse />

    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>

        <div className="d-flex justify-content-center slab slab-plain px-5 pt-5 pb-4">
            <InputGroup type="select" id="content-guidelines-example" label="Label" placeholder="Placeholder text" selectOptions={["Related option"]} helpBlock/>
        </div>
        <ul className="pl-3">
            <li>The <b>Label</b> should be short, concise and to the point describing the functionality </li>
            <li>The <b>Placeholder text</b> should begin with the verb {"\""}Select..{"\""} preferably followed by what type of options the user is choosing from.</li>
        </ul>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h4 mt-3">Error state</span>

        <p>If the user don’t select any option in a select that is required to be filled, an error message should be displayed. Add the <Tag code type="secondary" text=".has-error"/> class to the <Tag code type="primary" text="form-group"/> element, and insert the error message in the attribute <Tag code type="primary" text="data-error"/> in the <Tag code type="primary" text="help-block"/> element. </p>

        <ComponentPreview language="html" codeFigure showCasePanel>
            <form className="no-pointer-events">
                <div className="form-group has-error">{"\n"}
                    <label htmlFor="dev-doc-example">{"\n"}
                            Label{"\n"}
                    </label>{"\n"}
                    <select className="form-control" defaultValue="placeholder" id="dev-doc-example" required>{"\n"}
                        <option value="placeholder" disabled hidden>Select option</option>{"\n"}
                    </select>
                    <div className="help-block" data-error="Descriptive helpful error message."></div>
                </div>
            </form>
        </ComponentPreview>

        <span className="h4">Disabled state</span>
        <p>Disable a select by adding the <Tag code type="primary" text="disabled"/> attribute to the desired select and the <Tag code type="primary" text="form-group"/> where the select resides.</p>
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

export { Overview, WhenToUse, ContentGuidelines, DeveloperDocumentation };
