import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import AccordionComponent from "@components/Accordion";
import CodeTags from "@components/CodeTags";

import { accordion } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const items = [
    {
        id: "exp-1",
        title: "My title",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-2",
        title: "My title",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-3",
        title: "My title",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            The accordion component hides its content <CodeTags type="secondary" code=".accordion-body" />, showing only its
            title <CodeTags type="secondary" code=".accordion-header" />, until it is opened.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <AccordionComponent items={items} />
        </ComponentPreview>
    </>
);

const AccordionGroup = () => (
    <>
        <h2 id="accordion-group">Accordion group</h2>
        <p>
            If the accordions are wrapped in a <CodeTags type="secondary" code=".accordion-group" />, only one will be open at a time.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="accordion-group">
                <AccordionComponent items={items} />
            </div>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="accordion" open close />
    </>
);

const Accordion = () => {
    useEffect(() => { accordion.init(); }, []);

    return (
        <DocContainer docToc>
            <p className="lead">
                Accordions are components that toggles between hiding and showing content
            </p>
            <Overview />
            <AccordionGroup />
            <JavascriptMethods />
            <NpmInformation componentName={"accordion"}/>
        </DocContainer>
    );
};

export default Accordion;

/* For testing */
export { Overview, AccordionGroup };
