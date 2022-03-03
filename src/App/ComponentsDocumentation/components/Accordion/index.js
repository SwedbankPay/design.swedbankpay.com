import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
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
            <small className="font-weight-bold">Sub section title</small>
            <p>If you want to, you can replace this text component with a local component to create a table or similar within the Accordion.</p>
            <small className="font-weight-bold">Sub section title</small>
            <p>If you want to, you can replace this text component with a local component to create a table or similar within the Accordion.</p>
        </>
    }
];

const items = {
    id: "none",
    title: "Sub content",
    content: <p>Do not use this method</p>
};

const howNotToUseItems = [
    {
        id: "exp-6",
        title: "Accordion title",
        content:
        <>
            <AccordionComponent className="accordion-open show" items={[items]}/>
            <AccordionComponent items={[items]}/>
        </>
    }
];

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <p>
        Accordions can make information discovery more effective by using progressive disclosure, that is showing the title while hiding the detailed information. They can be used to shorten pages and reduce scrolling when content is not crucial to read in full.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={accordionShowCase} removeOuterTag/>

        <h3>How to use Accordions</h3>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success pb-5">
                    <h3>Do</h3>
                    <div className="mt-3">
                        <AccordionComponent id="howToUseAccordions" className="show accordion-open" items={howToUseItems}/>
                    </div>
                </div>
                <p>Body content inside the Accordion may be split into paragraphs and include sub-headers if needed.</p>
            </div>

            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error">
                    <h3>Don&apos;t</h3>
                    <div className="mt-3">
                        <AccordionComponent id="howNotToUseAccordions" className="show accordion-open" items={howNotToUseItems}/>
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
        <ul className="list list-bullet">
            <li>The title in the Accordion header should be as brief as possible while still being clear and descriptive.</li>
            <li>The Accordion body should contain detailed information related to the title.</li>
        </ul>
    </section>
);

const DeveloperDocumentation = () => (
    <>
        <h2 id="developer-documentation">Developer documentation</h2>
        <h3 id="javascript-methods">JavaScript methods</h3>
        <p>Use <CodeTags type="secondary" code="dg.accordion.init()"/> to <Link to="/get-started/for-developers">initialize</Link> all accordions. This will open and close the accordions automatically.</p>

        <p>If you want to manually open and close a specific accordion, you need to include an <CodeTags type="primary" code="id"/> on the <CodeTags type="primary" code="accordion-body"/> element.</p>
        <p>To open a given accordion, use <CodeTags type="secondary" code="dg.accordion.open(<accordion-body-id>)"/></p>
        <p>To close a given accordion, use <CodeTags type="secondary" code="dg.accordion.close(<accordion-body-id>)"/></p>
    </>
);

const Accordion = () => {
    useEffect(() => {
        accordion.init();
    }, []);

    return (
        <DocContainer docToc>
            <section id="accordion-doc">
                <p className="lead">
                Accordions are components that toggles between hiding and showing content
                </p>
                <Overview />
                <ContentGuidelines/>
                <DeveloperDocumentation />
                <NpmInformation componentName={"accordion"}/>
            </section>
        </DocContainer>
    );
};

export default Accordion;

/* For testing */
export { Overview, ContentGuidelines, DeveloperDocumentation };
