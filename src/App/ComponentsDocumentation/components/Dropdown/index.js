import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ComponentPreview, DocContainer } from "@docutils";
import { dropdownOverview, contentGuidelines } from "./constants";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={dropdownOverview} />
        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li key="when-else-1">For important actions and information, consider displaying them <b>directly on the page</b> instead of hiding them in a Dropdown menu</li>
            <li key="when-else-2">To display a brief explanation when a cursor hovers over an interactive element, use the <Link to="/components/tooltips">Tooltip</Link> component</li>
        </ul>
        {contentGuidelines.map((section, i) => (
            <section key={`section-dropdown-${i}`} >
                <h3>{section.heading}</h3>
                <div className="row placeholder-guideline">
                    {section.examples.map(({ slabType, rowDescription, content }, i) => (
                        <Fragment key={`${rowDescription}-${i}`} >
                            <div key={rowDescription} data-i={rowDescription} className="col-lg-6 col-sm-12">
                                <div className={`slab slab-plain slab-border-${slabType}`}>
                                    <span className="h3 d-block mb-3">Do{slabType === "error" && "n't" }</span>
                                    {content}
                                </div>
                            </div>
                            { i % 2 !== 0 && rowDescription && <p className="col-12 mt-2 mb-4">{rowDescription}</p>}
                        </ Fragment>
                    ))}
                </div>
            </section>
        ))}
    </section>
);

const Dropdown = () => (
    <DocContainer>
        <p className="lead">Dropdown’s are toggleable overlays that open on demand. They let users access additional content and actions without cluttering the page.</p>
        <Overview/>
    </DocContainer>
);

export default Dropdown;

/* For testing */
export { Overview };
