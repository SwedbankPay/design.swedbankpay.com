import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import AccordionComponent from "@components/Accordion";

import { accordion } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";
import { accordionShowCase } from "./constants";
import CodeTags from "@components/CodeTags";

const howToUseItems = [
    {
        id: "exp-5",
        title: "Accordion title",
        content: <>
            <b>Sub section title</b>
            <p>If you want to, you can replace this text component with a local component to create a table or similar within the Accordion.</p>
            <b>Sub section title</b>
            <p>If you want to, you can replace this text component with a local component to create a table or similar within the Accordion.</p></>
    }
];

const howNotToUseItems = [
    {
        id: "exp-6",
        title: "Accordion title",
        content:
        <>
            <AccordionComponent className="accordion-open show" items={[{ id: "none",
                title: "Sub content",
                content: "Do not use this method" }]}/>
            <AccordionComponent items={[{ id: "none",
                title: "Sub content",
                content: "Do not use this method" }]}/>
        </>
    }
];

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <p>
        Accordions can make information discovery more effective by using progressive disclosure, that is showing the title while hiding the detailed information. They can be used to shorten pages and reduce scrolling when content is not crucial to read in full.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={accordionShowCase}/>

        <h3>How to use Accordions</h3>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success" style={{ height: "85%" }}>
                    <h3>Do</h3>
                    <div className="d-flex flex-column align-items-center pt-3">
                        <AccordionComponent id="howToUseAccordions" className="w-100 show accordion-open" items={howToUseItems}/>
                    </div>
                </div>
                <p>Body content inside the Accordion may be split into paragraphs and include sub-headers if needed.</p>
            </div>

            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error" style={{ height: "85%" }}>
                    <h3>Don&apos;t</h3>
                    <div className="d-flex flex-column align-items-center pt-3">
                        <AccordionComponent id="howNotToUseAccordions" className="w-100 show accordion-open" items={howNotToUseItems}/>
                    </div>
                </div>
                <p>Do not put an Accordion inside of another Accordion.</p>
            </div>
        </div>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="slab slab-plain">
            <div className="d-flex flex-column align-items-center py-5">
                <div className="accordion show accordion-open w-50">
                    <button type="button" className="accordion-header" aria-expanded="false">{"\n"}
                    Title
                    </button>
                    <div className="accordion-body">
                        <div className="example-accordion pb-5 mb-3">
                            <p className="pl-1 pt-1">Body</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul>
            <li>The title in the Accordion header should be as brief as possible while still being clear and descriptive.</li>
            <li>The Accordion body should contain detailed information related to the title.</li>
        </ul>
    </section>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="accordion" open close />
        <h4>The ID attribute</h4>
        <p>The <CodeTags type="primary" code="dg.<component_name>.init()"/> looks for every element with the appropriate component class and then sets up an event listener. If you want to manually call <CodeTags type="primary" code="dg.<component_name>.open();"/> you will need to set a specific id on the same element that has the root class.</p>
        <p>The id is placed in the <CodeTags type="secondary" code="accordion-body"/>, meaning it is this part of the component that opens and closes.</p>
    </>
);

const Accordion = () => {
    useEffect(() => {
        accordion.init();
    }, []);

    return (
        <DocContainer docToc>
            <p className="lead">
                Accordions are components that toggles between hiding and showing content
            </p>
            <Overview />
            <ContentGuidelines/>
            <JavascriptMethods />
            <NpmInformation componentName={"accordion"}/>
        </DocContainer>
    );
};

export default Accordion;

/* For testing */
export { Overview, ContentGuidelines, JavascriptMethods };
